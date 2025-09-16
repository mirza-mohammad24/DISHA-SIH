import { MapPin, Building, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface InternshipCardProps {
  title: string;
  organization: string;
  location: string;
  skills: string[];
  matchPercentage: number;
  description: string;
  applyUrl?: string;
}

const InternshipCard = ({
  title,
  organization,
  location,
  skills,
  matchPercentage,
  description,
  applyUrl = "#",
}: InternshipCardProps) => {
  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-100 text-green-800 border-green-200";
    if (percentage >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <div className="bg-gradient-card rounded-xl p-6 shadow-elevated border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>{organization}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getMatchColor(matchPercentage)}`}>
          <div className="flex items-center space-x-1">
            <TrendingUp className="h-3 w-3" />
            <span>{matchPercentage}% match</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>

      {/* Skills */}
      <div className="mb-6">
        <p className="text-sm font-medium text-foreground mb-2">Key Skills Match:</p>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 4} more
            </Badge>
          )}
        </div>
      </div>

      {/* Apply Button */}
      <Button 
        className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90"
        onClick={() => window.open(applyUrl, '_blank')}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Apply Now
      </Button>
    </div>
  );
};

export default InternshipCard;