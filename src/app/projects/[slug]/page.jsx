import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import projects from '@/app/data/data';


export async function generateStaticParams() {
  return projects.map((projects) => ({
    slug: projects.slug,
  }));

}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-400">{project.complete_date}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[50vh] rounded-lg overflow-hidden bg-gray-800">
          {project.hero_image?.url && (
            <Image
              src={project.hero_image.url}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          )}
        </div>

        {/* Overview & Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300">{project.project_details}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p className="text-gray-300">{project.my_role}</p>
          </div>
        </div>

        {/* Technologies */}
        {project.Technologies && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.Technologies.split(',').map((tech, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {project.Gallery?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.Gallery.map((img, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    src={img.url}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </section>
  );
}
