import { GlobalProvider } from "./components/context/UserContext";
import Header from "./components/Header";
import Jobs from "./components/Jobs";


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Jobs />
      </GlobalProvider>
    </div>
  );
} 

export default App;
