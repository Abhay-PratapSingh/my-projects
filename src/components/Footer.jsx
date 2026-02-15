import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#efe4d4] border-t border-[#d6c3a5]">

      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-serif text-[#5a3e1b] font-medium mb-5">
            Know Us
          </h3>
          <ul className="space-y-4 text-sm text-[#4b4034] font-medium">
            <li>
              <Link to="/about" className="hover:text-[#c8a45d] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/collection" className="hover:text-[#c8a45d] transition">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#c8a45d] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-serif text-[#5a3e1b] font-medium mb-5">
            Our Promise
          </h3>
          <ul className="space-y-4 text-sm text-[#4b4034] font-medium">
            <li>✔ Only Certified Jewellery</li>
            <li>✔ 100% Hallmarked Jewellery</li>
            <li>✔ Lifetime Product Support</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-serif text-[#5a3e1b] font-medium mb-5">
            Get In Touch
          </h3>

          <div className="space-y-4 text-sm text-[#4b4034] font-medium leading-relaxed">

            {/* Phone */}
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <a
                href="tel:8081910782"
                className="hover:text-[#c8a45d] transition"
              >
                +91 8081910782
              </a>
            </p>

            {/* Email */}
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-600" />
              <a
                href="mailto:info@pradeepjewellers@gmail.com"
                className="hover:text-[#c8a45d] transition"
              >
                info.pradeepjewellersgtm@gamil.com
              </a>
            </p>



            {/* Follow Us */}
            {/* Follow Us */}
            {/* Follow Us */}
            {/* Follow Us - Instagram */}
            {/* Follow Us - Instagram */}
            <p className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/pradeepjewellers_gtm?igsh=YnpwYjRwYmI1azhx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#c8a45d] transition"
              >
                <FaInstagram className="text-pink-600 transition-transform duration-200 hover:scale-125" />
                <span>Follow us on Instagram</span>
              </a>
            </p>

            {/* Follow Us - Facebook */}
            <p className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1AkQwhu7Hb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#c8a45d] transition"
              >
                <FaFacebookF className="text-blue-700 transition-transform duration-200 hover:scale-125" />
                <span>Follow us on Facebook</span>
              </a>
            </p>


            {/* Address */}
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pradeep+Jewellers+Sihari+Ghatampur+Uttar+Pradesh+209206"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c8a45d] transition"
              >
                Pradeep Jewellers, Sihari, Ghatampur,<br />
                Uttar Pradesh – 209206
              </a>
            </p>


          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d6c3a5] py-6 text-center text-sm text-[#4b4034] font-medium">
        <p className="mb-1">
          © {new Date().getFullYear()} Pradeep Jewellers. All rights reserved.
        </p>

        <p>
          Managed by{' '}
          <a
            href="https://wa.me/918707411386?text=Hi%20Abhay%20Sir"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#5a3e1b] hover:text-[#c8a45d] transition"
          >
            Abhay Pratap Singh
          </a>
        </p>

      </div>

    </footer>
  )
}

export default Footer
