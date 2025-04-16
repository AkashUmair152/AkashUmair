import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// 💡 Dummy data to simulate a dynamic route
const dummyProjects = [
  {
    slug: 'project-one',
    title: 'Project One',
    complete_date: '2024-12-01',
    hero_image: { url: '/images/sample1.jpg' },
    project_details: 'This is a detailed overview of Project One.',
    my_role: 'Frontend Developer',
    Technologies: 'React, Next.js, Tailwind CSS',
    Gallery: [
      { url: '/images/gallery1.jpg' },
      { url: '/images/gallery2.jpg' },
    ],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    complete_date: '2025-01-15',
    hero_image: { url: '/images/sample2.jpg' },
    project_details: 'This is a detailed overview of Project Two.',
    my_role: 'Full Stack Developer',
    Technologies: 'Vue, Nuxt, Firebase',
    Gallery: [],
  },
];

export default function ProjectDetail({ params }) {
  const project = dummyProjects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Project Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-400">{project.complete_date || 'No Date'}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[50vh] rounded-lg overflow-hidden">
          {project.hero_image?.url ? (
            <Image
              src={project.hero_image.url}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              No Image Available
            </div>
          )}
        </div>

        {/* Project Overview & Details */}
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

        {/* Technologies Used */}
        {project.Technologies && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {project.Technologies.split(',').map((tech, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Gallery */}
        {project.Gallery?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.Gallery.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  {image?.url ? (
                    <Image
                      src={image.url}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      No Image Available
                    </div>
                  )}
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
