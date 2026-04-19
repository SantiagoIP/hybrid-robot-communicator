import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import GlossaryPage from './pages/GlossaryPage';
import PrintPage from './pages/PrintPage';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/print" element={<PrintPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
