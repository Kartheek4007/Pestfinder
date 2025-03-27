
export interface Pest {
  id: number | string;
  name: string;
  scientificName: string;
  category: string;
  description: string;
  imageUrl: string;
  damageSigns: string[];
  preventionTips: string[];
  affectedCrops?: string[];
  severity?: "Low" | "Medium" | "High";
}

export interface Pesticide {
  id: number | string;
  name: string;
  type: string;
  description: string;
  effectiveAgainst: string[];
  applicationMethod: string;
  safetyPrecautions: string[];
  environmentalImpact: string;
}

export interface Crop {
  id: number | string;
  name: string;
  scientificName: string;
  family: string;
  description: string;
  imageUrl: string;
  growingConditions: {
    temperature: string;
    waterNeeds: string;
    soilType: string[];
    sunlight: string;
  };
  growingSeason: string[];
  daysToMaturity: number | string;
  commonPests: string[];
  tags: string[];
}

export interface SoilType {
  id: string;
  name: string;
  characteristics: string[];
  suitableCrops: string[];
  unsuitable: string[];
  improvements: string[];
}

export interface Season {
  id: string;
  name: string;
  months: string[];
  recommendedCrops: string[];
  commonPests: string[];
  tips: string[];
}
