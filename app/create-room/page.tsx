"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function createRoom() {
  const [nombre, setNombre] = useState("");
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCargando(true);

    if (nombre.trim()) {
      const response = await fetch("/api/rooms/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hostName: nombre.trim() }),
      });
      const res = await response.json();
      router.push(`/room/${res.sala.id}`);
      console.log(res);
    }
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black to-red-900 font-bold">
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-5 flex items-center justify-center pointer-events-none">
          <div className="absolute -top-36 left-55 h-72 w-65 rounded-full bg-red-600 opacity-50 blur-2xl mix-blend-multiply" />
          <div className="absolute -top-36 right-55 h-72 w-65 rounded-full bg-red-300 opacity-30 blur-2xl mix-blend-multiply" />
        </div>

        <h1 className="relative text-7xl font-black bg-gradient-to-b from-red-400 to-white bg-clip-text text-transparent tracking-widest drop-shadow-[0_0_10px_rgba(255,0,0,0.7)] mb-36 font-['Pirata']">
          Planning Poker
        </h1>
        <div className="relative flex-col p-10 rounded-3xl h-96 border-2 items-center bg-white/90 backdrop-blur-md shadow-xl border-red-500 text-center">
          <p className="text-2xl text-gray-700 mb-8 tracking-wide">
            Introduce tu nombre para unirte a la sesión
          </p>

          <form onSubmit={enviar} className="w-full">
            <input
              placeholder="Tu nombre..."
              className="focus:outline-none focus:ring-4 focus:ring-red-500 w-full px-6 py-4 rounded-xl text-xl text-center text-black placeholder:text-gray-400 bg-white border border-red-500 shadow-sm mb-6 tracking-wide"
              type="text"
              id="nombre"
              value={nombre}
              required
              disabled={cargando}
              onChange={(e) => setNombre(e.target.value)}
            />

            <button
              type="submit"
              disabled={cargando}
              className="cursor-pointer hover:bg-white hover:text-red-600 transition-all w-full bg-red-600 rounded-xl text-white font-bold py-4 text-xl flex items-center justify-center gap-2 shadow-md tracking-wider"
            >
              {cargando ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Unirse"
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
