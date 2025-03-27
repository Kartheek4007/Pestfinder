
import { Link } from "react-router-dom";
import { LeafIcon, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-10 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <h3 className="font-medium text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: kartheekbotta99@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: +91 9640012290
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
