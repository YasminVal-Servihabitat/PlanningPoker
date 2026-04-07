"use client";
import { useEffect, useState } from "react";

export function ListaParticipantes({ roomId }: { roomId: string }) {
  const [participantes, setParticipantes] = useState<{ username: string; selected_card: string | null }[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`/api/rooms/${roomId}/participants`)
        .then(res => res.json())
        .then(res => {
          setParticipantes(res.participants);
          setLoading(false);
        });
    }, 2000);
    return () => clearInterval(interval);
  }, [roomId]);

  return (
    <div className="relative flex-col p-10 rounded-3xl h-96 border-2 items-center text-white  bg-gradient-to-br from-black to-red-900 font-bold">
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />
        </div>
      ) : (
        <table>
          <tbody>
            {participantes.map((p, i) => (
              <tr key={i}>
                <td>{p.username}</td>
                <td>{p.selected_card ?? "Sin votar"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
