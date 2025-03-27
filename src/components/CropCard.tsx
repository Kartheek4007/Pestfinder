
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ThermometerIcon, DropletIcon, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { Crop } from "@/data/types";

interface CropCardProps {
  crop: Crop;
  index: number;
}

const CropCard = ({ crop, index }: CropCardProps) => {
  return (
    <Card 
      className="h-full flex flex-col transition-all duration-300 hover:shadow-hover group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-0">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-xl">{crop.name}</CardTitle>
            <CardDescription>{crop.scientificName}</CardDescription>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-muted flex-shrink-0">
            <img 
              src={crop.imageUrl} 
              alt={crop.name} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4 flex-grow">
        <div className="flex flex-wrap gap-1 mb-4">
          {crop.tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <ThermometerIcon className="w-4 h-4 mr-2 text-primary" />
            <span className="text-muted-foreground">Temperature: </span>
            <span className="ml-1 font-medium">{crop.growingConditions.temperature}</span>
          </div>
          <div className="flex items-center">
            <DropletIcon className="w-4 h-4 mr-2 text-primary" />
            <span className="text-muted-foreground">Water Needs: </span>
            <span className="ml-1 font-medium">{crop.growingConditions.waterNeeds}</span>
          </div>
          <div className="flex items-center">
            <Sprout className="w-4 h-4 mr-2 text-primary" />
            <span className="text-muted-foreground">Best Soil: </span>
            <span className="ml-1 font-medium">{crop.growingConditions.soilType.join(", ")}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Link to={`/crop-info/${crop.id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CropCard;
