import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <main>
      <Toaster />
      <NavBar />
      <Home />
    </main>
  );
}

export default App;
