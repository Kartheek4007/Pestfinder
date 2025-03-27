
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";

// Lazy-loaded pages
const PestDetection = lazy(() => import("./pages/PestDetection"));
const CropInfo = lazy(() => import("./pages/CropInfo"));
const CropDetail = lazy(() => import("./pages/CropDetail"));
const PestLibrary = lazy(() => import("./pages/PestLibrary"));
const PestDetail = lazy(() => import("./pages/PestDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/pest-detection" element={<PestDetection />} />
                  <Route path="/crop-info" element={<CropInfo />} />
                  <Route path="/crop-info/:id" element={<CropDetail />} />
                  <Route path="/pest-library" element={<PestLibrary />} />
                  <Route path="/pest-library/:id" element={<PestDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.Fragment>
);

export default App;
