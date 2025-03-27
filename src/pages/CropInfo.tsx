
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchIcon, FilterIcon, SortAscIcon } from "lucide-react";
import { crops } from "@/data/crops";
import CropCard from "@/components/CropCard";
import SeasonalGuide from "@/components/SeasonalGuide";
import SoilTypeInfo from "@/components/SoilTypeInfo";

const CropInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all-crops");
  
  const filteredCrops = crops.filter(crop => {
    const searchLower = searchTerm.toLowerCase();
    return (
      crop.name.toLowerCase().includes(searchLower) ||
      crop.scientificName.toLowerCase().includes(searchLower) ||
      crop.description.toLowerCase().includes(searchLower) ||
      crop.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Crop Information
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore detailed information about various crops, their growing conditions, common pests, and seasonal planting guides.
          </p>
        </div>

        <Tabs defaultValue="all-crops" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <TabsList className="animate-fade-in">
              <TabsTrigger value="all-crops">Crop Library</TabsTrigger>
              <TabsTrigger value="seasonal-guide">Seasonal Guide</TabsTrigger>
              <TabsTrigger value="soil-types">Soil Types</TabsTrigger>
            </TabsList>
            
            {activeTab === "all-crops" && (
              <div className="relative animate-fade-in">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search crops..."
                  className="w-full max-w-xs pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
          </div>

          <TabsContent value="all-crops" className="animate-fade-in">
            {filteredCrops.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCrops.map((crop, index) => (
                  <CropCard key={crop.id} crop={crop} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No crops found matching your search. Try a different term.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="seasonal-guide" className="animate-fade-in">
            <SeasonalGuide />
          </TabsContent>
          
          <TabsContent value="soil-types" className="animate-fade-in">
            <SoilTypeInfo />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CropInfo;
