
import { Pesticide } from "./types";

export const pesticides: Pesticide[] = [
  {
    id: 1,
    name: "Neem Oil",
    type: "Botanical",
    description: "An all-purpose natural pesticide derived from the neem tree that disrupts insect feeding and reproduction.",
    effectiveAgainst: ["Aphids", "Spider Mites", "Whiteflies", "Japanese Beetles"],
    applicationMethod: "Mix with water and spray on all plant surfaces, including leaf undersides",
    safetyPrecautions: [
      "Avoid eye contact",
      "Keep away from fish and aquatic environments",
      "Apply in evening to avoid harm to beneficial insects"
    ],
    environmentalImpact: "Low impact, biodegradable"
  },
  {
    id: 2,
    name: "Bacillus thuringiensis (Bt)",
    type: "Biological",
    description: "A naturally occurring soil bacterium that produces proteins toxic to specific insect larvae.",
    effectiveAgainst: ["Cabbage Worms", "Tomato Hornworms", "Corn Earworms", "Caterpillars"],
    applicationMethod: "Mix with water and spray on leaves where caterpillars feed",
    safetyPrecautions: [
      "Safe for humans and pets",
      "Apply when caterpillars are young",
      "Reapply after rain"
    ],
    environmentalImpact: "Very low impact, targets specific pests"
  },
  {
    id: 3,
    name: "Insecticidal Soap",
    type: "Soap-based",
    description: "A contact insecticide made from potassium salts of fatty acids that breaks down insect cuticles.",
    effectiveAgainst: ["Aphids", "Mealybugs", "Spider Mites", "Whiteflies", "Thrips"],
    applicationMethod: "Dilute with water and spray directly on insects, thoroughly covering all plant surfaces",
    safetyPrecautions: [
      "Test on a small part of plant first to check for sensitivity",
      "Apply when temperatures are below 90°F",
      "Avoid applying to drought-stressed plants"
    ],
    environmentalImpact: "Low impact, biodegradable"
  },
  {
    id: 4,
    name: "Diatomaceous Earth",
    type: "Physical",
    description: "A powder made from fossilized diatoms that cuts through insect exoskeletons, causing dehydration.",
    effectiveAgainst: ["Beetles", "Ants", "Slugs", "Soil-dwelling insects"],
    applicationMethod: "Apply dry powder around plants or lightly dust on foliage",
    safetyPrecautions: [
      "Use food-grade DE for garden applications",
      "Wear a mask to avoid inhaling dust",
      "Reapply after rain"
    ],
    environmentalImpact: "Low impact when used properly, non-selective"
  },
  {
    id: 5,
    name: "Pyrethrin",
    type: "Botanical",
    description: "A natural insecticide derived from chrysanthemum flowers that affects insect nervous systems.",
    effectiveAgainst: ["Japanese Beetles", "Colorado Potato Beetles", "Cucumber Beetles", "Aphids", "Flies"],
    applicationMethod: "Mix with water and spray on affected plants",
    safetyPrecautions: [
      "Apply in evening to minimize impact on bees",
      "Toxic to fish and aquatic organisms",
      "Keep away from ponds and water sources"
    ],
    environmentalImpact: "Moderately low impact, breaks down quickly in sunlight"
  },
  {
    id: 6,
    name: "Copper Fungicide",
    type: "Mineral",
    description: "A preventative fungicide that inhibits fungal spore germination and bacterial cell growth.",
    effectiveAgainst: ["Powdery Mildew", "Downy Mildew", "Early Blight", "Late Blight", "Bacterial Spot"],
    applicationMethod: "Mix with water and spray on plants before disease appears, repeat every 7-10 days",
    safetyPrecautions: [
      "Wear gloves and avoid skin contact",
      "Can cause phytotoxicity on some plants in hot weather",
      "Do not apply when plants are under stress"
    ],
    environmentalImpact: "Moderate impact, can accumulate in soil with repeated use"
  },
  {
    id: 7,
    name: "Sulfur",
    type: "Mineral",
    description: "A preventative fungicide that inhibits spore germination and has some activity against mites.",
    effectiveAgainst: ["Powdery Mildew", "Rusts", "Spider Mites", "Leaf Spots"],
    applicationMethod: "Apply as dust or wettable powder spray before disease appears",
    safetyPrecautions: [
      "Do not apply when temperatures exceed 85°F",
      "Do not use within 30 days of oil sprays",
      "Can burn foliage if applied in hot weather"
    ],
    environmentalImpact: "Low to moderate impact"
  },
  {
    id: 8,
    name: "Spinosad",
    type: "Biological",
    description: "A fermentation product from soil bacteria that affects insect nervous systems upon contact or ingestion.",
    effectiveAgainst: ["Thrips", "Leafminers", "Caterpillars", "Colorado Potato Beetles", "Fruit Flies"],
    applicationMethod: "Mix with water and spray on plants, ensuring good coverage",
    safetyPrecautions: [
      "Apply in evening when bees are not active",
      "Allow spray to dry before allowing pets or children in treated area",
      "Reapply after heavy rain"
    ],
    environmentalImpact: "Relatively low impact, but toxic to bees when wet"
  }
];

export const getPesticidesForPest = (pestType: string): Pesticide[] => {
  const lowercasePestType = pestType.toLowerCase();
  return pesticides.filter(pesticide => 
    pesticide.effectiveAgainst.some(target => 
      target.toLowerCase().includes(lowercasePestType)
    )
  );
};
