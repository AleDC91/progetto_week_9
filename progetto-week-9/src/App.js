import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import PlayerComponent from "./components/PlayerComponent";
import { Container } from "react-bootstrap";
import "./App.css";
import MyLibraryPage from "./pages/MyLibraryPage";


// Le canzoni e le informazioni su artista e album sono 
// raggiungibili da ogni parte dell'app, e anche la lista 
// dei preferiti può essere aggiornata da ogni sezione dove compaiono
// le canzoni. Il toggle di un brano preferito può essere fatto sia dalla
// pagina myLibrary che direttamente dal player o in qualsiasi punto in cui 
// è visualizzata la canzone.

// I dati riguardanti il brano in esecuzione, i preferiti, i brani di default iniziali
// e la ricerca di nuovi brani sono persistenti, mentre sono stati creati degli 
// stati locali per i dati dinamici delle le pagine di artista e album, in quanto non 
// ho ritenuto importante la persistenza di questi dati.

// ogni tanto le chiamate AJAX non vanno a buon fine per problemi dovuti al server o 
// alla frequenza elevata delle richieste.
// Il pulsante refresh in caso di errore (specificato dal relativo componente) è stato aggiunto prevalentemente per questo motivo.

// per quanto riguarda il responsive, ho cercato di replicare fedelmente il mockup.
// mi sono limitato ad aggiungere quanlche piccolo dettaglio al player e 
// la possibilità di toggle della sidebar. 




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/album/:albumId" element={<AlbumPage />} />
            <Route path="/artist/:artistId" element={<ArtistPage />} />
            <Route path="/myLibrary" element={<MyLibraryPage />} /> 
          </Routes>
          <PlayerComponent />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
