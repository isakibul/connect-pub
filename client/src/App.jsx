import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Intro from "./pages/Intro";
import Vision from "./pages/Vision";
import Explore from "./pages/Explore";
import Opportunities from "./pages/Opportunities";
import Connect from "./pages/Connect";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route element={<Layout />}>
                <Route path="/vision" element={<Vision />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/opportunities" element={<Opportunities />} />
                <Route path="/connect" element={<Connect />} />
            </Route>
        </Routes>
    </Router>
);

export default App;
