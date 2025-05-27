import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section className="w-full flex flex-col md:flex-row items-start justify-between gap-10 py-12">
      {/* Left: Contact Form */}
      <form
        className="flex-1 flex flex-col gap-3 max-w-md"
        action="mailto:vvs.pedapati@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="border border-black rounded px-3 py-2 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-black rounded px-3 py-2 outline-none"
        />
        <input
          type="text"
          name="website"
          placeholder="Your website (if exists)"
          className="border border-black rounded px-3 py-2 outline-none"
        />
        <textarea
          name="message"
          placeholder="How can I help?"
          rows={4}
          className="border border-black rounded px-3 py-2 outline-none resize-none"
        />
        <div className="flex items-center gap-2 mt-2">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
          >
            Get in Touch
          </button>
          <a
            href="https://github.com/basanth-pedapati"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black rounded p-2 hover:bg-gray-100 transition"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/basanth-pedapati"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black rounded p-2 hover:bg-gray-100 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </form>
      {/* Right: Contact Info */}
      <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0 md:pl-8">
        <h2 className="text-2xl font-bold mb-2">
          Let&apos;s <span className="font-black outline outline-2 outline-black px-1 rounded-sm">talk</span> for
        </h2>
        <h3 className="text-2xl font-bold mb-4">Something special</h3>
        <p className="text-gray-700 text-sm mb-6 max-w-md">
          I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
        </p>
        <div className="mb-1 font-bold text-lg">vvs.pedapati@gmail.com</div>
        <div className="font-bold text-lg">+91-7020249770</div>
      </div>
    </section>
  );
}