import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="bg-black text-white px-4 md:px-8 lg:px-6  scroll-smooth">
      {/* Custom Container Width */}
      
        {/* Header */}
        <Header/>

        {/* Hero Section */}
        <Hero/>

        {/* Work Section */}
        <Work/>

        {/* Skills Section */}
        <Skills/>

        {/* About Section */}
        <AboutSection/>

        {/* Testimonial Section */}
        <Testimonial/>

        {/* Footer */}
        <Footer/>
      
    </main>
  );
}