import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
      {/* Left: Text Content */}
      <div className="flex-1">
        <div className="text-black font-sans text-[1.5rem] leading-tight mb-4">
          <div>
            Hello I&rsquo;am <span className="font-bold">VVS Basanth Pedapati.</span>
          </div>
          <div>
            <span className="font-bold">UI</span>{" "}
            <span className="font-bold outline outline-2 outline-black px-1 rounded-sm">Designer | Developer</span>
          </div>
          <div>
            Based In <span className="font-bold">India.</span>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-6 max-w-md">
          I&apos;m Basanth. Turning ideas into elegant interfaces. UI Designer & Developer | India
        </p>
        <div className="flex items-center gap-4 mb-4">
          <a
            href="https://github.com/basanth-pedapati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/basanth-pedapati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/>
            </svg>
          </a>
        </div>
      </div>
      {/* Right: Vector Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/hero-vector.svg"
          alt="Hero Vector"
          width={400}
          height={300}
          className="w-full max-w-md h-auto"
          priority
        />
      </div>
    </section>
  );
}