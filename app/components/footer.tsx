import {
  Fish,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"

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
    <footer className="bg-gradient-to-br from-[#00ADB5] to-[#180161] text-white backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/20 p-2 rounded-full shadow-lg">
                <Fish className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tensift Farmers</h3>
                <p className="text-sm text-white/70">Fertilizer Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Revolutionizing aquaculture with sustainable feed solutions. Transforming waste into valuable resources
              for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200 shadow-md"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p>
                    Head Office: 1st Floor, TFFCO House, Bishnu Nagar, Aska Road,
                    Berhampur,
                  </p>
                  <p>Odisha – 760001, India - 751024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <p>+91 7978129497 , +91 8763277095</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <p>info@tensiftfarmers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 text-sm text-white/60 text-center">
            <p>
              © {new Date().getFullYear()} Tensift Farmers Fertilizer Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
