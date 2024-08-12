// Components
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderEpisode from "../src/components/Episodes/RenderEpisode";
import RenderVideo from "../src/components/Videos/RenderVideo";
import videoList from "./pages/Shows/LuansRevolution/videoData";
import cdlntvList from "./pages/Shows/CremeDeLaNageTV/videoData";
import MainLayout from '../src/components/MainLayout'; 

// Pages:
// Home
import Home from "./pages/Home";

// Shows
import Shows from "./pages/Shows";
import LR from "./pages/Shows/LuansRevolution";
import CDLNTV from "./pages/Shows/CremeDeLaNageTV";

// Games
import Games from "./pages/Games";

// Store
import Store from "./pages/Store";

// Blog
import Blog from "./pages/Blog";

// About
import About from "./pages/About";

// Secrets
import Secrets from "./pages/Secrets";

// Errors
import NotFound from "./pages/Error/404";


function App() {
 return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/lr" element={<LR />} />
          <Route path="/shows/cdlntv" element={<CDLNTV />} />
          <Route path="/games" element={<Games />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="games/lorax-kart/index.html" />
          <Route
            path="/watch/lr/:episodeId"
            element={<RenderEpisode episodes={videoList.reduce((acc, curr) => acc.concat(curr.videos), [])} />}
          />
          <Route
            path="/watch/cdlntv/:episodeId"
            element={<RenderEpisode episodes={cdlntvList.reduce((acc, curr) => acc.concat(curr.videos), [])} />}
          />
          <Route path="/2209626308100203jodoboioxocoocofaiafbaabgoog" element={<Secrets />} />
          <Route path="/2209626308100203jodoboioxocoocofaiafbaabgoog/:code" element={<RenderVideo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
 );
}

export default App;
