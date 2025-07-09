
import { Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  // Debug: Log the image path to console
  console.log('Background image path:', '/cow-background.jpg');
  
  return (
    <div className="relative text-white min-h-[600px]">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cow-background.jpg')",
          backgroundColor: '#8B5A3C' // Fallback brown color if image doesn't load
        }}
        onError={() => console.log('Background image failed to load')}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Debug: Add a test image element to check if the file exists */}
        <img 
          src="/cow-background.jpg" 
          alt="test" 
          style={{ display: 'none' }}
          onLoad={() => console.log('Test image loaded successfully')}
          onError={() => console.log('Test image failed to load - check file path and name')}
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Farm Fresh, 
              <br />
              <span className="text-red-200">Delivered Daily</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Experience the freshest produce, dairy, and farm products sourced directly from our local farms. Quality you can taste, freshness you can trust.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
                Shop Now
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Leaf className="h-8 w-8 text-red-200 mr-3" />
                <h3 className="text-xl font-semibold">100% Organic</h3>
              </div>
              <p className="text-gray-100">Certified organic products grown with sustainable farming practices</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Award className="h-8 w-8 text-red-200 mr-3" />
                <h3 className="text-xl font-semibold">Premium Quality</h3>
              </div>
              <p className="text-gray-100">Hand-picked products that meet our highest quality standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
