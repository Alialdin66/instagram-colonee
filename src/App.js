import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import Pagelayout from "./Layouts/Pagelayouts/Pagelayout";
import Profilepage from './Pages/Profilepage/Profilepage';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./componants/firebase/firebase.js";
function App() {
	const [authUser] = useAuthState(auth);

  return (
    
    <Pagelayout>
      <Routes>
        <Route path="/" element={authUser?<HomePage />:<Navigate to="/auth"/>} />
        <Route path="/auth" element={!authUser?<AuthPage />:<Navigate to="/"/>} />
        <Route path="/:username" element={<Profilepage />} />

      </Routes>
    </Pagelayout>
  );
}

export default App;
