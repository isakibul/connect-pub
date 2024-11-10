import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Intro from "./pages/Intro";
import Vision from "./pages/Vision";
import Explore from "./pages/Explore";
import Opportunities from "./pages/Opportunities";
import Connect from "./pages/Connect";
import { MyProvider } from "./Context"
import FormPage from "./pages/join/FormPage";
import ErrorPage from "./pages/join/ErrorPage";
import ThankYouPage from "./pages/join/ThankYouPage";

const App = () => (
    <MyProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route element={<Layout />}>
                    <Route path="/vision" element={<Vision />} />

                    <Route path='/vision/from-page' element={<FormPage />} />
                    <Route path="/thank-you" element={<ThankYouPage />} />
                    <Route path="/error" element={<ErrorPage />} />

                    <Route path="/explore" element={<Explore />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/connect" element={<Connect />} />
                </Route>
            </Routes>
        </Router>
    </MyProvider>
);

export default App;
