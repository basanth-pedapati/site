import { FaRocket, FaUsers, FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    icon: <FaRocket className="text-2xl text-red-500" />,
    title: "Lead Web Designer and Developer at Aero Astro Society",
    date: "June 2024 – Present",
    link: "https://github.com/g-aeroastro-c/site.git",
    description:
      "Led a team using my listed skills to build a landing page for the Aero Astro Society. Currently leading an ongoing project to develop an admin dashboard for productivity management.",
  },
  {
    icon: <FaUsers className="text-2xl text-blue-400" />,
    title: "Leading a UI Developers Team at StellaX Technologies",
    date: "August 2023 – April 2024",
    link: "https://github.com/StellaX-Browser",
    description:
      "Led a team of UI developers at StellaX Technologies to build an online browser-based text editor, overseeing the project from design to deployment.",
  },
  {
    icon: <FaLaptopCode className="text-2xl text-green-400" />,
    title: "Aeromodelling Club Landing Page",
    date: "April 2023 – July 2023",
    link: "https://gitamaeroastro.github.io/gitamaeromodellingclub.github.io/",
    description:
      "Worked individually to design and develop a landing page for the Aeromodelling Club, which helped them secure funding.",
  },
];

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center py-12 bg-black">
      <h2 className="text-2xl font-semibold text-white mb-8">
        My <span className="font-bold">Projects</span>
      </h2>
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {projects.map((proj, idx) => (
          <a
            key={proj.title}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-gray-700 bg-[#18181b] px-6 py-5 transition-all duration-200 hover:bg-gray-800 hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span>{proj.icon}</span>
                <span className="font-semibold text-white text-base">{proj.title}</span>
              </div>
              <span className="text-xs text-gray-300">{proj.date}</span>
            </div>
            <p className="text-gray-300 text-sm">{proj.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}