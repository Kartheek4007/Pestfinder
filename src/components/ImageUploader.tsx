
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Camera, Upload, X, Image as ImageIcon } from "lucide-react";

interface ImageUploaderProps {
  onImageSelected: (file: File) => void;
  isProcessing?: boolean;
}

const ImageUploader = ({ onImageSelected, isProcessing = false }: ImageUploaderProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        onImageSelected(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        onImageSelected(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const openCamera = () => {
    if (cameraInputRef.current) {
      cameraInputRef.current.click();
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (cameraInputRef.current) {
      cameraInputRef.current.value = "";
    }
  };

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        isDragging ? "border-primary border-2" : "border-border",
        selectedImage ? "p-2" : "p-6"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {selectedImage ? (
        <div className="relative">
          <img 
            src={selectedImage} 
            alt="Selected" 
            className="w-full h-auto rounded-md max-h-[500px] object-contain bg-black/5"
          />
          {!isProcessing && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white backdrop-blur-sm"
              onClick={clearImage}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          {isProcessing && (
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center rounded-md">
              <div className="animate-pulse text-white font-medium flex flex-col items-center">
                <div className="w-8 h-8 border-4 border-primary-foreground border-t-transparent rounded-full animate-spin mb-2"></div>
                <span>Analyzing image...</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center animate-fade-in">
          <div className="mb-4 p-4 bg-secondary rounded-full">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">Upload an Image</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md">
            Drag and drop an image here, or click the buttons below to take a photo or upload from your device.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
              <Upload className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
            <Button variant="outline" onClick={openCamera}>
              <Camera className="h-4 w-4 mr-2" />
              Take Photo
            </Button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <input
            type="file"
            ref={cameraInputRef}
            className="hidden"
            accept="image/*"
            capture="environment"
            onChange={handleImageChange}
          />
        </div>
      )}
    </Card>
  );
};

export default ImageUploader;
