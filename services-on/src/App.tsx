import "./App.css";
import TopService from "./components/topService";
import ViewServices from "./components/viewServices";

function App() {
  return (
    <main className="flex flex-col">
      <TopService />
      <ViewServices></ViewServices>
    </main>
  );
}

export default App;
