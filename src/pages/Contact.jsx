import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import contactheroImage from "../assets/3hero.png";

const Contact = () => {

  const items = [
    {
      icon: FaPhoneAlt,
      title: "Call",
      value: "+91 8081910782",
      link: "tel:+918081910782",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+91 99350 60445",
      link: "https://wa.me/919935060445",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "Send Mail",
      link: "mailto:info.pradeepjewellersgtm@gamil.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      value: "",
      link: "https://www.google.com/maps/search/?api=1&query=Pradeep+Jewellers+Sihari+Ghatampur+Uttar+Pradesh+209206",
    },
  ];

  return (
    <div className="bg-[#f3eee8]">

      {/* Hero Image */}
      <div className="w-full">
        <img
          src={contactheroImage}
          alt="Pradeep Jewellers Banner"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Reach Us Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-3xl md:text-4xl font-serif text-[#a07a4a] font-medium tracking-wide">
            You Can Reach Us
          </h3>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#cfa46a] to-transparent mx-auto mt-4 mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group h-[130px]
                    flex flex-col justify-center items-center
                    rounded-2xl
                    bg-gradient-to-br from-[#f9f4ee] to-[#ead8c0]
                    border border-[#e6c9a8]
                    shadow-md
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-lg
                    hover:from-[#e8c89c]
                    hover:to-[#d9b27f]
                    hover:border-[#d4a96c]
                  "
                >

                  <Icon className="
                      text-4xl mb-3
                      text-[#b8864b]
                      transition-all duration-300
                      group-hover:text-[#fffaf4]
                      group-hover:scale-110
                  " />

                  <p className="
                      font-serif text-lg
                      text-[#6b4a2b]
                      group-hover:text-[#fffaf4]
                      transition-colors
                  ">
                    {item.title}
                  </p>

                  {(item.title === "Call" || item.title === "WhatsApp") && (
                    <p className="
                        text-xs mt-1
                        text-[#8a6a45]
                        group-hover:text-[#fffaf4]
                        transition-colors
                    ">
                      {item.value}
                    </p>
                  )}

                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* Map + Address Section */}
      <section className="bg-[#f3eee8] px-6 md:px-20 pb-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-[#faf7f2] border border-[#e7dccf] rounded-xl shadow-sm overflow-hidden">
            <iframe
              title="Pradeep Jewellers Location"
              src="https://www.google.com/maps?q=Pradeep+Jewellers+Sihari+Ghatampur+Uttar+Pradesh+209206&output=embed"
              className="w-full h-[240px] md:h-[260px] border-0"
              loading="lazy"
            ></iframe>
          </div>

          <div className="bg-[#faf7f2] border border-[#e7dccf] rounded-xl shadow-sm p-6 flex flex-col justify-center">

            <h4 className="text-xl font-serif text-[#a07a4a] font-medium mb-3">
              Our Address
            </h4>

            <address className="not-italic text-[#6f5635] leading-6 text-sm mb-5">
              Pradeep Jewellers <br />
              Near Mandi Samiti, Kanpur Road <br />
              Sihari, Ghatampur <br />
              Kanpur Nagar, Uttar Pradesh – 209206
            </address>

            <a
              href="tel:+918081910782"
              className="
                inline-flex items-center justify-center
                font-serif
                bg-gradient-to-r from-[#d4af73] to-[#b8864b]
                text-white
                px-5 py-2.5
                rounded-md
                text-sm
                shadow-sm
                transition-all duration-300
                hover:from-[#e0bc83]
                hover:to-[#c9985c]
                hover:-translate-y-0.5
                hover:shadow-md
                w-fit
              "
            >
              Call Now
            </a>

          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-[#f3eee8] px-6 md:px-20 pb-20">
        <div className="max-w-5xl mx-auto">

          <div className="bg-[#faf7f2] border border-[#e7dccf] rounded-xl shadow-sm p-6 md:p-8">

            <h4 className="text-2xl md:text-3xl font-serif text-[#a07a4a] text-center mb-8">
              Tell Us What You’re Looking For
            </h4>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.target;
                const name = form.user_name.value;
                const phone = form.user_phone.value;
                const msg = form.message.value;

                const text = `New Jewellery Enquiry:%0AName: ${name}%0APhone: ${phone}%0ARequirement: ${msg}`;
                window.open(`https://wa.me/919935060445?text=${text}`, "_blank");

                form.reset();
              }}
              className="grid md:grid-cols-2 gap-6"
            >

              {/* Name */}
              <div className="flex flex-col">
                <label className="font-serif text-sm text-[#6b4a2b] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  }}
                  className="bg-white border border-[#e6d8c7] rounded-md px-4 py-3 text-sm outline-none focus:border-[#cfa46a] focus:ring-1 focus:ring-[#e8c89c]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="font-serif text-sm text-[#6b4a2b] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  defaultValue="+91 "
                  onInput={(e) => {
                    let numbers = e.target.value.replace(/\D/g, "");

                    if (numbers.startsWith("91")) {
                      numbers = numbers.slice(2);
                    }

                    numbers = numbers.slice(0, 10);

                    e.target.value = "+91 " + numbers;
                  }}
                  placeholder="+91 9876543210"
                  className="bg-white border border-[#e6d8c7] rounded-md px-4 py-3 text-sm outline-none focus:border-[#cfa46a] focus:ring-1 focus:ring-[#e8c89c]"
                />
              </div>

              {/* Requirement */}
              <div className="flex flex-col md:col-span-2">
                <label className="font-serif text-sm text-[#6b4a2b] mb-2">
                  Share Your Requirement
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us what jewellery or design you are looking for..."
                  className="bg-white border border-[#e6d8c7] rounded-md px-4 py-3 text-sm outline-none resize-none focus:border-[#cfa46a] focus:ring-1 focus:ring-[#e8c89c]"
                ></textarea>
              </div>

              {/* Consent */}
              <div className="md:col-span-2 text-xs text-[#7a6244] leading-relaxed">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-[#cfa46a]"
                  />
                  <span>
                    I hereby authorize to send notifications on SMS/RCS/WhatsApp
                    Messages (promotional / informational messages). By clicking
                    Submit, you agree to our Terms of Service and that you have read
                    our Privacy Policy.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex justify-center mt-2">
                <button
                  type="submit"
                  className="
              font-serif
              bg-gradient-to-r from-[#d4af73] to-[#b8864b]
              text-white
              px-6 py-2.5
              rounded-md
              text-sm
              shadow-sm
              transition-all duration-300
              hover:from-[#e0bc83]
              hover:to-[#c9985c]
              hover:-translate-y-0.5
              hover:shadow-md
            "
                >
                  Submit Enquiry
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
