import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma"; 

export async function POST(request: Request) {
   try {
        const res = await request.json();

       

        return NextResponse.json(
            {
                message: "Sala creada correctamente",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creando sala:", error);
        return NextResponse.json(
            { error: "Error al crear la sala" },
            { status: 500 }
        );
    }
}


