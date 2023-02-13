import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
  const name = "Gabi";
  return (
    <div>
      <p>Primeiro Componente</p>
      <h3>Nome: {name}</h3>
      <AnotherComponent />
    </div>
  );
}

export default FirstComponent;
