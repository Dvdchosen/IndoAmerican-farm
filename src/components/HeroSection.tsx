
import { Leaf, Truck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Farm Fresh, 
              <br />
              <span className="text-green-200">Delivered Daily</span>
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Experience the freshest produce, dairy, and farm products sourced directly from our local farms. Quality you can taste, freshness you can trust.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold">
              Shop Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Leaf className="h-8 w-8 text-green-200 mr-3" />
                <h3 className="text-xl font-semibold">100% Organic</h3>
              </div>
              <p className="text-green-100">Certified organic products grown with sustainable farming practices</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Truck className="h-8 w-8 text-green-200 mr-3" />
                <h3 className="text-xl font-semibold">Farm to Table</h3>
              </div>
              <p className="text-green-100">Fresh delivery from farm to your table within 24 hours of harvest</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Award className="h-8 w-8 text-green-200 mr-3" />
                <h3 className="text-xl font-semibold">Premium Quality</h3>
              </div>
              <p className="text-green-100">Hand-picked products that meet our highest quality standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
