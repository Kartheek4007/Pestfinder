import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CameraIcon, BookOpenIcon, Leaf, AlertTriangle, TrendingUp, Clock, Droplets, Sun } from "lucide-react";
import { crops } from "@/data/crops";
import { pests } from "@/data/pests";

const Index = () => {
  const featuredCrops = crops.slice(0, 6);
  const commonPests = pests.slice(0, 4);
  
  const currentMonth = new Date().getMonth();
  const currentSeason = currentMonth >= 2 && currentMonth <= 4 ? "Spring" : 
                       currentMonth >= 5 && currentMonth <= 8 ? "Summer" : "Fall";
  
  const seasonalCrops = crops.filter(crop => crop.growingSeason.includes(currentSeason));
  
  const quickStats = [
    { label: "Crop Varieties", value: crops.length, icon: <Leaf className="h-5 w-5" /> },
    { label: "Identified Pests", value: pests.length, icon: <AlertTriangle className="h-5 w-5" /> },
    { label: "Growing Seasons", value: "4", icon: <Sun className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Smart Agriculture Platform
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Identify pests instantly, discover optimal growing conditions, and protect your crops with expert guidance.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/pest-detection">
                <Button size="lg" className="gap-2">
                  <CameraIcon className="h-5 w-5" />
                  Detect Pest Now
                </Button>
              </Link>
              <Link to="/pest-library">
                <Button size="lg" variant="outline" className="gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Browse Pests
                </Button>
              </Link>
              <Link to="/crop-info">
                <Button size="lg" variant="outline" className="gap-2">
                  <BookOpenIcon className="h-5 w-5" />
                  Explore Crops
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {quickStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2 text-primary">
                    {stat.icon}
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pests to Watch */}
      <section className="py-16 px-4 md:px-6 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Common Pests to Watch</h2>
              <p className="text-muted-foreground">Identify and manage these frequent garden threats</p>
            </div>
            <Link to="/pest-library">
              <Button variant="ghost">View All Pests →</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonPests.map((pest) => (
              <Link key={pest.id} to={`/pest/${pest.id}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                  <CardContent className="p-4">
                    <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                      <img 
                        src={pest.imageUrl} 
                        alt={pest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{pest.name}</h3>
                        <Badge variant={pest.severity === "High" ? "destructive" : "secondary"}>
                          {pest.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {pest.description}
                      </p>
                      <div className="text-xs text-muted-foreground pt-2">
                        Affects: {pest.affectedCrops.slice(0, 2).join(", ")}
                        {pest.affectedCrops.length > 2 && ` +${pest.affectedCrops.length - 2} more`}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Crops Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Popular Crops</h2>
              <p className="text-muted-foreground">Complete growing guides and pest management info</p>
            </div>
            <Link to="/crop-info">
              <Button variant="ghost">View All Crops →</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCrops.map((crop) => (
              <Link key={crop.id} to={`/crop/${crop.id}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                  <CardContent className="p-4">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                      <img 
                        src={crop.imageUrl} 
                        alt={crop.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{crop.name}</h3>
                      <p className="text-sm italic text-muted-foreground">{crop.scientificName}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {crop.growingSeason.map((season) => (
                          <Badge key={season} variant="outline" className="text-xs">
                            {season}
                          </Badge>
                        ))}
                      </div>
                      <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          <span>{crop.daysToMaturity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="h-3 w-3" />
                          <span>{crop.growingConditions.waterNeeds}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16 px-4 md:px-6 bg-accent/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4">{currentSeason} Season</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-2">What to Plant This {currentSeason}</h2>
            <p className="text-muted-foreground">Optimal crops for the current growing season</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {seasonalCrops.slice(0, 5).map((crop) => (
              <Link key={crop.id} to={`/crop/${crop.id}`}>
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                      <img 
                        src={crop.imageUrl} 
                        alt={crop.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-sm">{crop.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{crop.daysToMaturity}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {seasonalCrops.length > 5 && (
            <div className="text-center mt-6">
              <Link to="/crop-info">
                <Button variant="outline">
                  View All {currentSeason} Crops ({seasonalCrops.length})
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Essential Growing Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Companion Planting</h3>
                    <p className="text-sm text-muted-foreground">
                      Plant compatible crops together to naturally deter pests and improve yields. Basil with tomatoes, marigolds with vegetables.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Crop Rotation</h3>
                    <p className="text-sm text-muted-foreground">
                      Rotate crops annually to prevent soil depletion and reduce pest buildup. Never plant the same family in the same spot.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Early Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      Inspect plants regularly for early signs of pests. Quick action prevents small problems from becoming infestations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
