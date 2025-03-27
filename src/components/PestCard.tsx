
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, LeafIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Pest } from "@/data/types";

interface PestCardProps {
  pest: Pest;
  index: number;
}

const PestCard = ({ pest, index }: PestCardProps) => {
  return (
    <Card 
      className="h-full flex flex-col transition-all duration-300 hover:shadow-hover group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-0">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-xl">{pest.name}</CardTitle>
            <CardDescription>{pest.scientificName}</CardDescription>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-muted flex-shrink-0">
            <img 
              src={pest.imageUrl} 
              alt={pest.name} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4 flex-grow">
        <div className="flex flex-wrap gap-1 mb-4">
          <Badge variant="outline" className="bg-pest-aphid/10 text-pest-aphid border-pest-aphid/20">{pest.category}</Badge>
          {pest.severity && (
            <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
              {pest.severity} Severity
            </Badge>
          )}
        </div>
        <div className="text-sm text-muted-foreground line-clamp-3">
          {pest.description}
        </div>
        
        {pest.affectedCrops && pest.affectedCrops.length > 0 && (
          <div className="mt-4">
            <div className="text-sm font-medium flex items-center mb-2">
              <LeafIcon className="w-4 h-4 mr-1 text-primary" />
              Affected Crops:
            </div>
            <div className="flex flex-wrap gap-1">
              {pest.affectedCrops.slice(0, 3).map((crop, idx) => (
                <Badge key={idx} variant="secondary" className="font-normal text-xs">
                  {crop}
                </Badge>
              ))}
              {pest.affectedCrops.length > 3 && (
                <Badge variant="secondary" className="font-normal text-xs">
                  +{pest.affectedCrops.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Link to={`/pest-library/${pest.id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PestCard;
