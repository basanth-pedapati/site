import Image from "next/image";

const skills = [
  { name: "Git", icon: "/skills/git.svg" },
  { name: "FIGMA", icon: "/skills/figma.svg" },
  { name: "Sass/Scss", icon: "/skills/sass.svg" },
  { name: "Next Js", icon: "/skills/nextjs.svg" },
  { name: "Github", icon: "/skills/github.svg" },
  { name: "Typescript", icon: "/skills/typescript.svg" },
  { name: "Vibecoding", icon: "/skills/vibecoding.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "HTML | CSS", icon: "/skills/htmlcss.svg" },
  { name: "UI / UX", icon: "/skills/uiux.svg" },
];

export default function Skills() {
  return (
    <section className="w-full flex flex-col items-center py-8">
      <h2 className="text-2xl font-semibold mb-8">
        My <span className="font-bold">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center border-2 border-black rounded-md w-32 h-32 transition-all duration-200 bg-white text-black hover:bg-gray-500 hover:text-black hover:shadow-lg"
          >
            <div className="mb-3">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={36}
                height={36}
                className="mx-auto"
              />
            </div>
            <span className="font-medium text-base">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}