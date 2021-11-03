import React from "react";
import Titre from "../../../components/UI/Titres/TitreH1";
import Image from 'react-bootstrap/Image'
import imgAccueil from "../../../asset/images/Marseille.jpg"

const accueil = (props) => (
    <>
        <Titre>Bienvenue sur le site des Bouches-du-Rhône !</Titre>
        <p>Le site vous aidant à trouver les établissements publics des Bouches-du-Rhône</p>
        <Image src={imgAccueil} fluid thumbnail style={{width:"100%"}}/>
    </>
);

export default accueil;