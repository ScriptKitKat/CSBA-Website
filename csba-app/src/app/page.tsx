export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">CSBA</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</a>
              <a href="#join" className="text-gray-700 hover:text-blue-600 transition-colors">Join Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Computer Science & Business
            <span className="block text-blue-600">Association</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bridging technology and business at The University of Texas at Austin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#join"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Join CSBA
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About CSBA</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h3>
              <p className="text-lg text-gray-600 mb-4">
                The Computer Science and Business Association (CSBA) at UT Austin is a student organization 
                dedicated to connecting students interested in the intersection of technology and business.
              </p>
              <p className="text-lg text-gray-600">
                We provide opportunities for networking, professional development, and hands-on experience 
                in both technical and business domains, preparing our members for successful careers in tech.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To empower students at UT Austin by fostering a community that bridges computer science 
                and business, providing resources, mentorship, and opportunities for growth in both fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-4">Professional Development</h3>
              <p className="text-blue-50">
                Workshops, resume reviews, and interview prep sessions to help you land your dream job 
                in tech or business.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-4">Networking Events</h3>
              <p className="text-blue-50">
                Connect with industry professionals, alumni, and fellow students through our regular 
                networking events and mixers.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-semibold mb-4">Industry Partnerships</h3>
              <p className="text-blue-50">
                Exclusive access to company visits, tech talks, and recruitment events with leading 
                technology and consulting firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to take your career to the next level? Join CSBA and become part of a vibrant 
            community of students passionate about technology and business.
          </p>
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Membership Benefits</h3>
            <ul className="text-left max-w-2xl mx-auto space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Access to exclusive workshops and events</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Networking opportunities with industry professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Mentorship programs and career guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Project collaboration opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Priority access to company recruitment events</span>
              </li>
            </ul>
          </div>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Involved
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions? Want to learn more? We'd love to hear from you!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <a href="mailto:contact@csba.utexas.edu" className="text-blue-600 hover:text-blue-700">
                contact@csba.utexas.edu
              </a>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-700">Instagram</a>
                <a href="#" className="text-blue-600 hover:text-blue-700">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">CSBA</h3>
              <p className="text-gray-400">
                Computer Science and Business Association at The University of Texas at Austin
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#join" className="hover:text-white transition-colors">Join Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CSBA at UT Austin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
