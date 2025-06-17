
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BugIcon, LeafIcon, InfoIcon, HomeIcon, Menu, X, SparklesIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-4 h-4 mr-2" /> },
    { name: "Pest Detection", path: "/pest-detection", icon: <BugIcon className="w-4 h-4 mr-2" /> },
    { name: "Crop Information", path: "/crop-info", icon: <LeafIcon className="w-4 h-4 mr-2" /> },
    { name: "Pest Library", path: "/pest-library", icon: <InfoIcon className="w-4 h-4 mr-2" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b shadow-soft" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary font-bold text-xl animate-fade-in group"
        >
          <LeafIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
          <span className="relative">
            PestPedia
            <span className="absolute -top-1 -right-6">
              <SparklesIcon className="h-4 w-4 text-primary/70 animate-ping-subtle" />
            </span>
          </span>
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-all duration-300 hover:bg-primary/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? 
                <X className="h-5 w-5 transition-transform duration-300 rotate-90" /> : 
                <Menu className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
              }
            </Button>

            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-slide-up">
                <nav className="container py-4">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <li 
                        key={item.name}
                        style={{ animationDelay: `${index * 50}ms` }}
                        className="animate-slide-up"
                      >
                        <Link
                          to={item.path}
                          className={cn(
                            "flex items-center px-4 py-3 rounded-md transition-all duration-300",
                            location.pathname === item.path
                              ? "bg-primary/10 text-primary font-medium transform translate-x-2"
                              : "text-foreground hover:bg-secondary hover:transform hover:translate-x-1"
                          )}
                        >
                          <span className="mr-2">{item.icon}</span>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <li 
                  key={item.name} 
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-fade-in"
                >
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group",
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary transform scale-105"
                        : "text-foreground hover:bg-secondary hover:transform hover:scale-105"
                    )}
                  >
                    <span className="transition-transform duration-300 group-hover:rotate-12">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
