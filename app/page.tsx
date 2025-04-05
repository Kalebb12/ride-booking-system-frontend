import Header from "./_ui/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Ride with Ease</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">Experience seamless ride booking with our modern platform. Safe, reliable, and convenient.</p>
            <Link 
              href="/rides" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-indigo-100">
              <div className="text-indigo-600 text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">Wide Range of Vehicles</h3>
              <p className="text-gray-700">Choose from various vehicle types to suit your needs and preferences.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-indigo-100">
              <div className="text-indigo-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">Quick Booking</h3>
              <p className="text-gray-700">Book your ride in just a few clicks with our streamlined process.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-indigo-100">
              <div className="text-indigo-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">Safe & Reliable</h3>
              <p className="text-gray-700">Travel with confidence with our verified drivers and secure payment system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-purple-700">1</span>
              </div>
              <h3 className="font-semibold mb-2 text-purple-900">Enter Location</h3>
              <p className="text-gray-700">Input your pickup and drop-off locations</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-purple-700">2</span>
              </div>
              <h3 className="font-semibold mb-2 text-purple-900">Choose Vehicle</h3>
              <p className="text-gray-700">Select your preferred vehicle type</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="font-semibold mb-2 text-purple-900">Book & Pay</h3>
              <p className="text-gray-700">Complete your booking with secure payment</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-purple-700">4</span>
              </div>
              <h3 className="font-semibold mb-2 text-purple-900">Enjoy Ride</h3>
              <p className="text-gray-700">Sit back and enjoy your comfortable journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-blue-100">
              <p className="text-gray-700 mb-4">"Excellent service! The booking process was smooth and the driver was professional."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">John Doe</h4>
                  <p className="text-sm text-blue-600">Regular Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-blue-100">
              <p className="text-gray-700 mb-4">"Best ride booking platform I've used. Very reliable and affordable."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Jane Smith</h4>
                  <p className="text-sm text-blue-600">Business Traveler</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-blue-100">
              <p className="text-gray-700 mb-4">"The app is user-friendly and the customer support is excellent!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Mike Johnson</h4>
                  <p className="text-sm text-blue-600">Frequent User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Ride Booking</h3>
              <p className="text-gray-300">Your trusted partner for comfortable and reliable rides.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/rides" className="text-gray-300 hover:text-white transition duration-300">Book a Ride</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-300 hover:text-white transition duration-300">FAQ</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: support@ridebooking.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Ride Street, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ride Booking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
