import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";


const ContactPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "general",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        category: "general",
      });
    }, 3000);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen w-full light:bg-blue-50 dark:bg-gradient-to-b from-indigo-900 to-purple-900 dark:text-white border-b-1 dark:border-white px-4 py-12 flex flex-col items-center justify-center">
      {/* Glassmorphism Card */}
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="rounded-2xl p-8 shadow-xl dark:bg-white/10 backdrop-blur-sm border dark:border-white/20 bg-clip-padding">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-lg">
                Your message has been sent. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      What can I help you with?
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-gray-400 placeholder-white/50"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="work">Work Opportunity</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg dark:bg-white/20 border dark:border-white/30 dark:text-white placeholder-white/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg dark:bg-white/20 border dark:border-white/30 dark:text-white placeholder-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg dark:bg-white/20 border dark:border-white/30 dark:text-white placeholder-white/50"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-1/2 py-3 px-4 bg-gray-600 hover:bg-gray-700 light:text-white rounded-lg font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-1/2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 light:text-white rounded-lg font-medium transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50"
                      placeholder="Your message..."
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-1/2 py-3 px-4 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Contact Info & Socials */}
        <div className="rounded-2xl p-8 shadow-xl dark:bg-white/10 dark:backdrop-blur-sm border dark:border-white/20 bg-clip-padding flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-xl" />
                <span>+91 9562498325</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <span>samrudhkishsanpm@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-xl" />
                <span>Kannur, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/samrudh-k-ish-san-pm/"
                className="text-2xl hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/k-ish-san/"
                className="text-2xl hover:text-indigo-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://facebook.com/samrudhkishsanpm/"
                className="text-2xl hover:text-indigo-400 transition-colors"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

         

          {/* Google Maps Integration */}
          <div className="mt-8 rounded-lg overflow-hidden h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3903.3243895215087!2d75.33469771097315!3d11.952027988228544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sus!4v1748787519195!5m2!1sen!2sus"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
