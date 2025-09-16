import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Code, Heart, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout/Layout";

const Form = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    education: "",
    skills: [] as string[],
    interests: [] as string[],
    location: "",
  });

  const educationOptions = [
    "High School",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Other",
  ];

  const skillsOptions = [
    "JavaScript", "Python", "Java", "React", "Node.js", "Machine Learning",
    "Data Analysis", "UI/UX Design", "Digital Marketing", "Content Writing",
    "Project Management", "Sales", "Customer Service", "Finance", "Accounting",
    "Graphic Design", "Video Editing", "Social Media", "SEO", "HTML/CSS",
  ];

  const interestsOptions = [
    "Technology", "Healthcare", "Finance", "Education", "Marketing",
    "Design", "Research", "Sales", "Operations", "Human Resources",
    "Consulting", "Non-Profit", "Government", "Startups", "E-commerce",
  ];

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.education || formData.skills.length === 0 || formData.interests.length === 0 || !formData.location) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to get accurate recommendations.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call - In production, this would be:
      // const response = await fetch('/api/recommendations', { method: 'POST', body: JSON.stringify(formData) });
      
      // Store form data in localStorage for the results page
      localStorage.setItem('userFormData', JSON.stringify(formData));
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Analysis Complete!",
        description: "We've found the perfect internships for you.",
      });
      
      navigate('/results');
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Tell Us About Yourself
            </h1>
            <p className="text-muted-foreground">
              Help our AI understand your profile to find the perfect internship matches.
            </p>
          </div>

          <Card className="p-8 shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Education */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education Level
                </Label>
                <Select value={formData.education} onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Skills (Select all that apply)
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skillsOptions.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`skill-${skill}`}
                        checked={formData.skills.includes(skill)}
                        onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                      />
                      <Label htmlFor={`skill-${skill}`} className="text-sm cursor-pointer">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Interests (Select your preferred industries)
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {interestsOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={`interest-${interest}`}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={`interest-${interest}`} className="text-sm cursor-pointer">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Preferred Location
                </Label>
                <Input
                  type="text"
                  placeholder="e.g., Mumbai, Delhi, Remote, Any"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Analyzing Your Profile...
                  </div>
                ) : (
                  <>
                    Find My Internships
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Form;