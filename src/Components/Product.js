import React from "react";

// Définition du composant Product
function Product(props) {
  return (
    // Utilisation d'une div avec une classe CSS pour afficher le produit
    <div className="product">
      {/* Utilisation de props.title pour afficher le titre du produit */}
      <h2>{props.title}</h2>
      {/* Utilisation de props.description pour afficher la description du produit */}
      <p>{props.description}</p>
      {/* Utilisation de props.price pour afficher le prix du produit avec le symbole euro */}
      <p>Price: {props.price} &euro;</p>
      {/* Utilisation de props.colorPrice pour définir la couleur du prix */}
      <p style={{ color: props.colorPrice }}>Price: {props.price} &euro;</p>
      {/* Bouton "Acheter" avec classe de style Bootstrap */}
      <button className="btn btn-info">Acheter</button>
      {/* Bouton "Ajouter au panier" avec classe de style Bootstrap */}
      <button className="btn btn-success">Ajouter au panier</button>
    </div>
  );
}

// Exportation du composant Product pour une utilisation ailleurs
export default Product;
