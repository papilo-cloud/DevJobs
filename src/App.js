import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext, GlobalProvider } from "./components/context/UserContext";
import Filter from "./components/Filter";
import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import Jobs from "./components/Jobs";


function App() {
  const {theme} = useContext(GlobalContext)
  return (
    <div className={theme? 'App dark_themes':'App'}>      
        <Header />
        {/* <Filter /> */}
        <JobDetails />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/:id" element={<JobDetails />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
} 

export default App;
