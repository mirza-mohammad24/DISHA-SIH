import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "team@disha.com",
      action: "mailto:team@disha.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+91 94517 92098",
      action: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our development center",
      contact: "Bangalore, Karnataka, India",
      action: "#",
    },
    {
      icon: Clock,
      title: "Support Hours",
      description: "We're here to help",
      contact: "Mon-Fri: 9AM-6PM IST",
      action: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - In production, this would send the contact form
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Get in <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Disha? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-elevated">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help and answer any questions you might have. 
                  Choose the method that works best for you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-card transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-hero p-3 rounded-xl">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {info.description}
                        </p>
                        {info.action !== "#" ? (
                          <a
                            href={info.action}
                            className="text-primary hover:underline font-medium"
                          >
                            {info.contact}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">
                            {info.contact}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* FAQ Section */}
              <Card className="p-6 bg-gradient-card">
                <h3 className="font-semibold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">
                      How accurate are the internship recommendations?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Our AI achieves 95% accuracy by analyzing multiple factors including your skills, interests, and location preferences.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">
                      Is Disha free to use?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Yes! Disha is completely free for all students participating in the PM Internship Scheme.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">
                      How often are new internships added?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We update our database daily with new opportunities from partner organizations.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Additional Support */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-hero text-primary-foreground">
              <h3 className="text-xl font-semibold mb-4">
                Need Immediate Help?
              </h3>
              <p className="mb-6 opacity-90">
                For urgent technical issues or application deadlines, reach out to us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild>
                  <a href="mailto:support@disha.com">
                    Emergency Support
                  </a>
                </Button>
                <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Live Chat
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;