import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon, LeafIcon, BugIcon, SearchIcon, CalendarIcon, SprayCanIcon as SprayIcon, LayoutGridIcon, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const pestDetectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    [heroRef, featuresRef, pestDetectionRef, ctaRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

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
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 md:px-6 relative opacity-0 transition-all duration-700 ease-smooth">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent -z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 -z-10" />
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-float-slow">
                Smart Pest Detection & Crop Management
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg animate-delay-100 animate-float-slow">
                Identify pests through image recognition, get precise treatment recommendations, and learn best practices for your crops.
              </p>
              <div className="flex flex-wrap gap-4 animate-delay-200 animate-float-slow">
                <Link to="/pest-detection">
                  <Button size="lg" className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                    Identify a Pest
                    <SearchIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/crop-info">
                  <Button size="lg" variant="outline" className="group transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                    Explore Crop Information
                    <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden animate-delay-300 animate-float-slow">
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft max-w-sm transform transition-all duration-500 hover:scale-105">
                  <h3 className="text-xl font-semibold mb-2">Advanced Pest Recognition</h3>
                  <p className="text-muted-foreground">
                    Our system can identify hundreds of common agricultural pests with high accuracy.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937" 
                alt="Pest detection illustration" 
                className="w-full h-auto rounded-xl object-cover min-h-[400px] transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 md:px-6 bg-secondary relative opacity-0 transition-all duration-700 ease-smooth">
        <div className="absolute top-0 w-full overflow-hidden leading-0">
          <svg 
            className="relative block w-full h-10 text-background" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-background"
            ></path>
          </svg>
        </div>
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-float-slow">
              Comprehensive Pest & Crop Management
            </h2>
            <p className="text-lg text-muted-foreground animate-delay-100 animate-float-slow">
              Our platform combines cutting-edge technology with agricultural expertise to help you identify and manage pests effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="transition-all duration-500 hover:shadow-lg hover:translate-y-[-5px] border-2 hover:border-primary/20 animate-delay"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-full bg-primary/10 w-fit mb-4 transform transition-transform duration-500 hover:rotate-12">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{feature.description}</p>
                    <Link to={feature.link} className="mt-auto">
                      <Button variant="ghost" className="p-0 h-auto group overflow-hidden">
                        <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-2">
                          Learn more
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        </span>
                        <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-0 transform rotate-180">
          <svg 
            className="relative block w-full h-10 text-background" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-background"
            ></path>
          </svg>
        </div>
      </section>

      {/* Pest Detection Preview */}
      <section ref={pestDetectionRef} className="py-20 px-4 md:px-6 opacity-0 transition-all duration-700 ease-smooth">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-float-slow">
                Instant Pest Identification Technology
              </h2>
              <p className="text-lg text-muted-foreground animate-delay-100 animate-float-slow">
                Upload an image of a pest or affected plant, and our AI-powered system will identify the pest and provide tailored treatment recommendations.
              </p>
              <Link to="/pest-detection">
                <Button className="group animate-pulse-subtle animate-delay-200 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  Try Pest Detection
                  <SearchIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="lg:col-span-3 relative">
              <div className="p-2 border rounded-xl glass-card shadow-glass overflow-hidden transform transition-all duration-500 hover:shadow-xl animate-float-slow">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                  alt="Pest detection example" 
                  className="w-full h-auto rounded-lg shadow-sm object-cover max-h-[400px] transition-transform duration-700 hover:scale-105"
                />
                <div className="mt-4 p-4 bg-background rounded-lg shadow-soft">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-lg">Detected: Colorado Potato Beetle</div>
                    <div className="text-sm px-2 py-1 bg-primary/20 text-primary rounded-full animate-pulse-subtle">95% confidence</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    A serious pest of potato crops that can completely defoliate plants.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="text-xs px-2 py-1 bg-secondary rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary">Affected: Potato, Tomato, Eggplant</div>
                    <div className="text-xs px-2 py-1 bg-secondary rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary">Treatment: Crop rotation, Neem oil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 md:px-6 bg-primary/5 relative opacity-0 transition-all duration-700 ease-smooth">
        <div className="absolute top-0 w-full overflow-hidden leading-0">
          <svg 
            className="relative block w-full h-10 text-background" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-background"
            ></path>
          </svg>
        </div>
        <div className="container max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-float-slow">
              Ready to improve your crop management?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-delay-100 animate-float-slow">
              Start using our comprehensive platform to identify pests, get treatment recommendations, and learn best practices for your crops.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-delay-200 animate-float-slow">
              <Link to="/pest-detection">
                <Button size="lg" className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  Identify a Pest Now
                  <SearchIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/crop-info">
                <Button size="lg" variant="outline" className="group transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                  Browse Crop Information
                  <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-delay-300 animate-float-slow">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Sustainable Farming</h3>
              <p className="text-sm text-muted-foreground">
                Learn eco-friendly pest management techniques that maintain soil health and biodiversity.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <BugIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Natural Predators</h3>
              <p className="text-sm text-muted-foreground">
                Discover how to attract beneficial insects that naturally control common garden pests.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <LayoutGridIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Companion Planting</h3>
              <p className="text-sm text-muted-foreground">
                Find the perfect plant companions to naturally deter pests and improve crop yields.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
