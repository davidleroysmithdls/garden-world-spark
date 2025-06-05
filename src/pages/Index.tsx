
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Phone, Mail, MapPin, Users, CheckCircle, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [footerFormData, setFooterFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const { toast } = useToast();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFooterFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerFormData.name || !footerFormData.phone || !footerFormData.service) {
      toast({
        title: "Please fill in all fields",
        description: "Name, phone, and service are required.",
        variant: "destructive"
      });
      return;
    }
    console.log('Footer form submitted:', footerFormData);
    toast({
      title: "Request submitted!",
      description: "We'll call you back within 24 hours."
    });
    setFooterFormData({ name: '', phone: '', service: '' });
  };

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely fantastic work on our new driveway. Professional, punctual, and the quality is outstanding. Highly recommend Garden World Construction!",
      location: "Manchester"
    },
    {
      name: "Michael Thompson", 
      rating: 5,
      text: "They transformed our back garden with a beautiful patio and fencing. The attention to detail was incredible. Will definitely use them again.",
      location: "Leeds"
    },
    {
      name: "Emma Williams",
      rating: 5,
      text: "From quote to completion, the service was exceptional. Our new fence looks amazing and was installed quickly with minimal disruption.",
      location: "Birmingham"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "5★", label: "Average Rating" },
    { number: "100%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GW</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Garden World Construction</h1>
              <p className="text-sm text-gray-600">Professional Contractors UK</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">Call Today</span>
            </div>
            <Button onClick={() => setIsLeadFormOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">5.0 • 500+ Reviews</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="text-orange-500 block">Outdoor Space</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Expert driveways, patios, and fencing across the UK. Over 15 years of experience delivering exceptional quality and craftsmanship.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle size={20} className="text-orange-500" />
                  <span>Free on-site consultations</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle size={20} className="text-orange-500" />
                  <span>10-year guarantee on all work</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle size={20} className="text-orange-500" />
                  <span>Fully insured & certified</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsLeadFormOpen(true)} 
                  className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={scrollToServices} 
                  className="text-lg px-8 py-4 border-gray-300 hover:bg-gray-50"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80" 
                alt="Beautiful garden construction work" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-orange-500">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial design to final completion, our team delivers exceptional service across all types of home transformations project with superior workmanship, quality materials and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Driveways */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  alt="Professional driveway construction with block paving" 
                  className="w-full h-64 object-cover" 
                  src="/lovable-uploads/8e2246c9-ec57-4ce8-ba9a-460ae3e9b0d9.jpg" 
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Driveway Construction</h3>
                  <p className="text-gray-600 mb-6">
                    Transform your property's entrance with our expert driveway construction. From block paving to tarmac and resin bound surfaces.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Block paving & pattern imprinting
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Tarmac surfacing
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Resin bound surfaces
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Drainage & edging
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-gray-900 mb-4">From £2,500</div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Patios */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  alt="Beautiful patio with natural stone paving" 
                  className="w-full h-64 object-cover" 
                  src="/lovable-uploads/eae47919-0755-466f-83d4-8ebb3d5dc516.jpg" 
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Patio Installation</h3>
                  <p className="text-gray-600 mb-6">
                    Create the perfect outdoor entertaining space with our beautiful patio installations using premium materials.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Natural stone paving
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Porcelain & ceramic tiles
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Custom design layouts
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Garden integration
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-gray-900 mb-4">From £3,000</div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fencing */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  alt="Quality wooden fencing installation" 
                  className="w-full h-64 object-cover" 
                  src="/lovable-uploads/b98f0900-5a4c-4662-8dad-ea213f6bfe9c.jpg" 
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Fencing & Gates</h3>
                  <p className="text-gray-600 mb-6">
                    Secure your property with our range of high-quality fencing solutions, from traditional to contemporary designs.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Close board fencing
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Panel & picket fencing
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Gates & access controls
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-orange-500 mr-3" />
                      Repairs & maintenance
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-gray-900 mb-4">From £1,500</div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of satisfied customers across London & Home Counties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Accredited & Certified</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Checkatrade</p>
              <p className="text-sm text-gray-500">Approved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Trading Standards</p>
              <p className="text-sm text-gray-500">Approved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Fully Insured</p>
              <p className="text-sm text-gray-500">£2M Coverage</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Guarantee</p>
              <p className="text-sm text-gray-500">10 Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to schedule your project? Contact us for a free, no-obligation consultation today!
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsLeadFormOpen(true)} 
            className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4"
          >
            Get My Free Quote
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          {/* Footer Lead Form */}
          <div className="mb-12 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Request Your Free Quote
              </h3>
              <p className="text-orange-100">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>
            
            <form onSubmit={handleFooterFormSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label htmlFor="footer-name" className="text-white text-sm font-medium mb-2 block">
                    Your Name *
                  </Label>
                  <Input 
                    id="footer-name" 
                    value={footerFormData.name}
                    onChange={(e) => setFooterFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name" 
                    className="bg-white border-0" 
                  />
                </div>
                <div>
                  <Label htmlFor="footer-phone" className="text-white text-sm font-medium mb-2 block">
                    Phone Number *
                  </Label>
                  <Input 
                    id="footer-phone" 
                    type="tel" 
                    value={footerFormData.phone}
                    onChange={(e) => setFooterFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone" 
                    className="bg-white border-0" 
                  />
                </div>
                <div>
                  <Label htmlFor="footer-service" className="text-white text-sm font-medium mb-2 block">
                    Service Needed *
                  </Label>
                  <Select 
                    value={footerFormData.service} 
                    onValueChange={(value) => setFooterFormData(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger className="bg-white border-0">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="driveway">Driveway</SelectItem>
                      <SelectItem value="patio">Patio</SelectItem>
                      <SelectItem value="fencing">Fencing</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="text-center">
                <Button type="submit" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Get My Free Quote
                  <Phone className="ml-2" size={18} />
                </Button>
              </div>
            </form>
          </div>

          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">GW</span>
                </div>
                <span className="font-bold">Garden World Construction</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional contractors delivering exceptional outdoor construction services across the UK.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Driveways</li>
                <li>Patios</li>
                <li>Fencing</li>
                <li>Garden Landscaping</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>Call for Quote</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>info@gardenworldconstruction.co.uk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Serving All UK</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Why Choose Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>15+ Years Experience</li>
                <li>Fully Insured</li>
                <li>Free Quotes</li>
                <li>10 Year Guarantee</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Garden World Construction Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Lead Form Modal */}
      <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </div>
  );
};

export default Index;
