import { Target, Lightbulb, Cpu, Database, Globe, Smartphone } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const About = () => {
  const technologies = [
    {
      name: "React.js",
      icon: Globe,
      description: "Modern frontend framework for building interactive user interfaces",
    },
    {
      name: "Node.js",
      icon: Cpu,
      description: "Server-side JavaScript runtime for building scalable APIs",
    },
    {
      name: "MySQL",
      icon: Database,
      description: "Reliable relational database for storing user profiles and internship data",
    },
    {
      name: "Vercel",
      icon: Smartphone,
      description: "Cloud platform for seamless deployment and hosting",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Disha</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bridging the gap between students and their dream internships through 
              intelligent AI-powered recommendations.
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-destructive/10 p-4 rounded-2xl w-16 h-16 mb-6">
                  <Target className="h-8 w-8 text-destructive" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The PM Internship Scheme offers thousands of opportunities, but students struggle to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Navigate through overwhelming number of internship listings
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Find internships that match their skills and interests
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Spend hours manually filtering through irrelevant opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Miss out on perfect matches due to information overload
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elevated">
                <div className="text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">10,000+</div>
                  <p className="text-muted-foreground">Internships to sort through</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-destructive mb-1">73%</div>
                    <p className="text-sm text-muted-foreground">Students feel overwhelmed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-destructive mb-1">5+ hrs</div>
                    <p className="text-sm text-muted-foreground">Average search time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elevated">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3-5</div>
                  <p className="text-muted-foreground">Personalized recommendations</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">95%</div>
                    <p className="text-sm text-muted-foreground">Match accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">&lt;2 min</div>
                    <p className="text-sm text-muted-foreground">Time to results</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-primary/10 p-4 rounded-2xl w-16 h-16 mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Disha uses advanced AI algorithms to analyze your profile and deliver:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Personalized internship recommendations based on your skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Intelligent matching with compatibility scores
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Instant results saving hours of manual searching
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Direct application links for seamless process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Built with Modern Technology
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We leverage cutting-edge technologies to ensure scalability, reliability, and performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-card border border-border text-center group hover:shadow-elevated transition-all duration-300">
                  <div className="bg-gradient-hero p-3 rounded-2xl w-14 h-14 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To democratize access to quality internship opportunities by making the discovery 
              process intelligent, efficient, and personalized for every student in India.
            </p>
            <div className="bg-gradient-card rounded-xl p-8 shadow-card border border-border">
              <p className="text-lg text-foreground font-medium">
                "Empowering the next generation of professionals through AI-driven career guidance."
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                — Team HackStreet Boys, Smart India Hackathon 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;