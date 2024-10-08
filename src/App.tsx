import Wallet from "./pages/Wallet/Wallet";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="main">
      <NavBar />
      <div className="main-container">
        <Wallet />
      </div>
    </div>
  );
}

export default App;
