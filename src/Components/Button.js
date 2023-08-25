import 'bootstrap/dist/css/bootstrap.css';

export default function Button(props) {
  // Fonction pour afficher une alerte simple
  function doAlert() {
    alert("button clicked");
  }

  // Fonction pour afficher une alerte avec un message
  function doAlert2(message) {
    alert("message:" + message);
  }

  // Fonction pour afficher une alerte avec un message et consigner l'événement
  function doAlert3(event, message) {
    alert("message:" + message)
    console.log(event.currentTarget);
  }

  return (
    <>
      {/* Bouton avec l'appel à doAlert */}
      <button className="btn btn-primary" onClick={doAlert}>{props.text}</button>

      {/* Bouton avec une alerte inutile */}
      <button className="btn btn-dark" onClick={() => { alert('do Alert inutile') }}>Click pour voir l'alerte</button>

      {/* Bouton avec l'appel à doAlert2 */}
      <button className="btn btn-success" onClick={() => doAlert2("Bonjour je suis message event")}>Click me!</button>

      {/* Bouton avec l'appel à doAlert3 */}
      <button className="btn btn-warning" onClick={(event) => doAlert3(event, "Je suis doAlert3")}>Click me!</button>

      {/* Bouton avec l'appel à doAlert3 et utilisation de props */}
      <button className="btn btn-danger" onClick={(event) => doAlert3(event, props.message)}>Click me 3!</button>
    
      {/* Utilisation d'une structure conditionnelle pour le console.log */}
      {true && (
        <button className="btn btn-info" onClick={(event) => doAlert3(event, props.message)}>Click me 4!</button>
      )}
    </>
  );
}
