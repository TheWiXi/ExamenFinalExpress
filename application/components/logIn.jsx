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
            <div className="form bg-gray-400 flex flex-col items-start justify-center gap-5 p-5 rounded border-2 border-gray-800 shadow-lg">
                <p className="text-gray-800 font-bold text-xl mb-3 flex flex-col">
                Bienvenido ! <span className="text-gray-500 font-semibold text-lg">Ingresa o registrate.</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
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
