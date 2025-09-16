import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout/Layout";

const Home = () => {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Matching",
      description: "Our advanced algorithm analyzes your profile to find the perfect internship matches.",
    },
    {
      icon: Users,
      title: "PM Internship Scheme",
      description: "Specifically designed for the Prime Minister's Internship Scheme opportunities.",
    },
    {
      icon: Zap,
      title: "Quick Results",
      description: "Get top 3-5 personalized recommendations in seconds, not hours.",
    },
  ];

  const stats = [
    { label: "Internships Available", value: "10,000+" },
    { label: "Students Helped", value: "50,000+" },
    { label: "Success Rate", value: "95%" },
    { label: "Partner Organizations", value: "500+" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Disha: Your Personal{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Internship Navigator
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered tool to simplify the PM Internship Scheme by recommending top 3–5 
              internships tailored specifically for your skills, interests, and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/form">
                <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Disha?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge AI to make internship discovery effortless and precise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Find Your Perfect Internship?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who have successfully found their dream internships through Disha.
          </p>
          <Link to="/form">
            <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 px-8 py-3">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;