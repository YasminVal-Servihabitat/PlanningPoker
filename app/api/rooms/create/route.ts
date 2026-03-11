import { NextRequest, NextResponse } from 'next/server';
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
        const body = await request.json();
        const nuevaSala: Sala = {
            id:generar_codigo(6),
            hostName: body.hostname,
        };

        salas.push(nuevaSala);
        console.log(salas);

        return NextResponse.json({
            message: 'Sala creada',
            sala: nuevaSala,
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 400 });
    }
}

