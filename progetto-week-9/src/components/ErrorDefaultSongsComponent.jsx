import React from "react";
import { Alert, Button } from "react-bootstrap";
import { IoReload } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import {useNavigate} from "react-router-dom"

export default function ErrorDefaultSongsComponent({ errorMsg }) {

    const navigate = useNavigate()




  return (
    <>
      <Alert variant="danger" className="mt-5 w-75">
        Error fertching data! {errorMsg}
      </Alert>
      <Button variant="light" className="mt-3 me-3" onClick={() => navigate(-1)}>
        <IoIosArrowRoundBack /> Go back
      </Button>
      {/* Qui voglio forzare il refresh della pagina. Anche se non si fa in react, 
      visto che rimango sempre su questa pagina quando faccio il fetch dei dati 
      non trovo modo di ritentare il caricamento senza cambiare troppo la struttura del programma*/}
      <Button variant="light" className="mt-3" onClick={() => window.location.reload()}>
        Reload <IoReload />
      </Button>
    </>
  );
}
