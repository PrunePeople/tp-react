// Importation des fichiers CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// Importation des composants Product et Button
import Product from "./Components/Product.js";
import Button from "./Components/Button";

// Composant principal App
function App() {
  // Définition des données des produits
  const products = [
    {
      title: "Product One",
      price: 99,
      description: "Meilleur produit de l'année",
    },
    {
      title: "Product Two",
      price: 49,
      description: "Super affaire",
    },
  ];

  // Variable pour le quatrième exemple
  const fruits = [
    { title: "Orange", id: 1, isFruit: false },
    { title: "lail nest pas un fruit", id: 2, isFruit: true },
    { title: "le chou non plus", id: 3, isFruit: true },
  ];

  const objStyle = {
    textAlign: "center",
    backgroundColor: "#61dafb", // Correction ici
    color: "red",
  };

  // Variable pour le deuxième exemple
  const isLoggedIn = true;

  // Rendu du composant App
  return (
    <div className="app">
      {/* Utilisation du composant Button avec des propriétés text et message */}
      <Button text="Cliquez-moi" message="Voyons voir si ça marche" />

      {/* Mapping à travers les produits et affichage du composant Product pour chaque produit */}
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}

      <br></br>
      <br></br>

      {/* Deuxième exemple */}
      {isLoggedIn ? <Button /> : <Product />}
      <br />
      <br />
      {isLoggedIn && <Button />}

      <br></br>
      <br></br>

      {/* Troisième exemple */}
      {[1, 2, 3].map((number) => (
        <Button key={number} text={`Button ${number}`} />
      ))}
      <Button text="Extra Button" />

      <br></br>
      <br></br>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>

      <br></br>
      <br></br>

      {/* Quatrième exemple */}
      <h1 style={objStyle}>Style testing</h1>
      <button />
      {fruits.map((product) => (
        <li
          style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
          key={product.id}
        >
          {product.title}
        </li>
      ))}

      <br></br>
      <br></br>

      {/* Cinquième exemple */}
      {products.map((product, index) => (
        <Product
          title={product.title}
          desc={product.description}
          price={product.price}
          key={product.id}
          colorPrice={product.price > 50 ? "green" : "red"}
        />
      ))}
    </div>
  );
}

// Exportation du composant App pour l'utiliser ailleurs
export default App;
