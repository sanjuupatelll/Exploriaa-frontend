import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Homepage from "./pages/homepage";
import Banner from "./pages/banner";
import Footer from "./pages/footer";
import DetailPage from "./pages/detailpage";
import About from "./pages/about";
import WeHiring from "./pages/wehiring";
import ApplyJob from "./pages/applyjob";
import TermsAndConditions from "./pages/termsandconditions";
import Policy from "./pages/policy";
import Support from "./pages/support";
import PartnerWithUs from "./pages/partnerwithus";
import AuthModal from "./pages/authmodal";
import ViewAllImages from "./pages/viewallimages";

function App() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Pass modal state control to Navbar */}
        <Navbar onOpenAuthModal={() => setAuthModalOpen(true)} />

        {/* Auth Modal */}
        {isAuthModalOpen && <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} />}

        <Routes>
          <Route path="/" element={<><Banner /><Homepage /></>} />
          <Route path="/detailpage" element={<DetailPage />} />
          <Route path="/" element={<><Banner /><DetailPage /></>} />
          <Route path="/viewallimages" element={<ViewAllImages />} />
          <Route path="/about" element={<About />} />
          <Route path="/wehiring" element={<WeHiring />} />
          <Route path="/applyjob" element={<ApplyJob />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/partnerwithus" element={<PartnerWithUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
