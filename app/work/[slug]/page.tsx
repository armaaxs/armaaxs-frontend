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
      <div className="min-h-[100dvh] px-4 pb-10 pt-24 text-white sm:pt-28 md:pt-32">
        <main className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <h1 className="w-full font-explora text-[clamp(4.25rem,16vw,11.25rem)] leading-[0.82] text-[#ead9b8] italic">
            {project.name}
          </h1>
          <p className="mt-2 w-full max-w-[24ch] font-montserrat text-[clamp(1rem,4vw,2.15rem)] font-light tracking-wide text-[#bca585] sm:max-w-none">
            {project.stack}
          </p>

          <div className="mt-8 w-full max-w-4xl rounded-2xl border border-white/10 bg-neutral-900 p-5 text-left sm:p-8">
            <p className="font-montserrat text-lg text-gray-200 leading-relaxed mb-6">
              {project.description}
            </p>
            <p className="font-montserrat text-base text-gray-400">
              Demo video coming soon.
            </p>
          </div>
        </main>
      </div>
  );
}
