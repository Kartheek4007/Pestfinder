
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon, FilterIcon } from "lucide-react";
import { pests } from "@/data/pests";
import PestCard from "@/components/PestCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PestLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  
  const categories = ["all", ...Array.from(new Set(pests.map(pest => pest.category)))];
  
  const filteredPests = pests.filter(pest => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      pest.name.toLowerCase().includes(searchLower) ||
      pest.scientificName.toLowerCase().includes(searchLower) ||
      pest.description.toLowerCase().includes(searchLower);
    
    const matchesCategory = categoryFilter === "all" || pest.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Pest Library
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive database of agricultural pests, their identification characteristics, and recommended control measures.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 animate-fade-in">
          <div className="relative w-full md:w-auto">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search pests..."
              className="w-full md:min-w-[300px] pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <FilterIcon className="h-4 w-4 text-muted-foreground" />
            <Select 
              value={categoryFilter} 
              onValueChange={setCategoryFilter}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredPests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPests.map((pest, index) => (
              <PestCard key={pest.id} pest={pest} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary rounded-lg">
            <p className="text-muted-foreground mb-4">No pests found matching your search criteria.</p>
            <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setCategoryFilter("all");
            }}>
              Reset filters
            </Button>
          </div>
        )}
        
        <div className="mt-12 p-6 border rounded-lg bg-secondary/50 animate-fade-in stagger-1">
          <h2 className="text-xl font-semibold mb-4">Understanding Pest Management</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Effective pest management often involves an integrated approach combining multiple strategies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Prevention:</span> Using resistant varieties, proper sanitation, and cultural practices to reduce pest problems before they occur.
              </li>
              <li>
                <span className="font-medium">Monitoring:</span> Regular scouting and identification to catch pest issues early.
              </li>
              <li>
                <span className="font-medium">Physical controls:</span> Using barriers, traps, or manual removal methods.
              </li>
              <li>
                <span className="font-medium">Biological controls:</span> Introducing or encouraging natural enemies of pests.
              </li>
              <li>
                <span className="font-medium">Chemical controls:</span> Using pesticides judiciously when necessary, with a preference for less toxic options.
              </li>
            </ul>
            <p>
              Always consider the environmental impact of your pest management strategies and aim for sustainable approaches that maintain the ecological balance of your garden or farm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestLibrary;
