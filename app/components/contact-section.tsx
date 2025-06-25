import { Mail, Phone, MapPin, Clock } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 7978129497", "+91 8763277095"],
      action: "Call us",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@tensiftfarmers.com", "support@tensiftfarmers.com"],
      action: "Send email",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["Head Office: 1st Floor, TFFCO House, Bishnu Nagar, Aska Road, Berhampur, Odisha – 76000"],
      action: "Get directions",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: "Schedule meeting",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#F1F5F9] text-gray-800">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-[#00ADB5]"><span className="text-[#222831]">Contact</span> <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">Tensfit Famers</span></h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Ready to revolutionize your aquaculture operations? Get in touch with our team of experts today.
      </p>
    </div>

    <div className="flex  gap-12 justify-center items-center">
      {/* Contact Info Cards */}
      <div className="space-y-10 flex flex-col justify-center items-center">
        {/* <div className="flex flex-col items-center mb-8">
          <h3 className="text-2xl font-bold text-[#180161] mb-6">Get in Touch</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            We&apos;re here to help you transform your aquaculture business with our sustainable feed solutions.
            Reach out to us for consultations, product information, or partnership opportunities.
          </p>
        </div> */}

        <div className="grid sm:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-white text-gray-800 border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <div className="bg-[#00ADB5]/10 p-2 rounded-full">
                    <div className="text-[#00ADB5]">{info.icon}</div>
                  </div>
                  <span>{info.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {/* <Button
                  variant="outline"
                  size="sm"
                  className="text-[#00ADB5] border-[#00ADB5] hover:bg-[#00ADB5] hover:text-white transition-colors"
                >
                  {info.action}
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-4">Why Choose Tensift Farmers?</h3>
          <ul className="space-y-3">
            {[
              "Award-winning sustainable technology",
              "Proven results across 500+ farms",
              "Expert support and consultation",
              "Cost-effective and eco-friendly solutions",
            ].map((point, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  </div>
</section>

  )
}
