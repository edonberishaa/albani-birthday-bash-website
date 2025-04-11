
import Header from "@/components/Header";
import PhotoGallery from "@/components/PhotoGallery";
import VideoUpload from "@/components/VideoUpload";
import Wishes from "@/components/Wishes";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to ensure all assets are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-albani-black">
        <div className="w-16 h-16 mb-4 relative animate-float">
          <div className="absolute inset-0 rounded-full bg-albani-red opacity-75 animate-ping"></div>
          <div className="relative rounded-full bg-albani-red w-full h-full"></div>
        </div>
        <p className="text-xl text-albani-red">Duke u ngarkuar...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-albani-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="my-12 text-center">
          <p className="text-xl md:text-2xl mb-6 leading-relaxed max-w-3xl mx-auto text-gray-300">
            Sot është një ditë e veçantë për shokun tim të ngushtë Albani! 
            Festojmë së bashku dhe kujtojmë momentet tona më të bukura.
          </p>
          
          <div className="inline-block animate-pulse-red bg-albani-red text-white text-2xl md:text-3xl p-4 rounded-lg shadow-lg">
            {new Date().toLocaleDateString('sq-AL', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>
        
        <PhotoGallery />
        <VideoUpload />
        <Wishes />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
