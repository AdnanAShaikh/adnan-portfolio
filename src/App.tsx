import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';
import { ToastProvider } from './components/Toast';

function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-brand-bg antialiased selection:bg-brand-red-600 selection:text-white">
        {/* Navigation Menu */}
        <Navbar />
        
        {/* Portfolio Page Main Content */}
        <main>
          <Hero />
          <Services />
          <Works />
          <Experience />
          <TechStack />
        </main>
        
        {/* Contact Section and Copyright details */}
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
