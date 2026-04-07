import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma"; 

function generar_codigo(largo:number) {
    let numeros= "0123456789";
    let letras ="abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUXYZ";
    let cadena = "#"+numeros +letras; 
    let codigo= "";
    for (let i = 0; i < largo; i++) {
        let aleatorio = Math.floor(Math.random()* cadena.length);
        codigo += cadena.charAt(aleatorio);
        
    }
    return codigo;
}
console.log(generar_codigo(6));

export async function POST(request: Request) {
   try {
        const res = await request.json();

        const nuevaSala = await prisma.sala.create({
            data: { codigo: generar_codigo(6) },
        });

        const host = await prisma.participants.create({
            data: { sala_id: nuevaSala.id, username: res.hostName },
        });

        await prisma.sala.update({
            where: { id: nuevaSala.id },
            data: { host_Id: host.id },
        });

        return NextResponse.json(
            {
                message: "Sala creada correctamente",
                sala: nuevaSala,
                participantId: host.id,
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


