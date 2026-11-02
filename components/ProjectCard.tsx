
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h2 className="mb-3 text-xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mb-4 leading-7 text-gray-600">
        {description}
      </p>

      <p className="text-sm text-gray-700">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
        >
          View Project on GitHub →
        </a>
      )}
    </article>
  );
}
