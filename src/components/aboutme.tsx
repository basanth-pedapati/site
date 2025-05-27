import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12">
      {/* Left: SVG Illustration */}
      <div className="flex-shrink-0">
        <Image
          src="/images/aboutme.svg"
          alt="About Me Illustration"
          width={320}
          height={340}
          className="border-2 border-black rounded-md w-[320px] h-auto"
          priority
        />
      </div>
      {/* Right: Bio */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">
          About <span className="font-bold">Me</span>
        </h2>
        <p className="text-gray-800 text-base mb-2">
          I’m a passionate, self-driven UI Designer & Developer who loves turning ideas into beautiful, functional digital products. My focus is on creating seamless user experiences, pixel-perfect interfaces, and building with performance and accessibility in mind.
        </p>
        <p className="text-gray-800 text-base mb-2">
          My journey began with web design in 2022, and since then I’ve enjoyed collaborating with teams and leading projects, always eager to learn new technologies and solve creative challenges. Over the years, I’ve worked with tools like React, Next.js, Typescript, Figma, Sass/Scss, and more, building everything from landing pages to admin dashboards.
        </p>
        <p className="text-gray-800 text-base">
          When I’m not designing or coding, you’ll find me sharing knowledge on reddit and stackoverflow, exploring new trends, or working on side projects. Let’s connect and build something great together!
        </p>
      </div>
    </section>
  );
}