
import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section className="mb-10">
        <h1 className="mb-6 text-4xl font-bold">About Me</h1>

        <p className="mb-4 text-lg leading-8 text-gray-700">
          My name is Preston Machanga. I am studying software development
          and building practical projects to strengthen my programming
          and problem-solving skills.
        </p>

        <p className="text-lg leading-8 text-gray-700">
          My background in clinical work has helped me develop communication,
          teamwork, attention to detail, and the ability to solve problems
          under pressure. I want to apply these strengths to building
          useful and reliable software.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Technical Skills</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <SkillCard
            title="Programming"
            description="Python, JavaScript, C#, Java, and Kotlin."
          />

          <SkillCard
            title="Web Development"
            description="HTML, CSS, React, Next.js, and Node.js."
          />

          <SkillCard
            title="Databases"
            description="MongoDB, SQL fundamentals, and data management."
          />

          <SkillCard
            title="Development Tools"
            description="Git, GitHub, VS Code, and npm."
          />
        </div>
      </section>
    </main>
  );
}
