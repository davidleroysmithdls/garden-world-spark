import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Calendar, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    serviceType: '',
    projectDetails: '',
    timeframe: '',
    agreedToContact: false
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.serviceType || !formData.agreedToContact) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, phone, service type, and consent are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Lead form submitted:', formData);
    
    setIsSubmitted(true);
    
    toast({
      title: "Quote request submitted!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        postcode: '',
        serviceType: '',
        projectDetails: '',
        timeframe: '',
        agreedToContact: false
      });
      onClose();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-4">
              Your quote request has been submitted successfully.
            </p>
            <p className="text-sm text-gray-500">
              We'll contact you within 24 hours to discuss your project and arrange a free consultation.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            Get Your Free Quote
          </DialogTitle>
          <p className="text-center text-gray-600">
            Tell us about your project and we'll provide a detailed quote within 24 hours
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode" className="text-sm font-medium">
                Postcode
              </Label>
              <Input
                id="postcode"
                value={formData.postcode}
                onChange={(e) => handleInputChange('postcode', e.target.value)}
                placeholder="Enter your postcode"
                className="w-full"
              />
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="serviceType" className="text-sm font-medium">
                Service Required *
              </Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select the service you need" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="driveway">Driveway Construction</SelectItem>
                  <SelectItem value="patio">Patio Installation</SelectItem>
                  <SelectItem value="fencing">Fencing & Gates</SelectItem>
                  <SelectItem value="landscaping">Garden Landscaping</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                  <SelectItem value="other">Other (Please specify in details)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeframe" className="text-sm font-medium">
                Project Timeframe
              </Label>
              <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="When would you like to start?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="1-3months">Within 1-3 months</SelectItem>
                  <SelectItem value="3-6months">Within 3-6 months</SelectItem>
                  <SelectItem value="6months+">6+ months</SelectItem>
                  <SelectItem value="planning">Just planning ahead</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDetails" className="text-sm font-medium">
                Project Details
              </Label>
              <Textarea
                id="projectDetails"
                value={formData.projectDetails}
                onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                placeholder="Please describe your project, including approximate size, materials preferences, and any specific requirements..."
                rows={4}
                className="w-full"
              />
            </div>
          </div>

          {/* Contact Preferences */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreedToContact"
                checked={formData.agreedToContact}
                onCheckedChange={(checked) => handleInputChange('agreedToContact', checked)}
              />
              <Label htmlFor="agreedToContact" className="text-sm text-gray-600 leading-relaxed">
                I agree to be contacted by Contractor Pros regarding my quote request. 
                We respect your privacy and will not share your information with third parties. *
              </Label>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Phone size={16} className="text-green-600" />
                <span>We'll call you within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Calendar size={16} className="text-green-600" />
                <span>Free on-site consultation arranged</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Mail size={16} className="text-green-600" />
                <span>Detailed written quote provided</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
          >
            Get My Free Quote
          </Button>
        </form>

        <div className="text-center text-xs text-gray-500 mt-4">
          By submitting this form, you agree to our terms and privacy policy.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;
