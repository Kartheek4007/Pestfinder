
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BugIcon, LeafIcon, InfoIcon, HomeIcon, Menu, X } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary font-bold text-xl animate-fade-in"
        >
          <LeafIcon className="h-6 w-6" />
          <span>PestPedia</span>
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
                <nav className="container py-4">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          className={cn(
                            "flex items-center px-4 py-3 rounded-md transition-colors",
                            location.pathname === item.path
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-foreground hover:bg-secondary"
                          )}
                        >
                          {item.icon}
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
                <li key={item.name} className={cn("animate-fade-in", `animation-delay-[${index * 100}ms]`)}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    {item.icon}
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
