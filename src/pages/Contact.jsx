import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

function Contact() {
  return (
    <div>
      <Card 
        width="800px"
        text={"Voici le texte de la carte"}
        title={"Card Title"}
        children={<Button text={"Composant Bouton dans la card"} />}
      />
    </div>
  );
}

export default Contact;
