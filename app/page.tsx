"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function unirse() {
    router.push("/join-room");
  }

  function Crear() {
    router.push("/create-room");
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

        <div className="relative flex flex-col p-10 rounded-3xl h-auto border-2 bg-white/90 backdrop-blur-md shadow-xl border-red-500 text-center gap-6">
          <p className="text-2xl text-gray-700 mb-4 tracking-wide">
            Bienvenido. ¿Qué deseas hacer?
          </p>

          <button
            onClick={unirse}
            className="cursor-pointer hover:bg-white hover:text-red-600 transition-all w-full bg-red-600 rounded-xl text-white font-bold py-4 text-xl shadow-md tracking-wider"
          >
            Unirse a una sala
          </button>

          <button
            onClick={Crear}
            className="cursor-pointer hover:bg-red-700 transition-all w-full bg-black rounded-xl text-white font-bold py-4 text-xl shadow-md tracking-wider"
          >
            Crear una sala
          </button>
        </div>
      </div>
    </main>
  );
}
