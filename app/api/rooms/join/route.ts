import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma"; 
export async function POST(req: Request) {
    try {
     
const { nombre_participante, salaId } = await req.json();
const sala = await prisma.sala.findUnique({ where: { codigo: salaId } });

  
      if (!sala) {
        return NextResponse.json({ error: "Sala no encontrada" }, { status: 404 });
      }
  
      const participant = await prisma.participants.create({
        data: {
          sala_id: sala.id,
          username: nombre_participante,
        },
      }); 
      return NextResponse.json(
        {
          message: "Te hasunido correctamente a la sesion!!",
          sala,
          participant: nombre_participante 
        },
        { status: 200 }
      );
  
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: "Error al unirse a la sala" },
        { status: 500 }
      );
    }
  }
