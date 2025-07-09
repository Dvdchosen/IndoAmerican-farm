
import { Leaf, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About IndoAmerican Farm</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A family-owned farm dedicated to providing fresh, organic, and sustainable produce 
            while bridging the gap between traditional farming methods and modern agricultural practices.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide the highest quality organic produce while maintaining sustainable farming 
              practices that respect the environment and support our local community. We believe 
              in the power of fresh, wholesome food to bring families together.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Our Values</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Sustainability, quality, and community are at the heart of everything we do. 
              We use organic farming methods, support local wildlife, and maintain the 
              highest standards for animal welfare on our farm.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-semibold text-gray-900">Our Story</h2>
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              IndoAmerican Farm was founded in 1995 by the Patel family, who immigrated from 
              Gujarat, India, with a dream of combining traditional Indian farming wisdom with 
              American agricultural innovation. What started as a small 10-acre plot has grown 
              into a thriving 50-acre organic farm.
            </p>
            <p>
              Our farm specializes in free-range eggs from happy, healthy chickens that roam 
              freely on our pastures. We believe that happy animals produce better food, which 
              is why our chickens enjoy a natural diet and plenty of space to express their 
              natural behaviors.
            </p>
            <p>
              Today, we're proud to serve our local community with fresh, organic produce while 
              maintaining the traditional values of hard work, respect for nature, and commitment 
              to quality that have been passed down through generations.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center bg-white rounded-lg shadow-md p-6">
            <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Organic</h3>
            <p className="text-gray-600">
              USDA certified organic farm with sustainable farming practices.
            </p>
          </div>

          <div className="text-center bg-white rounded-lg shadow-md p-6">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Animal Welfare</h3>
            <p className="text-gray-600">
              Free-range chickens with access to pasture and natural diet.
            </p>
          </div>

          <div className="text-center bg-white rounded-lg shadow-md p-6">
            <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h3>
            <p className="text-gray-600">
              Supporting local families with fresh, healthy food since 1995.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
