
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, InfoIcon, LeafIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pest, Pesticide } from "@/data/types";

interface PestResultProps {
  pest: Pest;
  recommendedPesticides: Pesticide[];
  affectedCrops: string[];
  confidence: number;
}

const PestResult = ({ pest, recommendedPesticides, affectedCrops, confidence }: PestResultProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="w-full overflow-hidden transition-all duration-300 ease-smooth animate-zoom-in">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl flex items-center">
              {pest.name}
              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                {Math.round(confidence * 100)}% match
              </span>
            </CardTitle>
            <CardDescription className="mt-1 text-base">{pest.scientificName}</CardDescription>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
            <img 
              src={pest.imageUrl} 
              alt={pest.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="treatment">Treatment</TabsTrigger>
            <TabsTrigger value="crops">Affected Crops</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4 animate-fade-in">
            <div>
              <h4 className="font-medium flex items-center mb-2">
                <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                Description
              </h4>
              <p className="text-sm text-muted-foreground">
                {expanded ? pest.description : `${pest.description.substring(0, 150)}...`}
              </p>
              {pest.description.length > 150 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2 text-xs p-0 h-auto"
                >
                  {expanded ? (
                    <span className="flex items-center">Show less <ChevronUp className="h-3 w-3 ml-1" /></span>
                  ) : (
                    <span className="flex items-center">Read more <ChevronDown className="h-3 w-3 ml-1" /></span>
                  )}
                </Button>
              )}
            </div>

            <div>
              <h4 className="font-medium flex items-center mb-2">
                <LeafIcon className="h-4 w-4 mr-2 text-primary" />
                Damage Signs
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {pest.damageSigns.map((sign, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="treatment" className="space-y-4 animate-fade-in">
            <h4 className="font-medium flex items-center mb-2">
              <InfoIcon className="h-4 w-4 mr-2 text-primary" />
              Recommended Pesticides
            </h4>
            <div className="grid gap-3">
              {recommendedPesticides.map((pesticide) => (
                <div key={pesticide.id} className="p-3 bg-secondary rounded-md">
                  <div className="font-medium text-sm">{pesticide.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{pesticide.description}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="inline-flex items-center bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                      {pesticide.type}
                    </span>
                    <span className="inline-flex items-center bg-secondary-foreground/10 text-secondary-foreground text-xs px-2 py-0.5 rounded-full">
                      {pesticide.effectiveAgainst.join(", ")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <h4 className="font-medium mt-4 mb-2">Prevention Tips</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {pest.preventionTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="crops" className="animate-fade-in">
            <h4 className="font-medium mb-3">Commonly Affected Crops</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {affectedCrops.map((crop, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-2 text-sm rounded-md text-center border",
                    index % 2 === 0 ? "bg-accent text-accent-foreground" : "bg-secondary"
                  )}
                >
                  {crop}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="border-t bg-muted/30 flex justify-between py-3">
        <div className="text-xs text-muted-foreground">
          ID: {pest.id} • Database last updated: {new Date().toLocaleDateString()}
        </div>
        <Button variant="ghost" size="sm" className="text-xs h-auto p-1">
          Report incorrect result
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PestResult;
