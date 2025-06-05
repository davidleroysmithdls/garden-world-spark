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
      description: "We'll call you back within 24 hours.",
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
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
            <Button 
              onClick={() => setIsLeadFormOpen(true)}
              className="bg-green-600 hover:bg-green-700"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                ⭐ 5-Star Rated UK Contractors
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="text-green-600 block">Outdoor Space</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert driveways, patios, and fencing across the UK. Over 15 years of experience delivering exceptional quality and craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsLeadFormOpen(true)}
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 hover-scale"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={scrollToServices}
                  className="text-lg px-8 py-4 border-green-600 text-green-600 hover:bg-green-50"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80" 
                alt="Beautiful garden construction work"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">5.0</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From stunning driveways to beautiful patios and secure fencing, we deliver exceptional quality on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" 
                  alt="Professional driveway construction with block paving"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Driveways</h3>
                <p className="text-gray-600 mb-6">
                  Block paving, tarmac, and resin bound driveways built to last. Professional installation with full guarantee.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Block Paving & Tarmac
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Resin Bound Surfaces
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Full Guarantee Included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80" 
                  alt="Beautiful patio with natural stone paving"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Patios</h3>
                <p className="text-gray-600 mb-6">
                  Transform your outdoor space with stunning patios. Natural stone, porcelain, and composite materials available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Natural Stone & Porcelain
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Custom Design Service
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Professional Installation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1585128733711-ce4a9cce7b75?auto=format&fit=crop&w=400&q=80" 
                  alt="Quality wooden fencing installation"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fencing</h3>
                <p className="text-gray-600 mb-6">
                  Secure and attractive fencing solutions. Close board, panel, and decorative fencing options available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Close Board & Panel Fencing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Garden Gates & Posts
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    Durable Materials
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of satisfied customers across the UK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted & Certified</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-700">Checkatrade</p>
              <p className="text-sm text-gray-500">Approved</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-700">Trading Standards</p>
              <p className="text-sm text-gray-500">Approved</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-700">Fully Insured</p>
              <p className="text-sm text-gray-500">£2M Coverage</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-700">Guarantee</p>
              <p className="text-sm text-gray-500">10 Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get your free, no-obligation quote today. Professional consultation and competitive pricing guaranteed.
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsLeadFormOpen(true)}
            className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 hover-scale"
          >
            Get Your Free Quote Now
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          {/* Footer Lead Form */}
          <div className="mb-12 p-8 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Quick Quote Request
              </h3>
              <p className="text-green-100">
                Get a fast quote - we'll call you back within 24 hours
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
                  <Select value={footerFormData.service} onValueChange={(value) => setFooterFormData(prev => ({ ...prev, service: value }))}>
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
                <Button 
                  type="submit"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  Request Call Back
                  <Phone className="ml-2" size={18} />
                </Button>
              </div>
            </form>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
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
