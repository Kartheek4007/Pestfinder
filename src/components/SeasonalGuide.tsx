
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SunIcon, CloudRainIcon, LeafIcon, SnowflakeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Season {
  name: string;
  icon: React.ReactNode;
  color: string;
  months: string[];
  recommendedCrops: string[];
  commonPests: string[];
  tips: string[];
}

const seasons: Season[] = [
  {
    name: "Spring",
    icon: <SunIcon className="w-5 h-5" />,
    color: "bg-season-spring text-season-spring",
    months: ["March", "April", "May"],
    recommendedCrops: ["Lettuce", "Spinach", "Peas", "Carrots", "Radishes"],
    commonPests: ["Aphids", "Cabbage Worms", "Cutworms"],
    tips: [
      "Prepare soil with organic matter before planting",
      "Start seeds indoors for summer crops",
      "Monitor for early pest infestations",
      "Use row covers to protect seedlings"
    ]
  },
  {
    name: "Summer",
    icon: <SunIcon className="w-5 h-5" />,
    color: "bg-season-summer text-season-summer",
    months: ["June", "July", "August"],
    recommendedCrops: ["Tomatoes", "Peppers", "Cucumber", "Corn", "Beans"],
    commonPests: ["Spider Mites", "Japanese Beetles", "Squash Bugs"],
    tips: [
      "Water deeply in the morning to avoid evaporation",
      "Use mulch to retain moisture and control weeds",
      "Harvest regularly to encourage production",
      "Monitor for heat stress in plants"
    ]
  },
  {
    name: "Fall",
    icon: <LeafIcon className="w-5 h-5" />,
    color: "bg-season-fall text-season-fall",
    months: ["September", "October", "November"],
    recommendedCrops: ["Kale", "Brussels Sprouts", "Cabbage", "Broccoli", "Cauliflower"],
    commonPests: ["Cabbage Loopers", "Aphids", "Slugs"],
    tips: [
      "Plant cool-season crops for fall harvest",
      "Prepare for frost with covers when needed",
      "Clean up garden debris to reduce pest overwintering",
      "Amend soil with compost after final harvest"
    ]
  },
  {
    name: "Winter",
    icon: <SnowflakeIcon className="w-5 h-5" />,
    color: "bg-season-winter text-season-winter",
    months: ["December", "January", "February"],
    recommendedCrops: ["Garlic", "Winter Onions", "Some Leafy Greens"],
    commonPests: ["Stored Product Pests", "Rodents"],
    tips: [
      "Plan next year's garden and crop rotation",
      "Order seeds and supplies",
      "Use cold frames or greenhouses for winter growing",
      "Protect perennials with mulch"
    ]
  }
];

const SeasonalGuide = () => {
  return (
    <Tabs defaultValue="Spring" className="w-full">
      <TabsList className="grid grid-cols-4 mb-6">
        {seasons.map((season) => (
          <TabsTrigger 
            key={season.name} 
            value={season.name}
            className="flex items-center gap-2 data-[state=active]:bg-transparent data-[state=active]:text-foreground relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              {season.icon}
              <span>{season.name}</span>
            </span>
            <span 
              className={cn(
                "absolute inset-0 opacity-0 group-data-[state=active]:opacity-10 transition-opacity",
                season.color.split(" ")[0]
              )}
            />
          </TabsTrigger>
        ))}
      </TabsList>
      
      {seasons.map((season) => (
        <TabsContent key={season.name} value={season.name} className="animate-fade-in space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className={cn("py-2 px-4", season.color.split(" ")[0] + "/10")}>
                <h3 className="font-medium">Recommended Crops</h3>
              </div>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {season.recommendedCrops.map((crop, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className={cn("font-normal", season.color.split(" ")[0] + "/20", season.color.split(" ")[1])}
                    >
                      {crop}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className={cn("py-2 px-4", season.color.split(" ")[0] + "/10")}>
                <h3 className="font-medium">Common Pests</h3>
              </div>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {season.commonPests.map((pest, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="font-normal bg-pest-beetle/10 text-pest-beetle border-pest-beetle/20"
                    >
                      {pest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className={cn("py-2 px-4", season.color.split(" ")[0] + "/10")}>
                <h3 className="font-medium">Growing Tips</h3>
              </div>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  {season.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <CloudRainIcon className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-medium">Weather Considerations & Preparation</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {season.name === "Spring" && "Spring brings fluctuating temperatures and increased rainfall. Be prepared with row covers for unexpected frost and ensure proper drainage to prevent waterlogging. This is the time to prepare soil with compost and organic matter before the main growing season begins."}
                {season.name === "Summer" && "Summer often brings heat waves and drought conditions. Focus on consistent watering practices, applying mulch to retain soil moisture, and providing shade for sensitive crops during extreme heat. Monitor for signs of heat stress and water early in the morning for best results."}
                {season.name === "Fall" && "Fall brings cooling temperatures and potential early frosts. Begin preparing cold-hardy crops and have frost protection ready. Clean up summer crop debris to prevent disease and pest carryover. This is an excellent time to add compost and amendments to replenish soil after summer harvests."}
                {season.name === "Winter" && "Winter brings freezing temperatures and dormancy. Focus on protecting perennial plants and planning for the next growing season. Use this time to maintain tools, order seeds, and improve garden infrastructure. In warmer regions, some cold-tolerant crops can still be grown with appropriate protection."}
              </p>
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-sm text-muted-foreground">Months:</span>
                {season.months.map((month, idx) => (
                  <Badge key={idx} variant="outline" className="font-normal">
                    {month}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default SeasonalGuide;
