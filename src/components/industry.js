import { FaMicrochip, FaShoppingCart, FaUniversity, FaShippingFast, FaHospital, FaSuitcaseRolling, FaBook, FaIndustry } from 'react-icons/fa';

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-12 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-bold mb-4">Industries</h2>
          <div className="border-t-2 border-white w-16 mx-auto mt-4"></div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Technology */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl mb-4">
              <FaMicrochip />
            </div>
            <p className="text-white font-semibold">Technology</p>
          </div>

          {/* Ecommerce */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl mb-4">
              <FaShoppingCart />
            </div>
            <p className="text-white font-semibold">Ecommerce</p>
          </div>

          {/* Banking */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl mb-4">
              <FaUniversity />
            </div>
            <p className="text-white font-semibold">Banking</p>
          </div>

          {/* Logistics & Shipping */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl mb-4">
              <FaShippingFast />
            </div>
            <p className="text-white font-semibold">Logistics & Shipping</p>
          </div>

          {/* Hospital */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl mb-4">
              <FaHospital />
            </div>
            <p className="text-white font-semibold">Hospital</p>
          </div>

          {/* Travel */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl mb-4">
              <FaSuitcaseRolling />
            </div>
            <p className="text-white font-semibold">Travel</p>
          </div>

          {/* Education */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl mb-4">
              <FaBook />
            </div>
            <p className="text-white font-semibold">Education</p>
          </div>

          {/* Manufacturing */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-white text-5xl mb-4">
              <FaIndustry />
            </div>
            <p className="text-white font-semibold">Manufacturing</p>
          </div>
        </div>
      </div>

      {/* Optional Floating Button */}
      {/* <div className="fixed right-0 bottom-12 bg-yellow-500 text-white text-sm font-semibold py-2 px-4 rounded-l-full cursor-pointer">
        Get In Touch
      </div> */}
    </section>
  );
}
