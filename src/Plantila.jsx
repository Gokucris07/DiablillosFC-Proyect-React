import { useState } from 'react'
import React from 'react';
import fotoDePerfil from './imagenes/fotodeperfil.png';
export default function Plantilla() {
    const jugadores = [
        {
            id: 1,
            nombre: "Sahid Cazarez",
            posicion: "Defensa",
            numero: 2,
            goles: 1,
            asistencias: 2,
            
        },
        {
            id: 2,
            nombre: "Cristopher",
            posicion: "Delantero",
            numero: 66,
            goles: 5,
            asistencias: 2,
            
        },
        {
            id: 3,
            nombre: "ManiManuelas",
            posicion: "Portero",
            numero: 1,
            goles: 0,
            asistencias: 0,
       
        },
        {
            id: 4,
            nombre: "Deke peque",
            posicion: "Medio Centro",
            numero: 8,
            goles: 4,
            asistencias: 3,
            
        },
        {
            id: 5,
            nombre: "Carlos",
            posicion: "Defensa",
            numero: 4,
            goles: 3,
            asistencias: 1,
            
        },
        {
            id: 6,
            nombre: "Eliut",
            posicion: "Delantero",
            numero: 21,
            goles: 7,
            asistencias: 1,
           
        },
        {
            id: 8,
            nombre: "Luis Chiken",
            posicion: "Delantero",
            numero: 7,
            goles: 3,
            asistencias: 1,
            
        },
        {
            id: 9,
            nombre: "Ochoa",
            posicion: "Defensa",
            numero: 10,
            goles: 3,
            asistencias: 1,
         
        },
        {
            id: 10,
            nombre: "Richi Hacha Villalba",
            posicion: "Defensa",
            numero: 3,
            goles: 0,
            asistencias: 1,
            
        },
        {
            id: 11,
            nombre: "Alejanfro la bala",
            posicion: "Medio",
            numero: 10,
            goles: 3,
            asistencias: 1,
          
        },
        {
            id: 12,
            nombre: "Edgar camacho",
            posicion: "Medio",
            numero: 4,
            goles: 3,
            asistencias: 1,
        },
        {
            id: 3,
            nombre: "Carlos López",
            posicion: "Defensa",
            numero: 4,
            goles: 3,
            asistencias: 1,
        
        },
        {
            id: 3,
            nombre: "Carlos López",
            posicion: "Defensa",
            numero: 4,
            goles: 3,
            asistencias: 1,
            
        },
        {
            id: 3,
            nombre: "Carlos López",
            posicion: "Defensa",
            numero: 4,
            goles: 3,
            asistencias: 1,
           
        },
        {
            id: 3,
            nombre: "Carlos López",
            posicion: "Defensa",
            numero: 4,
            goles: 3,
            asistencias: 1,
           
        }
    ];

    // Componente TarjetaJugador
    function TarjetaJugador({ jugador }) {
        return (
            <div className="tarjeta-jugador">
                <img className='foto-jugador' src={fotoDePerfil} alt='Foto de perfil del jugador'/>
                <div className="detalles-jugador">
                    <h2>{jugador.nombre}</h2>
                    <p><strong>Posición:</strong> {jugador.posicion}</p>
                    <p><strong>Número:</strong> {jugador.numero}</p>
                    <p><strong>Goles:</strong> {jugador.goles}</p>
                    <p><strong>Asistencias:</strong> {jugador.asistencias}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="ContenedorId">
                { /* Renderiza una tarjeta para cada jugador */ }
                {jugadores.map(jugador => (<TarjetaJugador key={jugador.id} jugador={jugador} />
                ))}
            </div>
        </>
    );
}