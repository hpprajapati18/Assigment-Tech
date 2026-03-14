import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24 pt-24">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24 pt-24">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-24 pt-24">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-24 pt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

