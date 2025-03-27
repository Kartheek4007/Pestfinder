
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BugIcon, LeafIcon, InfoIcon, HomeIcon, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-4 h-4 mr-2" /> },
    { name: "Pest Detection", path: "/pest-detection", icon: <BugIcon className="w-4 h-4 mr-2" /> },
    { name: "Crop Information", path: "/crop-info", icon: <LeafIcon className="w-4 h-4 mr-2" /> },
    { name: "Pest Library", path: "/pest-library", icon: <InfoIcon className="w-4 h-4 mr-2" /> },
  ];

  return (
    <footer className="bg-secondary py-10 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
              <LeafIcon className="h-6 w-6" />
              <span>PestPedia</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your comprehensive resource for pest identification, crop information, and agricultural guidance.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Agricultural Research
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pest Management
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Seasonal Planting Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Soil Analysis
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: contact@pestpedia.com
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PestPedia. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-destructive" />
            <span>for sustainable agriculture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
