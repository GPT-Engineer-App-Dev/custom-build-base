import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Introduction from "./pages/Introduction.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
