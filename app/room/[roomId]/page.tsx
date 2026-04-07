"use client";
import { ListaParticipantes } from "@/app/componentes/ListaParticipantes";
import CardPicker from "@/app/componentes/CardPicker";
import { use } from "react";
export default function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = use(params);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-red-950 to-black px-6">
      <div className="relative w-full max-w-7xl">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-red-600/40 blur-3xl" />
          <div className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-red-800/30 blur-3xl" />
        </div>
        <h1
          className="relative mb-20 text-center text-7xl font-black tracking-widest font-['Pirata']
          bg-gradient-to-b from-red-500 via-red-300 to-white
          bg-clip-text text-transparent
          drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]"
        >
          Planning Poker
        </h1>
        <div
          className="relative z-10 flex h-[520px] w-full rounded-3xl
          bg-black/80 border border-red-700/50
          shadow-[0_0_40px_rgba(255,0,0,0.35)]"
        >
          <section className="w-1/3 p-8">
            <h2 className=" text-center mb-6 text-xl font-bold  tracking-widest text-red-400">
              PARTICIPANTES
            </h2>
            <ListaParticipantes roomId={roomId} />
          </section>
          <div className="relative w-px bg-gradient-to-b from-transparent via-red-600 to-transparent">
            <span className="absolute inset-0 blur-sm bg-red-600/50" />
          </div>
          <section className="flex flex-1 flex-col items-center justify-center p-8">
            <h2 className="mb-6 text-xl font-bold  tracking-widest text-red-400">
              ESTIMACIÓN
            </h2>
    
            <CardPicker/>
          </section>
        </div>
      </div>
    </main>
  );
}
