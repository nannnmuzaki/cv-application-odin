import "./App.css";
import { Builder } from "./components/Builder/Builder";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Builder />
      </main>
    </>
  );
}

export default App;
