import { Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout/Layout";

const Team = () => {
  const teamMembers = [
    {
      name: "Mirza Mohammad Abbas",
      role: "Team Lead & Full Stack Developer",
      image: "/placeholder-avatar.jpg",
      bio: "Computer Science student passionate about AI and web development. Leading the technical architecture of Disha.",
      skills: [
        "React",
        "Node.js",
        "Machine Learning",
        "System Design",
        "GenAI",
      ],
      social: {
        github: "https://github.com/mirza-mohammad24",
        linkedin: "www.linkedin.com/in/mirza-mohammad-abbas",
        email: "mirza@disha.com",
      },
    },
    {
      name: "Vinayak Joshi",
      role: "AI/ML Engineer",
      image: "/placeholder-avatar.jpg",
      bio: "Data Science enthusiast focused on building intelligent recommendation systems and machine learning models.",
      skills: ["Python", "TensorFlow", "Data Analysis", "Algorithm Design"],
      social: {
        github: "https://github.com/vector1505",
        linkedin: "https://linkedin.com/in/priyapatel",
        email: "vinayak@disha.com",
      },
    },
    {
      name: "Harsh Vardhan Singh",
      role: "Backend Developer",
      image: "/placeholder-avatar.jpg",
      bio: "Backend specialist ensuring robust API design and database optimization for seamless user experience.",
      skills: ["Node.js", "MySQL", "API Design", "Cloud Architecture"],
      social: {
        github: "https://github.com/prohv",
        linkedin: "https://www.linkedin.com/in/proharsh",
        email: "harsh@disha.com",
      },
    },
    {
      name: "Aarav",
      role: "Frontend Developer & UI/UX Designer",
      image: "/placeholder-avatar.jpg",
      bio: "Creative developer with a keen eye for design, crafting intuitive user interfaces and experiences.",
      skills: ["React", "Tailwind CSS", "Figma", "User Research"],
      social: {
        github: "https://github.com/aarav2910",
        linkedin: "#",
        email: "aarav@disha.com",
      },
    },
    {
      name: "Tanishtha Swami",
      role: "DevOps & Quality Assurance",
      image: "/placeholder-avatar.jpg",
      bio: "Ensuring reliable deployments and maintaining high code quality through comprehensive testing strategies.",
      skills: ["DevOps", "Testing", "CI/CD", "Monitoring"],
      social: {
        github: "https://github.com/TanishthaS",
        linkedin: "http://www.linkedin.com/in/tanishtha-swami",
        email: "tanishtha@disha.com",
      },
    },
    {
      name: "Anish Agarwal",
      role: "Product Manager & Research",
      image: "/placeholder-avatar.jpg",
      bio: "Product strategist focused on user research and ensuring Disha meets real-world student needs.",
      skills: [
        "Product Strategy",
        "User Research",
        "Project Management",
        "Analytics",
      ],
      social: {
        github: "https://github.com/Anish240206",
        linkedin: "#",
        email: "anish@disha.com",
      },
    },
  ];

  const achievements = [
    {
      title: "50,000+",
      description: "Students Reached",
    },
    {
      title: "95%",
      description: "User Satisfaction",
    },
    {
      title: "10,000+",
      description: "Successful Matches",
    },
    {
      title: "500+",
      description: "Partner Organizations",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Meet Team <span className="bg-gradient-hero bg-clip-text text-transparent">Disha</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A passionate group of students and developers united by the vision to revolutionize 
              internship discovery through artificial intelligence.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-elevated border border-border hover:shadow-lg transition-all duration-300 group">
                  {/* Avatar */}
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <User className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-foreground mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${member.social.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Together, we're making a difference in students' career journeys.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.title}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-elevated border border-border text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Shared Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                "We believe that every student deserves access to opportunities that align with their 
                potential. Through Disha, we're not just building a platform – we're creating pathways 
                to success for the next generation of professionals."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90">
                  Join Our Mission
                </Button>
                <Button variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hackathon Info */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h2 className="text-2xl font-bold mb-4">
                Smart India Hackathon 2025
              </h2>
              <p className="text-lg opacity-90 mb-4">
                Representing innovation and excellence in solving real-world problems through technology.
              </p>
              <p className="text-sm opacity-75">
                Team ID: SIH2025 | Category: Software
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;