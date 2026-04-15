import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Lazy load heavy components
const GitHubActivity = lazy(() => import('./components/GitHubActivity'));

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Suspense fallback={<Loading />}>
          <GitHubActivity />
        </Suspense>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
