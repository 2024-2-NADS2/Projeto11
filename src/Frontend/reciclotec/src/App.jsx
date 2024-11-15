import HomePage from "./pages/HomePage";
import QuemSomosPage from "./pages/QuemSomosPage";
import InfoColetaPage from "./pages/InfoColetaPage";
import AgendePage from "./pages/AgendePage";
import NoticiasPage from "./pages/NoticiasPage";
import ParceriasPage from "./pages/ParceriasPage";
import ContatoPage from "./pages/ContatoPage";
import FooterPage from "./pages/FooterPage";
import Navbar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import { Routes, Route } from 'react-router-dom';
import ColetaPage from "./pages/ColetaPage";
import AdUsuarioPage from "./pages/AdUsuarioPage";
import OdsPage from "./pages/OdsPage";
import AdAgendamentosPage from "./pages/AdAgendamentosPage";
import AdAtualizarPage from "./pages/AdAtualizarPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage />} />
                <Route path="/coleta" element={<ColetaPage/>} />
                <Route path="/adUsuario" element={<AdUsuarioPage/>} />
                <Route path="/adAgendamentos" element={<AdAgendamentosPage/>} />
                <Route path="/adAtualizar" element={<AdAtualizarPage/>} />

                <Route 
                    path="/" 
                    element={
                        <>
                            <Navbar />
                            <HomePage />
                            <QuemSomosPage />
                            <OdsPage/>
                            <InfoColetaPage />
                            <AgendePage />
                            <NoticiasPage />
                            <ParceriasPage />
                            <ContatoPage />
                            <FooterPage />
                        </>
                    } 
                />
            </Routes>
        </div>
    );
}

export default App;
