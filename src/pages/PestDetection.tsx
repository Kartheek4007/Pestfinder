
import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import PestResult from "@/components/PestResult";
import { detectPestFromImage, DetectionResult } from "@/utils/pestDetectionService";
import { Button } from "@/components/ui/button";
import { Info, BugIcon, Upload, ArrowRight } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const PestDetection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectionResult, setDetectionResult] = useState<DetectionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelected = (file: File) => {
    setSelectedFile(file);
    setDetectionResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("Please select an image first");
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);
      
      // Call the pest detection service
      const result = await detectPestFromImage(selectedFile);
      
      setDetectionResult(result);
    } catch (err) {
      console.error("Error during pest detection:", err);
      setError("An error occurred during pest detection. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setDetectionResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Pest Detection
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload an image of a pest or affected plant, and our system will identify the pest and provide control recommendations.
          </p>
        </div>

        <div className="space-y-8">
          {!detectionResult ? (
            <>
              <div className="bg-secondary rounded-xl p-6 animate-fade-in stagger-1">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">For best results:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1.5">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Take clear, well-lit photos of the pest or damaged plant area</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Include multiple angles if possible</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>For plant damage, include both the damaged area and any visible pests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Ensure the subject is in focus and fills a good portion of the frame</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in stagger-2">
                <ImageUploader onImageSelected={handleImageSelected} isProcessing={isProcessing} />
              </div>

              {error && (
                <Alert variant="destructive" className="animate-fade-in">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex justify-center animate-fade-in stagger-3">
                <Button 
                  size="lg" 
                  onClick={handleSubmit} 
                  disabled={!selectedFile || isProcessing}
                  className="group"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing
                    </>
                  ) : (
                    <>
                      <BugIcon className="mr-2 h-5 w-5" />
                      Identify Pest
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <PestResult 
                pest={detectionResult.pest}
                recommendedPesticides={detectionResult.recommendedPesticides}
                affectedCrops={detectionResult.affectedCrops}
                confidence={detectionResult.confidence}
              />
              
              <div className="flex justify-center mt-6">
                <Button onClick={handleReset} variant="outline" className="group">
                  <Upload className="mr-2 h-4 w-4" />
                  Analyze another image
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PestDetection;
