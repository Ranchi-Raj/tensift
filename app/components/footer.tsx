import { Fish, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Innovation", href: "#innovation" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    { name: "Fish Feed Production", href: "#" },
    { name: "Organic Fertilizer", href: "#" },
    { name: "Custom Solutions", href: "#" },
    { name: "Consultation", href: "#" },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#222831] via-[#393E46] to-[#222831] text-[#EEEEEE] border-t border-[#00ADB5]/20 backdrop-blur-sm shadow-inner">
  <div className="container mx-auto px-4 py-16">
    <div className="grid lg:grid-cols-4 gap-10">
      {/* Company Info */}
      <div className="lg:col-span-1">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-br from-[#00ADB5] to-[#180161] p-2 rounded-full shadow-lg">
            <Fish className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#180161] text-transparent bg-clip-text">
              Tensift Farmers
            </h3>
            <p className="text-sm text-[#EEEEEE]/70">Fertilizer Pvt. Ltd.</p>
          </div>
        </div>
        <p className="text-[#EEEEEE]/80 leading-relaxed mb-6">
          Revolutionizing aquaculture with sustainable feed solutions. Transforming waste into valuable resources
          for a better tomorrow.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="bg-[#393E46] p-2 rounded-full hover:bg-gradient-to-br hover:from-[#00ADB5] hover:to-[#180161] transition-all duration-200 shadow-md"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-bold text-[#00ADB5] mb-6">Quick Links</h4>
        <ul className="space-y-3">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-[#EEEEEE]/80 hover:text-[#00ADB5] transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-bold text-[#00ADB5] mb-6">Our Services</h4>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index}>
              <a href={service.href} className="text-[#EEEEEE]/80 hover:text-[#00ADB5] transition-colors duration-200">
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-bold text-[#00ADB5] mb-6">Contact Info</h4>
        <div className="space-y-4 text-[#EEEEEE]/80">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-[#00ADB5] mt-1 flex-shrink-0" />
            <div>
              <p>Head Office:
                1st Floor, TFFCO House, Bishnu Nagar, Aska Road, Berhampur,
                </p>
              <p> Odisha – 760001, India - 751024</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-[#00ADB5] flex-shrink-0" />
            <p>: +91 7978129497 , +91 8763277095
</p>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-[#00ADB5] flex-shrink-0" />
            <p>info@tensiftfarmers.com</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-[#00ADB5]/20 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 text-sm text-[#EEEEEE]/70">
        <p>© {new Date().getFullYear()} Tensift Farmers Fertilizer Pvt. Ltd. All rights reserved.</p>
        {/* <div className="flex space-x-6">
          <a href="#" className="hover:text-[#00ADB5] transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#00ADB5] transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#00ADB5] transition-colors duration-200">
            Cookie Policy
          </a>
        </div> */}
      </div>
    </div>
  </div>
</footer>

  )
}
