"use client";
import card from "@material-tailwind/react/theme/components/card";
import { useState } from "react";

const cards = ["5", "10", "15", "20", "25", "30", "35", "?"];

export default function CardPicker() {
  const [selected, setSelected] = useState<string | null>(null);
  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
   /*  setCargando(true); */

    if (card) {
      const response = await fetch("/api/rooms/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const res = await response.json();
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <ul className="grid w-full max-w-2xl grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4 list-none p-0">
        {cards.map((value) => {
          const isSelected = selected === value;

          return (
            <li key={value}>
              <button
                onClick={() => setSelected(value)}
                className={`
                  h-32 w-full rounded-xl border-2
                  bg-white text-3xl font-bold
                  shadow-md transition-all duration-200
                  hover:-translate-y-1 hover:shadow-xl
                  ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 shadow-blue-300"
                      : "border-gray-300"
                  }
                `}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>

      {selected && (
        <p className="text-lg text-white">
          Carta seleccionada: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
}
