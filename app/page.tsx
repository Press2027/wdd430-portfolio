
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Hospital Management API",
    description:
      "A hospital management backend for handling patients, doctors, appointments, and medical records, with API documentation and authentication.",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger"],
    link: "https://github.com/Press2027/Final-projectCSE341",
  },
  {
    title: "Smart Health",
    description:
      "A health application project focused on patient management, BMI calculations, triage, and dosage calculations.",
    technologies: ["Kotlin", "Java", "Patient Management"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-12 rounded-2xl bg-blue-700 px-6 py-12 text-center text-white md:px-12">
        <p className="mb-3 font-medium text-blue-100">
          Welcome to my portfolio
        </p>

        <h1 className="mb-5 text-4xl font-bold md:text-5xl">
          Hi, I&apos;m Preston Machanga
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-blue-50">
          I am a software development student building practical applications
          and developing my skills in web development, programming, and
          database management.
        </p>

        <a
          href="https://github.com/Press2027"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
        >
          Visit My GitHub
        </a>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-3xl font-bold">My Projects</h2>
        <p className="text-gray-600">
          Here are some of the projects I have worked on while developing
          my software development skills.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
