
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext'; // Importa o contexto

const Login = () => {
    const { setUser } = useContext(UserContext); // Atualiza o estado global do usuário
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        setUser({ email }); // Define o usuário globalmente no contexto
        alert(`Usuário ${email} logado!`);
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
};

export default Login;

