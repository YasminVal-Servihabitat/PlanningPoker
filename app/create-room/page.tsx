"use client";
import { useRouter } from 'next/navigation'

import { useState } from "react";

export default function createRoom() {
  const [nombre, setNombre] = useState("");
  const router = useRouter();

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nombre.trim()) {
      const response = await fetch("/api/rooms/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hostname: nombre.trim()}),
        
      });
      const res =await response.json();
      router.push(`/room/${res.sala.id}`);
      console.log(res);
    }
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-100 font-sans ">
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-5 flex items-center justify-center pointer-events-none">
          <div className="absolute -top-35 left-40 h-70 w-60 rounded-full bg-pink-400 opacity-70 filter blur-xl mix-blend-multiply"></div>
          <div className="absolute -top-35 right-40 h-70 w-60 rounded-full bg-blue-400 opacity-70 filter blur-xl mix-blend-multiply"></div>
        </div>
        <h1 className="relative text-6xl font-black text-black font-['Pirata'] mb-40">
          Planning Poker
        </h1>
        <div className="relative flex-col p-8 rounded-2xl  h-96 w-200 items-center bg-amber-50 text-center">
          <p className="text-xl text-gray-500 mb-8">
            Introduce tu nombre para unirte a la sesión.
          </p>
          <form onSubmit={enviar} className="w-full">
            <input
              placeholder="Tu nombre..."
              className="focus:outline-amber-300 w-full px-6 py-4 rounded-xl text-xl outline mb-6 text-center placeholder:text-gray-400 font-medium"
              type="text"
              id="nombre"
              value={nombre}
              required
              onChange={(e) => setNombre(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer hover:text-black  hover:bg-amber-100 w-full  bg-gray-600 rounded-xl text-white font-bold py-4 text-xl  flex items-center justify-center gap-2"
            >
              Unirse
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
