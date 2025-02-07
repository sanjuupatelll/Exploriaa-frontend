import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import ImageSlider from "./pages/imageslider";// Correct path to ImageSlider
import Banner from "./pages/banner";
import Footer from "./pages/footer";
import DetailPage from "./pages/detailpage";
import About from "./pages/about"; // Importing About Us page
import WeHiring from "./pages/wehiring"; // Importing We Hiring page
import ApplyJob from "./pages/applyjob"; // Importing Apply Job section
import TermsAndConditions from "./pages/termsandconditions";
import Policy from "./pages/policy";
import Support from "./pages/support";
import PartnerWithUs from "./pages/partnerwithus";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<><Banner /><ImageSlider /></>} />
          <Route path="/detailpage" element={<DetailPage />} />
          <Route path="/about" element={<About />} /> {/* About Us Route */}
          <Route path="/wehiring" element={<WeHiring />} /> {/* We Hiring Route */}
          <Route path="/applyjob" element={<ApplyJob />} /> {/* Apply Job Route */}
          <Route path="/termsandconditions" element={<TermsAndConditions/>} /> {/* Apply Job Route */}
          <Route path="/policy" element={<Policy/>} /> {/* Apply Job Route */}
          <Route path="/support" element={<Support/>} />
          <Route path="/partnerwithus" element={<PartnerWithUs/>} />
          
          </Routes>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
