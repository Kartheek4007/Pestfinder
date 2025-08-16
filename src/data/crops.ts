
import { Crop } from "./types";

export const crops: Crop[] = [
  {
    id: 1,
    name: "Tomato",
    scientificName: "Solanum lycopersicum",
    family: "Solanaceae",
    description: "Tomatoes are warm-season annual vegetables that are actually fruits botanically. They come in various sizes, colors, and flavors, and are one of the most popular garden crops worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&q=75&fit=crop&crop=entropy&w=400&h=400",
    growingConditions: {
      temperature: "65-85°F (18-29°C)",
      waterNeeds: "Moderate, consistent moisture",
      soilType: ["Loam", "Sandy loam"],
      sunlight: "Full sun (6-8 hours daily)"
    },
    growingSeason: ["Spring", "Summer"],
    daysToMaturity: "60-100 days depending on variety",
    commonPests: ["Tomato Hornworm", "Aphids", "Spider Mites", "Early Blight", "Late Blight"],
    tags: ["Vegetable", "Annual", "Warm Season"]
  },
  {
    id: 2,
    name: "Lettuce",
    scientificName: "Lactuca sativa",
    family: "Asteraceae",
    description: "Lettuce is a cool-season leafy vegetable that comes in many varieties, including loose-leaf, butterhead, romaine, and crisphead types. It's fast-growing and perfect for early spring or fall gardens.",
    imageUrl: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&q=75&fit=crop&crop=entropy&w=400&h=400",
    growingConditions: {
      temperature: "45-75°F (7-24°C)",
      waterNeeds: "Regular, keep soil moist",
      soilType: ["Loam", "Sandy loam"],
      sunlight: "Partial to full sun"
    },
    growingSeason: ["Spring", "Fall"],
    daysToMaturity: "45-80 days depending on variety",
    commonPests: ["Aphids", "Slugs", "Snails", "Cabbage Loopers"],
    tags: ["Vegetable", "Annual", "Cool Season"]
  },
  {
    id: 3,
    name: "Cucumber",
    scientificName: "Cucumis sativus",
    family: "Cucurbitaceae",
    description: "Cucumbers are warm-season vining vegetables that produce crisp, refreshing fruits. They can be grown on the ground or trained up trellises to save space and produce straight fruits.",
    imageUrl: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&q=75&fit=crop&crop=entropy&w=400&h=400",
    growingConditions: {
      temperature: "60-90°F (15-32°C)",
      waterNeeds: "High, needs consistent moisture",
      soilType: ["Loam", "Sandy"],
      sunlight: "Full sun"
    },
    growingSeason: ["Summer"],
    daysToMaturity: "50-70 days",
    commonPests: ["Cucumber Beetles", "Aphids", "Spider Mites", "Powdery Mildew"],
    tags: ["Vegetable", "Annual", "Warm Season", "Vine"]
  },
  {
    id: 4,
    name: "Bell Pepper",
    scientificName: "Capsicum annuum",
    family: "Solanaceae",
    description: "Bell peppers are warm-season vegetables that come in various colors like green, red, yellow, and purple. They have a sweet, crisp flesh and are rich in vitamins, especially vitamin C.",
    imageUrl: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&q=75&fit=crop&crop=entropy&w=400&h=400",
    growingConditions: {
      temperature: "70-85°F (21-29°C)",
      waterNeeds: "Moderate, consistent moisture",
      soilType: ["Loam", "Sandy loam"],
      sunlight: "Full sun"
    },
    growingSeason: ["Summer"],
    daysToMaturity: "60-90 days",
    commonPests: ["Aphids", "Spider Mites", "Pepper Maggots", "Bacterial Spot"],
    tags: ["Vegetable", "Annual", "Warm Season"]
  },
  {
    id: 5,
    name: "Carrot",
    scientificName: "Daucus carota",
    family: "Apiaceae",
    description: "Carrots are cool-season root vegetables that come in various colors including orange, purple, red, white, and yellow. They're rich in beta-carotene and have a sweet, crisp taste.",
    imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&q=75&fit=crop&crop=entropy&w=400&h=400",
    growingConditions: {
      temperature: "55-75°F (13-24°C)",
      waterNeeds: "Moderate, consistent moisture",
      soilType: ["Sandy", "Loam"],
      sunlight: "Full sun to partial shade"
    },
    growingSeason: ["Spring", "Fall"],
    daysToMaturity: "60-80 days",
    commonPests: ["Carrot Rust Flies", "Wireworms", "Nematodes", "Carrot Weevils"],
    tags: ["Vegetable", "Biennial", "Cool Season", "Root"]
  },
  {
    id: 6,
    name: "Broccoli",
    scientificName: "Brassica oleracea var. italica",
    family: "Brassicaceae",
    description: "Broccoli is a cool-season vegetable prized for its nutritious, tight clusters of flower buds. It's part of the cabbage family and rich in vitamins and minerals, especially vitamin C and K.",
    imageUrl: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&q=75&fit=crop&crop=entropy&w=400&h=400",
    growingConditions: {
      temperature: "60-70°F (15-21°C)",
      waterNeeds: "Moderate, consistent moisture",
      soilType: ["Loam", "Clay loam"],
      sunlight: "Full sun"
    },
    growingSeason: ["Spring", "Fall"],
    daysToMaturity: "60-85 days",
    commonPests: ["Cabbage Worms", "Aphids", "Flea Beetles", "Cabbage Loopers"],
    tags: ["Vegetable", "Annual", "Cool Season"]
  },
  {
    id: 7,
    name: "Zucchini",
    scientificName: "Cucurbita pepo",
    family: "Cucurbitaceae",
    description: "Zucchini is a summer squash that grows on bushy plants rather than vines. It produces abundantly in warm weather and should be harvested when fruits are young and tender, usually 6-8 inches long.",
    imageUrl: "/uploads/a88c9a19-aa0b-4247-b204-34a2e1b3f9bf.png",
    growingConditions: {
      temperature: "65-85°F (18-29°C)",
      waterNeeds: "Moderate to high",
      soilType: ["Loam", "Sandy loam"],
      sunlight: "Full sun"
    },
    growingSeason: ["Summer"],
    daysToMaturity: "45-55 days",
    commonPests: ["Squash Bugs", "Squash Vine Borers", "Cucumber Beetles", "Powdery Mildew"],
    tags: ["Vegetable", "Annual", "Warm Season", "Squash"]
  },
  {
    id: 8,
    name: "Strawberry",
    scientificName: "Fragaria × ananassa",
    family: "Rosaceae",
    description: "Strawberries are sweet, juicy fruits that grow on low-growing perennial plants. They can be June-bearing, everbearing, or day-neutral, offering different harvest times and yields.",
    imageUrl: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&q=75&fit=crop&crop=entropy&w=400&h=400",
    growingConditions: {
      temperature: "60-80°F (15-27°C)",
      waterNeeds: "Moderate, consistent moisture",
      soilType: ["Sandy loam", "Loam"],
      sunlight: "Full sun"
    },
    growingSeason: ["Spring", "Summer"],
    daysToMaturity: "Perennial, fruits in second year for June-bearing",
    commonPests: ["Slugs", "Spider Mites", "Strawberry Root Weevils", "Gray Mold"],
    tags: ["Fruit", "Perennial", "Edible"]
  },
  {
    id: 9,
    name: "Basil",
    scientificName: "Ocimum basilicum",
    family: "Lamiaceae",
    description: "Basil is a tender herb with aromatic leaves used in many cuisines, especially Italian. It comes in many varieties including sweet, Thai, lemon, and purple basil, each with their own distinct flavor profile.",
    imageUrl: "/uploads/2d49e2f8-1fd9-4aa6-b59e-61e213380634.png",
    growingConditions: {
      temperature: "65-85°F (18-29°C)",
      waterNeeds: "Moderate",
      soilType: ["Loam", "Sandy loam"],
      sunlight: "Full sun to partial shade"
    },
    growingSeason: ["Spring", "Summer"],
    daysToMaturity: "60-90 days from seed to harvest",
    commonPests: ["Aphids", "Japanese Beetles", "Slugs", "Fusarium Wilt"],
    tags: ["Herb", "Annual", "Warm Season", "Culinary"]
  },
  {
    id: 10,
    name: "Onion",
    scientificName: "Allium cepa",
    family: "Amaryllidaceae",
    description: "Onions are cool-season vegetables grown for their edible bulbs. They can be sweet, pungent, or mild depending on variety, and come in colors including yellow, red, and white.",
    imageUrl: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&q=75&fit=crop&crop=entropy&w=400&h=400",
    growingConditions: {
      temperature: "55-75°F (13-24°C)",
      waterNeeds: "Moderate",
      soilType: ["Sandy loam", "Loam"],
      sunlight: "Full sun"
    },
    growingSeason: ["Spring", "Fall"],
    daysToMaturity: "90-120 days",
    commonPests: ["Onion Maggots", "Thrips", "Nematodes", "Downy Mildew"],
    tags: ["Vegetable", "Biennial", "Cool Season", "Bulb"]
  }
];
