import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OfferingPage from "./pages/OfferingPage";
import MinistriesPage from "./pages/MinistriesPage";
import SermonsPage from "./pages/SermonsPage";
import JoinPage from "./pages/JoinPage";
import TeamPage from "./pages/TeamPage";
import DeclarationPage from "./pages/DeclarationPage";
import FAQPage from "./pages/FAQPage";
import EventsPage from "./pages/EventsPage";
import ExpectationPage from "./pages/ExpectationPage";
import WomenMinistryPage from "./pages/WomenMinistryPage";
import StudentMinistryPage from "./pages/StudentMinistryPage";
import ChildrenMinistryPage from "./pages/ChildrenMinistryPage";
import CommunitySchoolPage from "./pages/CommunitySchoolPage";
import DiscipleshipPage from "./pages/DiscipleshipPage";
import GospelMinistryPage from "./pages/GospelMinistryPage";
import Joshua2022Page from "./pages/Joshua2022Page";
import Romans2022Page from "./pages/Romans2022Page";
import Mark2023Page from "./pages/Mark2023Page";
import Genesis2020Page from "./pages/Genesis2020Page";
import OtherSermonsPage from "./pages/OtherSermonsPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/offering" element={<OfferingPage />} />
        <Route path="/ministries" element={<MinistriesPage />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/declaration" element={<DeclarationPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/expectation" element={<ExpectationPage />} />
        <Route path="/women-ministry" element={<WomenMinistryPage />} />
        <Route path="/student-ministry" element={<StudentMinistryPage />} />
        <Route path="/children-ministry" element={<ChildrenMinistryPage />} />
        <Route path="/community-school" element={<CommunitySchoolPage />} />
        <Route path="/discipleship" element={<DiscipleshipPage />} />
        <Route path="/gospel-ministry" element={<GospelMinistryPage />} />
        <Route path="/joshua-2022" element={<Joshua2022Page />} />
        <Route path="/romans-2022" element={<Romans2022Page />} />
        <Route path="/mark-2023" element={<Mark2023Page />} />
        <Route path="/genesis-2020" element={<Genesis2020Page />} />
        <Route path="/other-sermons" element={<OtherSermonsPage />} />
      </Routes>
    </>
  );
}

export default App;
