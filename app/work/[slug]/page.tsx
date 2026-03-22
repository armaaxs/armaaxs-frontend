import { notFound } from "next/navigation";
import { projects } from "../projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-[#ead9b8] pb-[30px]">
      <main className="flex flex-col items-center justify-start text-center px-4 w-full pt-28 md:pt-32">
        <h1 className="font-explora text-[90px] sm:text-[120px] md:text-[150px] lg:text-[180px] leading-[0.8] text-[#ead9b8] italic">
          {project.name}
        </h1>
        <p className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-[#bca585] mt-2 mb-12">
          {project.stack}
        </p>

        <div className="max-w-3xl w-full border border-[#e4c89c]/12 rounded-2xl bg-[#07110a]/72 p-8 text-left">
          <p className="font-montserrat text-lg text-[#ead9b8] leading-relaxed mb-6">
            {project.description}
          </p>
          <p className="font-montserrat text-base text-[#bca585]">
            Demo video coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
