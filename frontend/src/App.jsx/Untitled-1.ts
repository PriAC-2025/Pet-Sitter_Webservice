import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProvider from './contexts/UserContext'; // Importando o contexto
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => (
    <UserProvider> {/* Contexto envolve toda a aplicação */}
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
        </UserProvider>
        <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
        </Provider>
);

export default App;
