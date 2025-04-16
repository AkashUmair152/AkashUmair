import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

// Example static data (you can replace this with actual data or props)
const projects = [
  {
    id: 1,
    slug: 'project-one',
    title: 'Project One',
    complete_date: '2024-12-01',
    hero_image: {
      url: '/images/sample1.jpg'
    }
  },
  {
    id: 2,
    slug: 'project-two',
    title: 'Project Two',
    complete_date: '2025-01-15',
    hero_image: {
      url: '/images/sample2.jpg'
    }
  }
];

export default function Projects() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.slug}`} 
              passHref
            >
              <div className="group relative hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <div className="min-h-[80vh] overflow-hidden rounded-lg bg-gray-800 shadow-lg relative">
                  {project.hero_image?.url && (
                    <Image
                      src={project.hero_image.url}
                      alt={project.title || 'Untitled'}
                      fill
                      className="object-cover object-center absolute inset-0"
                      priority
                    />
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-[2vw] opacity-[.7] font-semibold">
                    {project.title || 'Untitled'}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {project.complete_date || 'No Date'}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg shadow-xl" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
