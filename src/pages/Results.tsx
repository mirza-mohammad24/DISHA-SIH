import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, ArrowLeft, FileX } from "lucide-react";
import { Button } from "@/components/ui/button";
import InternshipCard from "@/components/InternshipCard";
import { InternshipCardSkeleton } from "@/components/ui/loading-skeleton";
import Layout from "@/components/Layout/Layout";

interface Internship {
  id: string;
  title: string;
  organization: string;
  location: string;
  skills: string[];
  matchPercentage: number;
  description: string;
  applyUrl: string;
}

const Results = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userFormData, setUserFormData] = useState<any>(null);

  // Mock internship data - In production, this would come from API
  const mockInternships: Internship[] = [
    {
      id: "1",
      title: "Software Development Intern",
      organization: "Tech Innovations Ltd",
      location: "Bangalore",
      skills: ["JavaScript", "React", "Node.js"],
      matchPercentage: 92,
      description: "Join our dynamic team to work on cutting-edge web applications. You'll collaborate with senior developers and contribute to real projects that impact thousands of users.",
      applyUrl: "https://example.com/apply/1",
    },
    {
      id: "2",
      title: "Data Science Intern",
      organization: "Analytics Pro",
      location: "Mumbai",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      matchPercentage: 88,
      description: "Work with large datasets and machine learning models to derive actionable insights. Perfect opportunity to apply theoretical knowledge in a practical setting.",
      applyUrl: "https://example.com/apply/2",
    },
    {
      id: "3",
      title: "UI/UX Design Intern",
      organization: "Creative Studios",
      location: "Delhi",
      skills: ["UI/UX Design", "Figma", "User Research"],
      matchPercentage: 85,
      description: "Design intuitive user experiences for mobile and web applications. Work closely with product managers and developers to bring designs to life.",
      applyUrl: "https://example.com/apply/3",
    },
    {
      id: "4",
      title: "Digital Marketing Intern",
      organization: "Growth Marketing Co",
      location: "Remote",
      skills: ["Digital Marketing", "SEO", "Social Media"],
      matchPercentage: 78,
      description: "Learn and execute digital marketing strategies across multiple channels. Gain hands-on experience with SEO, social media marketing, and content creation.",
      applyUrl: "https://example.com/apply/4",
    },
    {
      id: "5",
      title: "Finance Intern",
      organization: "Financial Services Ltd",
      location: "Chennai",
      skills: ["Finance", "Accounting", "Excel"],
      matchPercentage: 75,
      description: "Support financial analysis and reporting activities. Work with financial models and contribute to budgeting and forecasting processes.",
      applyUrl: "https://example.com/apply/5",
    },
  ];

  useEffect(() => {
    const loadResults = async () => {
      // Get user form data from localStorage
      const storedData = localStorage.getItem('userFormData');
      if (storedData) {
        setUserFormData(JSON.parse(storedData));
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, this would be:
      // const response = await fetch('/api/recommendations', { method: 'GET' });
      // const data = await response.json();
      
      setInternships(mockInternships);
      setIsLoading(false);
    };

    loadResults();
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setInternships([...mockInternships.sort(() => Math.random() - 0.5)]);
    setIsLoading(false);
  };

  const EmptyState = () => (
    <div className="text-center py-16">
      <FileX className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-2">No Results Found</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        We couldn't find any internships matching your criteria. Try adjusting your preferences or check back later for new opportunities.
      </p>
      <Link to="/form">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Update Preferences
        </Button>
      </Link>
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Your Personalized Internship Recommendations
            </h1>
            <p className="text-muted-foreground mb-6">
              Based on your profile, we've found the best matching internships for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/form">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Update Preferences
                </Button>
              </Link>
              <Button onClick={handleRefresh} disabled={isLoading}>
                <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh Results
              </Button>
            </div>
          </div>

          {/* User Profile Summary */}
          {userFormData && (
            <div className="bg-card rounded-xl p-6 shadow-card border border-border mb-8">
              <h3 className="font-semibold text-foreground mb-4">Your Profile Summary:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">Education:</span>
                  <p className="text-foreground">{userFormData.education}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Skills:</span>
                  <p className="text-foreground">{userFormData.skills?.slice(0, 3).join(', ')}{userFormData.skills?.length > 3 ? '...' : ''}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Interests:</span>
                  <p className="text-foreground">{userFormData.interests?.slice(0, 3).join(', ')}{userFormData.interests?.length > 3 ? '...' : ''}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Location:</span>
                  <p className="text-foreground">{userFormData.location}</p>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <InternshipCardSkeleton key={index} />
              ))}
            </div>
          ) : internships.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship) => (
                <InternshipCard
                  key={internship.id}
                  title={internship.title}
                  organization={internship.organization}
                  location={internship.location}
                  skills={internship.skills}
                  matchPercentage={internship.matchPercentage}
                  description={internship.description}
                  applyUrl={internship.applyUrl}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}

          {/* Additional Information */}
          {!isLoading && internships.length > 0 && (
            <div className="mt-12 text-center">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Can't find what you're looking for? Our AI recommendations improve over time as more internships are added.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="outline" size="sm">
                      Contact Support
                    </Button>
                  </Link>
                  <Link to="/form">
                    <Button variant="outline" size="sm">
                      Try Different Criteria
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Results;