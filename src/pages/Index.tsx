
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon, LeafIcon, BugIcon, SearchIcon, CalendarIcon, SprayCanIcon as SprayIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const features = [
    {
      icon: <BugIcon className="h-8 w-8 text-primary" />,
      title: "Pest Identification",
      description: "Upload photos of insects or plant damage to quickly identify common agricultural pests.",
      link: "/pest-detection"
    },
    {
      icon: <SprayIcon className="h-8 w-8 text-primary" />,
      title: "Treatment Recommendations",
      description: "Get tailored pesticide and control method suggestions for any detected pest.",
      link: "/pest-library"
    },
    {
      icon: <LeafIcon className="h-8 w-8 text-primary" />,
      title: "Crop Information",
      description: "Access detailed growing guides for common crops and learn which pests typically affect them.",
      link: "/crop-info"
    },
    {
      icon: <CalendarIcon className="h-8 w-8 text-primary" />,
      title: "Seasonal Planning",
      description: "Understand which crops to plant each season and what pest challenges to expect.",
      link: "/crop-info"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent -z-10" />
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Smart Pest Detection & Crop Management
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Identify pests through image recognition, get precise treatment recommendations, and learn best practices for your crops.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/pest-detection">
                  <Button size="lg" className="group">
                    Identify a Pest
                    <SearchIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/crop-info">
                  <Button size="lg" variant="outline" className="group">
                    Explore Crop Information
                    <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden fade-in-up stagger-1">
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft max-w-sm">
                  <h3 className="text-xl font-semibold mb-2">Advanced Pest Recognition</h3>
                  <p className="text-muted-foreground">
                    Our system can identify hundreds of common agricultural pests with high accuracy.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937" 
                alt="Pest detection illustration" 
                className="w-full h-auto rounded-xl object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 bg-secondary">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Comprehensive Pest & Crop Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform combines cutting-edge technology with agricultural expertise to help you identify and manage pests effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="transition-all duration-300 hover:shadow-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{feature.description}</p>
                    <Link to={feature.link} className="mt-auto">
                      <Button variant="ghost" className="p-0 h-auto group">
                        Learn more
                        <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pest Detection Preview */}
      <section className="py-20 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Instant Pest Identification Technology
              </h2>
              <p className="text-lg text-muted-foreground">
                Upload an image of a pest or affected plant, and our AI-powered system will identify the pest and provide tailored treatment recommendations.
              </p>
              <Link to="/pest-detection">
                <Button className="group">
                  Try Pest Detection
                  <SearchIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="lg:col-span-3 relative fade-in-up stagger-1">
              <div className="p-2 border rounded-xl glass-card shadow-glass overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                  alt="Pest detection example" 
                  className="w-full h-auto rounded-lg shadow-sm object-cover max-h-[400px]"
                />
                <div className="mt-4 p-4 bg-background rounded-lg shadow-soft">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-lg">Detected: Colorado Potato Beetle</div>
                    <div className="text-sm px-2 py-1 bg-primary/20 text-primary rounded-full">95% confidence</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    A serious pest of potato crops that can completely defoliate plants.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="text-xs px-2 py-1 bg-secondary rounded-full">Affected: Potato, Tomato, Eggplant</div>
                    <div className="text-xs px-2 py-1 bg-secondary rounded-full">Treatment: Crop rotation, Neem oil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-primary/5">
        <div className="container max-w-6xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to improve your crop management?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Start using our comprehensive platform to identify pests, get treatment recommendations, and learn best practices for your crops.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/pest-detection">
              <Button size="lg" className="group">
                Identify a Pest Now
                <SearchIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/crop-info">
              <Button size="lg" variant="outline" className="group">
                Browse Crop Information
                <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
