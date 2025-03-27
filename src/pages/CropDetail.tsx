
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Crop } from "@/data/types";
import { crops } from "@/data/crops";
import { pests } from "@/data/pests";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ThermometerIcon, 
  DropletIcon, 
  SunIcon, 
  CalendarIcon, 
  ClockIcon, 
  BugIcon,
  ArrowLeft,
  Sprout
} from "lucide-react";

const CropDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crop, setCrop] = useState<Crop | null>(null);
  const [relatedPests, setRelatedPests] = useState([]);
  
  useEffect(() => {
    // Find the crop with the matching ID
    const foundCrop = crops.find(c => c.id.toString() === id);
    
    if (foundCrop) {
      setCrop(foundCrop);
      
      // Find related pests that affect this crop
      const cropPests = pests.filter(pest => 
        pest.affectedCrops && 
        pest.affectedCrops.some(
          cropName => cropName.toLowerCase() === foundCrop.name.toLowerCase()
        )
      );
      
      setRelatedPests(cropPests);
    }
  }, [id]);
  
  if (!crop) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Crop not found</h2>
          <Button onClick={() => navigate('/crop-info')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Crop Library
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
          onClick={() => navigate('/crop-info')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Crop Library
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden border border-border shadow-md animate-fade-in h-full">
              <img 
                src={crop.imageUrl} 
                alt={crop.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold">{crop.name}</h1>
                <p className="text-muted-foreground italic">{crop.scientificName}</p>
                <p className="text-sm mt-2">Family: {crop.family}</p>
                
                <div className="flex flex-wrap gap-2 my-4">
                  {crop.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 animate-fade-in stagger-1">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="growing">Growing Guide</TabsTrigger>
                <TabsTrigger value="pests">Common Pests</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Description</h2>
                    <p className="text-muted-foreground">{crop.description}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Quick Facts</h2>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-3 text-primary" />
                        <span className="font-medium mr-2">Growing Season:</span>
                        <span className="text-muted-foreground">{crop.growingSeason.join(", ")}</span>
                      </li>
                      <li className="flex items-center">
                        <ClockIcon className="h-5 w-5 mr-3 text-primary" />
                        <span className="font-medium mr-2">Days to Maturity:</span>
                        <span className="text-muted-foreground">{crop.daysToMaturity}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="growing" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Growing Conditions</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <ThermometerIcon className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium block">Temperature</span>
                          <span className="text-muted-foreground">{crop.growingConditions.temperature}</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <DropletIcon className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium block">Water Needs</span>
                          <span className="text-muted-foreground">{crop.growingConditions.waterNeeds}</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Sprout className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium block">Soil Type</span>
                          <span className="text-muted-foreground">{crop.growingConditions.soilType.join(", ")}</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <SunIcon className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium block">Sunlight</span>
                          <span className="text-muted-foreground">{crop.growingConditions.sunlight}</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Planting Tips</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Start seeds indoors 6-8 weeks before the last frost date for an early harvest.</li>
                      <li>Plant in well-draining soil enriched with compost or organic matter.</li>
                      <li>Space plants according to variety recommendations for proper air circulation.</li>
                      <li>Water at the base of plants to prevent disease.</li>
                      <li>Apply mulch to retain moisture and reduce weed competition.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pests" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Common Pests & Diseases</h2>
                    <div className="space-y-4">
                      {crop.commonPests.map((pest, idx) => (
                        <div key={idx} className="flex items-start">
                          <BugIcon className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>{pest}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {relatedPests.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-xl font-semibold mb-4">Pests in Our Database</h2>
                      <div className="space-y-4">
                        {relatedPests.map(pest => (
                          <div key={pest.id} className="flex items-start border-b pb-4 last:border-0">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                              <img 
                                src={pest.imageUrl} 
                                alt={pest.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <span className="font-medium block">{pest.name}</span>
                              <span className="text-sm text-muted-foreground">{pest.scientificName}</span>
                              <div className="mt-1">
                                <Badge variant="outline" className="text-xs bg-pest-aphid/10 text-pest-aphid border-pest-aphid/20">
                                  {pest.category}
                                </Badge>
                                {pest.severity && (
                                  <Badge variant="outline" className="ml-1 text-xs bg-destructive/10 text-destructive border-destructive/20">
                                    {pest.severity} Severity
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetail;
