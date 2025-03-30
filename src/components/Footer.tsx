
import React from "react";
import { Link } from "react-router-dom";
import { BugIcon, LeafIcon, InstagramIcon, TwitterIcon, FacebookIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/80 backdrop-blur-sm relative">
      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
        <svg className="relative block h-12 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-background"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl mb-4 hover:translate-x-1 transition-transform duration-300">
              <LeafIcon className="h-6 w-6" />
              <span>PestPedia</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Your comprehensive resource for sustainable pest management and crop health information.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
            <div>
              <h3 className="font-medium text-lg mb-4 flex items-center">
                <BugIcon className="w-4 h-4 mr-2 text-primary" />
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/pest-detection" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Pest Detection
                  </Link>
                </li>
                <li>
                  <Link to="/pest-library" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Pest Library
                  </Link>
                </li>
                <li>
                  <Link to="/crop-info" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Crop Information
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 flex items-center">
                <LeafIcon className="w-4 h-4 mr-2 text-primary" />
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-flex transform">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-muted pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Helping farmers and gardeners implement sustainable pest management practices.
          </p>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="mt-4 md:mt-0 rounded-full hover:bg-primary/10 animate-bounce-subtle" 
            onClick={scrollToTop}
          >
            <ChevronUpIcon className="h-5 w-5" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
