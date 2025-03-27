
import { Pest } from "@/data/pests";
import { pests } from "@/data/pests";
import { pesticides, getPesticidesForPest } from "@/data/pesticides";
import { Pesticide } from "@/data/types";

// In a real application, this would be using an actual ML model
// But for this demo we'll simulate the detection with mock data

export interface DetectionResult {
  pest: Pest;
  confidence: number;
  recommendedPesticides: Pesticide[];
  affectedCrops: string[];
}

export const detectPestFromImage = async (imageFile: File): Promise<DetectionResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // For demo, return a random pest
  const randomIndex = Math.floor(Math.random() * pests.length);
  const detectedPest = pests[randomIndex];
  
  // Generate a random confidence score (75-98%)
  const confidence = 0.75 + (Math.random() * 0.23);
  
  // Get recommended pesticides for this pest
  let recommendedPesticides: Pesticide[] = [];
  
  // Find pesticides effective against this type of pest or specific pest
  const pestType = detectedPest.category;
  recommendedPesticides = getPesticidesForPest(pestType);
  
  // If none found, get random pesticides (just in case)
  if (recommendedPesticides.length === 0) {
    const randomPesticideIndices = new Set<number>();
    while (randomPesticideIndices.size < 2) {
      randomPesticideIndices.add(Math.floor(Math.random() * pesticides.length));
    }
    recommendedPesticides = Array.from(randomPesticideIndices).map(idx => pesticides[idx]);
  }
  
  // Get affected crops
  const affectedCrops = detectedPest.affectedCrops || [];
  
  return {
    pest: detectedPest,
    confidence,
    recommendedPesticides,
    affectedCrops
  };
};

// In a real application, this function would send the image to a server or ML model
export const preprocessImage = async (imageFile: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(imageFile);
  });
};
