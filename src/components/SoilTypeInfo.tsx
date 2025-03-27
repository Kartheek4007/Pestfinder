
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Bug, Leaf } from "lucide-react";

interface SoilType {
  name: string;
  color: string;
  characteristics: string[];
  suitableCrops: string[];
  commonPests: {
    name: string;
    reason: string;
  }[];
  tips: string[];
}

const soilTypes: SoilType[] = [
  {
    name: "Clay",
    color: "soil-clay",
    characteristics: [
      "Heavy and compact when wet",
      "Slow-draining and retains moisture well",
      "Rich in nutrients but can be difficult to work",
      "Warms up slowly in spring"
    ],
    suitableCrops: [
      "Cabbage", "Broccoli", "Brussels Sprouts", "Beans", "Peas", "Summer Squash"
    ],
    commonPests: [
      { name: "Slugs", reason: "Attracted to moist conditions" },
      { name: "Root Maggots", reason: "Poor drainage creates favorable conditions" },
      { name: "Wireworms", reason: "Thrive in heavy, wet soil" }
    ],
    tips: [
      "Add organic matter to improve drainage and structure",
      "Avoid working soil when wet to prevent compaction",
      "Consider raised beds to improve drainage",
      "Mulch to maintain moisture in dry periods"
    ]
  },
  {
    name: "Sandy",
    color: "soil-sandy",
    characteristics: [
      "Light and loose texture",
      "Drains quickly and warms up early in spring",
      "Low in nutrients that can wash away easily",
      "Requires frequent watering"
    ],
    suitableCrops: [
      "Carrots", "Radishes", "Potatoes", "Lettuce", "Strawberries", "Melons"
    ],
    commonPests: [
      { name: "Nematodes", reason: "Thrive in warm, well-aerated soil" },
      { name: "Carrot Rust Flies", reason: "Easily lay eggs in light soil" },
      { name: "Cutworms", reason: "Can move easily through loose soil" }
    ],
    tips: [
      "Add compost and organic matter to improve water retention",
      "Use mulch to conserve moisture and reduce watering needs",
      "Consider drip irrigation for efficient water use",
      "Fertilize regularly as nutrients leach quickly"
    ]
  },
  {
    name: "Loam",
    color: "soil-loam",
    characteristics: [
      "Balanced mixture of sand, silt, and clay",
      "Good drainage while retaining adequate moisture",
      "Nutrient-rich and easy to work with",
      "Ideal for most garden plants"
    ],
    suitableCrops: [
      "Tomatoes", "Peppers", "Corn", "Cucumbers", "Most vegetables and fruits"
    ],
    commonPests: [
      { name: "Aphids", reason: "Attracted to healthy, vigorous plants" },
      { name: "Tomato Hornworms", reason: "Common on nightshade family plants" },
      { name: "Colorado Potato Beetles", reason: "Found where solanaceous crops grow well" }
    ],
    tips: [
      "Maintain soil health with regular additions of compost",
      "Practice crop rotation to prevent pest buildup",
      "Use cover crops during off-seasons to add nutrients",
      "Minimal tillage to preserve soil structure"
    ]
  },
  {
    name: "Silt",
    color: "soil-silt",
    characteristics: [
      "Smooth, slippery texture when wet",
      "Holds moisture well but can become compacted",
      "Rich in nutrients but can form a crust when dry",
      "Medium drainage capability"
    ],
    suitableCrops: [
      "Leafy Greens", "Root Vegetables", "Perennial Vegetables", "Fruit Trees"
    ],
    commonPests: [
      { name: "Snails", reason: "Thrive in moist conditions" },
      { name: "Grubs", reason: "Enjoy the balanced moisture and nutrients" },
      { name: "Fungus Gnats", reason: "Surface moisture creates breeding grounds" }
    ],
    tips: [
      "Add organic matter to improve structure and prevent crusting",
      "Avoid walking on garden beds to prevent compaction",
      "Use mulch to prevent surface crusting",
      "Incorporate sand for better drainage if needed"
    ]
  },
  {
    name: "Peat",
    color: "soil-peat",
    characteristics: [
      "High organic content from decomposed plant material",
      "Acidic pH and excellent water retention",
      "Lightweight and spongy texture",
      "Slow to warm in spring"
    ],
    suitableCrops: [
      "Blueberries", "Cranberries", "Rhododendrons", "Acid-loving plants"
    ],
    commonPests: [
      { name: "Fungus Gnats", reason: "Thrive in moist, organic conditions" },
      { name: "Root Rots", reason: "Can develop in consistently wet conditions" },
      { name: "Shore Flies", reason: "Attracted to algae that grows in wet peat" }
    ],
    tips: [
      "Mix with mineral soils for balance if pure peat",
      "Consider liming if growing non-acid-loving plants",
      "Allow surface to dry slightly between waterings",
      "Add sand to improve drainage if needed"
    ]
  }
];

const SoilTypeInfo = () => {
  const [selectedSoilType, setSelectedSoilType] = useState<SoilType>(soilTypes[0]);

  return (
    <div className="space-y-6">
      <Tabs defaultValue={soilTypes[0].name} onValueChange={(value) => {
        const soil = soilTypes.find(s => s.name === value);
        if (soil) setSelectedSoilType(soil);
      }}>
        <TabsList className="flex flex-wrap h-auto">
          {soilTypes.map((soil) => (
            <TabsTrigger 
              key={soil.name} 
              value={soil.name}
              className="relative data-[state=active]:text-foreground group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span 
                  className={cn("w-3 h-3 rounded-full bg-" + soil.color)}
                  style={{ backgroundColor: `var(--${soil.color})` }}
                />
                {soil.name}
              </span>
              <span 
                className={cn(
                  "absolute inset-0 opacity-0 group-data-[state=active]:opacity-10 transition-opacity",
                  `bg-${soil.color}`
                )}
                style={{ backgroundColor: `var(--${soil.color})` }}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">Characteristics</h3>
              <ul className="space-y-1.5 text-sm">
                {selectedSoilType.characteristics.map((char, idx) => (
                  <li key={idx} className="flex items-start">
                    <span 
                      className={cn("text-" + selectedSoilType.color + " mr-2")}
                      style={{ color: `var(--${selectedSoilType.color})` }}
                    >•</span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3 flex items-center">
                <Leaf className="w-4 h-4 mr-2 text-primary" />
                Suitable Crops
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedSoilType.suitableCrops.map((crop, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className={cn(
                      "font-normal",
                      `bg-${selectedSoilType.color}/10 text-${selectedSoilType.color} border-${selectedSoilType.color}/20`
                    )}
                    style={{ 
                      backgroundColor: `color-mix(in srgb, var(--${selectedSoilType.color}) 10%, transparent)`,
                      color: `var(--${selectedSoilType.color})`,
                      borderColor: `color-mix(in srgb, var(--${selectedSoilType.color}) 20%, transparent)`
                    }}
                  >
                    {crop}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3 flex items-center">
                <Bug className="w-4 h-4 mr-2 text-primary" />
                Common Pests
              </h3>
              <div className="space-y-2">
                {selectedSoilType.commonPests.map((pest, idx) => (
                  <div key={idx} className="text-sm">
                    <div className="font-medium">{pest.name}</div>
                    <div className="text-muted-foreground text-xs">{pest.reason}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="font-medium mb-3">Management Tips</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {selectedSoilType.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default SoilTypeInfo;
