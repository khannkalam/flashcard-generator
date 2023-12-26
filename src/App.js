import Navbar from "./components/ui/navigation/Navbar";
import Container from "./layouts/containers/Container";
import Logo from "./assets/logo.png";
import Footer from "./components/ui/footer/Footer";

function App() {
  return (
    <div data-testid="appDiv" className="bg-sky-200 min-h-screen pb-10">
      <Navbar Logo={Logo} />
      <Container  />
      <Footer />
    </div>
  );
}

export default App;
