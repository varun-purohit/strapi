import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Submenu from "./Components/Submenu";
import { useGlobalContext } from "./Context/context";

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  document.body.style.backgroundColor = "#6366f1";
  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </>
  );
};
export default App;
