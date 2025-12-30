import birthdayConfig from "./config/birthdayConfig";

function App() {
  return (
    <div>
      <h1>{birthdayConfig.name}</h1>
      {birthdayConfig.message.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default App;
