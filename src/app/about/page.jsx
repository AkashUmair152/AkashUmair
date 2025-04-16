import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Book, GraduationCap, Code, Briefcase, Rocket, Layers } from 'lucide-react'
const page = () => {
  return (
    <div className="bg-black text-white ">
    <Header />
    <div className="min-h-screen">
      {/* My Journey Section */}
      <section className="min-h-screen p-8 md:p-16 border-b border-white/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Book className="w-12 h-12 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold">From Village Classrooms to Global Codebases</h1>
          </div>
  
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/90">
            <p>
            Emerging from a modest village upbringing in Pakistan, I leveraged education and self-driven learning to build a career in technology. After earning my BSCS from the Virtual University of Pakistan while teaching to fund my studies, I mastered frontend development (HTML/CSS/JavaScript) through hands-on projects.

Transitioning into Shopify development, I interned at Lahore’s Salik Solutions, honing expertise in Liquid templating and store migrations. This led to remote roles with international agencies, where I advanced through 4 positions in 21 months—architecting scalable solutions, optimizing 50+ client stores, and contributing to the Shopify community.
Complementing full-time work, I’ve delivered 100+ Shopify projects over all, specializing in custom sections, API integrations, and performance-driven themes. Currently, I focus on headless commerce implementations.
Proven in turning constraints into catalysts for growth.
            </p>
  
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="p-6 border border-white/20 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">🏆 Key Milestones</h3>
                <ul className="space-y-3">
                  <li>• 100+ Shopify Stores</li>
                  <li>• 4 Promotions in 3 Years</li>
                  <li>• 30+ Mentored Developers</li>
                </ul>
              </div>
  
              <div className="p-6 border border-white/20 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">🚀 Current Focus</h3>
                <ul className="space-y-3">
                  <li>• Headless Shopify Architectures</li>
                  <li>• Performance Optimization (90+ Lighthouse)</li>
                  <li>• CI/CD Pipeline Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* Experience & Education Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 border-b border-white/20">
        {/* Experience Column */}
        <div className="p-8 md:p-16 border-r border-white/20">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-12 h-12 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold">Professional Ascent</h2>
          </div>
  
          <div className="space-y-12">
            <div className="experience-card">
              <h3 className="text-xl font-semibold">Salik Solutions (Lahore)</h3>
              <p className="text-white/60 mb-4">Shopify Intern → Lead Developer</p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Built 15+ custom Liquid templates still used in production</li>
                <li>Pioneered mobile-first approach increasing conversions by 40%</li>
              </ul>
            </div>
  
            <div className="experience-card">
              <h3 className="text-xl font-semibold">Canadian Tech Agency</h3>
              <p className="text-white/60 mb-4">Remote Shopify Engineer</p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Led migration of 20+ legacy stores to Shopify 2.0</li>
                <li>Developed internal component library reducing dev time by 30%</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Education Column */}
        <div className="p-8 md:p-16">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-12 h-12 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold">Academic Foundation</h2>
          </div>
  
          <div className="space-y-12">
            <div className="education-card">
              <h3 className="text-xl font-semibold">Virtual University of Pakistan</h3>
              <p className="text-white/60 mb-4">BSCS | september-2024</p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Balanced full course load with 30+ student tuition center</li>
                <li>Self-taught Frontend & Shopify development through online platforms</li>
              </ul>
            </div>
  
            <div className="education-card">
              <h3 className="text-xl font-semibold">Youtube</h3>
              <p className="text-white/60 mb-4">Practical Engineering</p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>1000+ hours of online coursework completed</li>
                <li>Built first production app using library computers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>
    <Footer/>
  </div>
  )
}
export default page