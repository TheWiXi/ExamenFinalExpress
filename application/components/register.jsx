import React from "react";
import { Form, useNavigate } from "react-router-dom";

export const registerAction = async ({ request }) => {
  let data = Object.fromEntries(await request.formData());
  let res = await fetch('http://localhost:3000/auth/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const user = await res.json();
    return user;
  } else {
    const errorData = await res.json();
    throw new Error(errorData.message); // Lanza el error si el registro falla
  }
};

export function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const res = await registerAction({ request: { formData: () => formData } });

    if (res) {
      navigate('/profile');
    } else {
      console.error('Error al registrar el usuario');
    }
  };

  return (
    <main className="w-1/2 h-1/2 flex justify-center items-center rounded-lg">
  <div className="form bg-gray-300 flex flex-col items-start justify-center gap-5 p-5 rounded border-2 border-gray-800 shadow-lg">
    <p className="text-gray-800 font-bold text-xl mb-3 flex flex-col">
      Regístrate para continuar, <span className="text-gray-500 font-semibold text-lg">Completa el formulario</span>
    </p>

    <Form className="formregister flex flex-col items-start justify-center gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nick"
        name="nick"
        required
        className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-lg font-semibold text-gray-800 p-2 outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-lg font-semibold text-gray-800 p-2 outline-none"
      />
      <input
        type="password"
        placeholder="Contraseña"
        name="password"
        required
        className="w-64 h-10 rounded border-2 border-gray-800 bg-white shadow-lg font-semibold text-gray-800 p-2 outline-none"
      />

      <div className="separator flex items-center justify-center gap-1 w-full">
        <div className="w-24 h-1 bg-gray-500 rounded"></div>
      </div>

      <input
        type="submit"
        className="oauthButton bg-white flex justify-center items-center gap-1 p-2 w-64 h-10 rounded border-2 border-gray-800 shadow-lg font-semibold text-gray-800 relative overflow-hidden transition-all duration-250 hover:text-gray-300"
        value="Continúa"
      />
    </Form>
  </div>
</main>
  );
}
