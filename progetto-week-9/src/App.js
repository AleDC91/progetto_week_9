import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import PlayerComponent from "./components/PlayerComponent";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/album/:albumId" element={<AlbumPage />} />
            <Route path="/artist/:artistId" element={<ArtistPage />} />
          </Routes>
          <PlayerComponent />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
