import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-news-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            TamilDoc Scribe
          </h1>
          <span className="text-sm text-news-text-light font-tamil">
            செய்தி இதழ்
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors">
            Latest
          </a>
          <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors">
            Politics
          </a>
          <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors">
            Technology
          </a>
          <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors font-tamil">
            தமிழ்
          </a>
        </nav>

        <Button variant="outline" size="sm">
          Subscribe
        </Button>
      </div>
    </header>
  );
};

export default Header;