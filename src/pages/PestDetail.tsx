
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pest } from "@/data/types";
import { pests } from "@/data/pests";
import { pesticides, getPesticidesForPest } from "@/data/pesticides";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BugIcon, 
  ArrowLeft,
  ShieldCheck,
  LeafIcon,
  InfoIcon,
  AlertTriangle
} from "lucide-react";

const PestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pest, setPest] = useState<Pest | null>(null);
  const [recommendedPesticides, setRecommendedPesticides] = useState([]);
  
  useEffect(() => {
    // Find the pest with the matching ID
    const foundPest = pests.find(p => p.id.toString() === id);
    
    if (foundPest) {
      setPest(foundPest);
      
      // Get recommended pesticides for this pest
      const pesticidesForPest = getPesticidesForPest(foundPest.category);
      setRecommendedPesticides(pesticidesForPest);
    }
  }, [id]);
  
  if (!pest) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Pest not found</h2>
          <Button onClick={() => navigate('/pest-library')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Pest Library
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate('/pest-library')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Pest Library
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden border border-border shadow-md animate-fade-in h-full">
              <img 
                src={pest.imageUrl} 
                alt={pest.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold">{pest.name}</h1>
                <p className="text-muted-foreground italic">{pest.scientificName}</p>
                
                <div className="flex flex-wrap gap-2 my-4">
                  <Badge variant="outline" className="bg-pest-aphid/10 text-pest-aphid border-pest-aphid/20">
                    {pest.category}
                  </Badge>
                  {pest.severity && (
                    <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                      {pest.severity} Severity
                    </Badge>
                  )}
                </div>
                
                {pest.affectedCrops && pest.affectedCrops.length > 0 && (
                  <div className="mt-4">
                    <div className="text-sm font-medium flex items-center mb-2">
                      <LeafIcon className="w-4 h-4 mr-1 text-primary" />
                      Affected Crops:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {pest.affectedCrops.map((crop, idx) => (
                        <Badge key={idx} variant="secondary" className="font-normal text-xs">
                          {crop}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 animate-fade-in stagger-1">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="damage">Damage Signs</TabsTrigger>
                <TabsTrigger value="treatment">Treatment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Description</h2>
                    <p className="text-muted-foreground">{pest.description}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
                      Severity Level
                    </h2>
                    <div className="p-4 rounded-md border bg-secondary">
                      <div className="flex items-center">
                        <div className="w-full bg-secondary-foreground/20 rounded-full h-2.5">
                          <div 
                            className="bg-destructive h-2.5 rounded-full" 
                            style={{ 
                              width: pest.severity === "Low" ? "33%" : 
                                   pest.severity === "Medium" ? "66%" : "100%" 
                            }}
                          ></div>
                        </div>
                        <span className="ml-3 font-medium text-sm">{pest.severity || "Medium"}</span>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {pest.severity === "Low" 
                          ? "Generally manageable with basic preventive measures." 
                          : pest.severity === "Medium" 
                            ? "Requires prompt attention to prevent significant crop damage." 
                            : "Can cause severe damage and rapid crop loss if not addressed immediately."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="damage" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Damage Identification</h2>
                    <div className="space-y-4">
                      {pest.damageSigns.map((sign, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-secondary/50 rounded-md">
                          <BugIcon className="h-5 w-5 mr-3 text-pest-aphid flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{sign}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Early Warning Signs</h2>
                    <p className="text-muted-foreground mb-4">
                      Look for these early warning signs to catch infestations before they become severe:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Unusual discoloration or spotting on leaves</li>
                      <li>Distorted or curled new growth</li>
                      <li>Presence of small dots or insects on the undersides of leaves</li>
                      <li>Sticky residue (honeydew) on leaves or ground below plants</li>
                      <li>Unexplained wilting despite adequate watering</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="treatment" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                      Recommended Pesticides
                    </h2>
                    <div className="grid gap-4">
                      {recommendedPesticides.length > 0 ? (
                        recommendedPesticides.map((pesticide, idx) => (
                          <div key={idx} className="p-4 border rounded-md bg-secondary/50">
                            <div className="font-medium">{pesticide.name}</div>
                            <div className="text-sm text-muted-foreground mt-1">{pesticide.description}</div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                {pesticide.type}
                              </Badge>
                              <Badge variant="outline">
                                {pesticide.effectiveAgainst.join(", ")}
                              </Badge>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center p-4 border rounded-md">
                          <p className="text-muted-foreground">No specific pesticides found for this pest.</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <InfoIcon className="h-5 w-5 mr-2 text-primary" />
                      Prevention Tips
                    </h2>
                    <div className="space-y-3">
                      {pest.preventionTips.map((tip, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                            <span className="text-primary font-medium text-sm">{idx + 1}</span>
                          </div>
                          <span className="text-muted-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestDetail;
