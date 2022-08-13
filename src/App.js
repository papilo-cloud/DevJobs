import { useContext } from "react";
import { GlobalContext, GlobalProvider } from "./components/context/UserContext";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Jobs from "./components/Jobs";


function App() {
  const {theme} = useContext(GlobalContext)
  return (
    <div className={theme? 'App dark_themes':'App'}>      
        <Header />
        <Filter />
        <Jobs />
    </div>
  );
} 

export default App;
