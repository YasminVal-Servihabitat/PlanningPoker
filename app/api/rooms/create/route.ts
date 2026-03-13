import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma"; 
type Sala = {
    id: String;
    hostName: string;

};
const salas: Sala[] = [];
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
     data: {
         id: generar_codigo(6),
         hostName: res.hostName,
     },
 });

 return NextResponse.json(
     {
         message: "Sala creada correctamente",
         sala: nuevaSala,
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


