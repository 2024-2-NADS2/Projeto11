import HomePage from "./pages/HomePage";
import Login from "./Login";
import CadastroPage from "./pages/CadastroPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<CadastroPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
