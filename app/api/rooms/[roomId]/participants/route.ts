import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params:{ roomId: string } }
) {
  try {
    const { roomId: codigo } = await params;

    if (!codigo) {
      return NextResponse.json(
        { error: "Falta el código de la sala" },
        { status: 400 }
      );
    }


    const sala = await prisma.sala.findUnique({
      where: { codigo },
      include: {
        participants: true,
      },
    });

    if (!sala) {
      return NextResponse.json(
        { error: "Sala no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      sala: {
        id: sala.id,
        codigo: sala.codigo,
        host_Id: sala.host_Id,
      },
      participants: sala.participants,
    });

  } catch (error) {
    console.error("Error obteniendo participantes:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}