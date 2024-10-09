import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            
            const response = await fetch('http://localhost:3000/auth/loguser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include' // Incluir cookies en la solicitud
            });
            
            console.log(response)
            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
                return;
            }

            const data = await response.json();
            console.log(data.message);
            navigate('/profile');
        } catch (error) {
            setErrorMessage('Error al iniciar sesión. Intenta de nuevo.');
        }
    };

    return (
        <main className="w-1/2 h-1/2 flex justify-center items-center rounded-lg">
            <div className="form bg-gray-300 flex flex-col items-start justify-center gap-5 p-5 rounded border-2 border-gray-800 shadow-lg">
                <p className="text-gray-800 font-bold text-xl mb-3 flex flex-col">
                Bienvenido pa, <span className="text-gray-500 font-semibold text-lg">Logeate para continuar</span>
                </p>

                <button
                className="oauthButton bg-white flex justify-center items-center gap-1 p-2 w-64 h-10 rounded border-2 border-gray-800 shadow-lg font-semibold text-gray-800 relative overflow-hidden transition-all duration-250 hover:text-gray-300"
                onClick={() => window.open("http://localhost:3000/auth/google", "_self")}
                >
                <svg className="icon w-6 h-6" viewBox="0 0 24 24">
                    <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                    />
                    <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                    />
                    <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                    />
                    <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Continúa con Google
                </button>

                <button
                className="oauthButton bg-white flex justify-center items-center gap-1 p-2 w-64 h-10 rounded border-2 border-gray-800 shadow-lg font-semibold text-gray-800 relative overflow-hidden transition-all duration-250 hover:text-gray-300"
                onClick={() => window.open("http://localhost:3000/auth/facebook", "_self")}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="icon w-6 h-6">
                    <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/>
                    <path fill="#fff" d="m177.825 165 5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/>
                </svg>
                Continúa con Facebook
                </button>

                <button
                className="oauthButton bg-white flex justify-center items-center gap-1 p-2 w-64 h-10 rounded border-2 border-gray-800 shadow-lg font-semibold text-gray-800 relative overflow-hidden transition-all duration-250 hover:text-gray-300"
                onClick={() => window.open("http://localhost:3000/auth/discord", "_self")}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 199" className="icon w-6 h-6">
                    <path fill="#5865f2" d="M216.856 16.597A208.5 208.5 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046q-29.538-4.442-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.8 207.8 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161 161 0 0 0 79.735 175.3a136.4 136.4 0 0 1-21.846-10.632a109 109 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a132 132 0 0 0 5.355 4.237a136 136 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36"/>
                </svg>
                Continúa con Discord
                </button>

                <div className="separator flex items-center justify-center gap-1 w-full">
                <div className="w-24 h-0.5 bg-gray-500 rounded"></div>
                <span className="text-gray-800 font-semibold">O</span>
                <div className="w-24 h-0.5 bg-gray-500 rounded"></div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-lg font-semibold text-gray-800 p-2 outline-none"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-lg font-semibold text-gray-800 p-2 outline-none"
                />
                <button className="oauthButton bg-white flex justify-center items-center gap-1 p-2 w-64 h-10 rounded border-2 border-gray-800 shadow-lg font-semibold text-gray-800 relative overflow-hidden transition-all duration-250 hover:text-gray-300" type="submit">
                    Continúa
                    <svg className="icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <span>No tienes cuenta?, <a href="/register">Registrate</a></span>
                </form>
            </div>
            </main>
    );
}
