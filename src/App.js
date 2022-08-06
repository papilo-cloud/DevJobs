import { GlobalProvider } from "./components/context/UserContext";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Jobs from "./components/Jobs";


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Filter />
        <Jobs />
      </GlobalProvider>
    </div>
  );
} 

export default App;
