import {Header} from "../sections/Header"
import { HeroSection } from "../sections/Hero";
import { ProjectsSection } from "../sections/Projects";
import { TapeSection } from "../sections/Tape";
//import { TestimonialsSection } from "../sections/Testimonials";
import { ContactSection } from "../sections/Contact";
import { AboutSection } from "../sections/About";
import { Footer } from "../sections/Footer";
export default function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <AboutSection />
        <ContactSection />
        <Footer />
    </div>
  );
}
