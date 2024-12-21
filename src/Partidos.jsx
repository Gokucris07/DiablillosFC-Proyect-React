import { useState } from 'react'
import React from 'react';
export default function Partidos(){
const Partidos=[
    {
        Id:1 ,
        Equipo1:"Diablillos",
        GolesEquipo1: 5,
        GolesEquipo2: 5,
        Equipo2:"Loncheria",
        Fecha:"22 de Noviembre 2024"
    },
    {
        Id:2,
        Equipo1:"Diablillos",
        GolesEquipo1: 3,
        GolesEquipo2: 1,
        Equipo2:"Canelitas",
        Fecha:"24 de Noviembre 2024"
    },
    {
        Id:1 ,
        Equipo1:"Diablillos",
        GolesEquipo1: 3,
        GolesEquipo2: 0,
        Equipo2:"New Era",
        Fecha:"1 de Diciembre 2024"
    },
    {
        Id:1 ,
        Equipo1:"Diablillos",
        GolesEquipo1: 5,
        GolesEquipo2: 7,
        Equipo2:"Comunicacion",
        Fecha:"7 de Diciembre 2024"
    },  {
        Id:1 ,
        Equipo1:"Diablillos",
        GolesEquipo1: 2,
        GolesEquipo2: 1,
        Equipo2:"Antropologia",
        Fecha:"9 de Diciembre 2024"
    },
    {
        Id:1 ,
        Equipo1:"Diablillos",
        GolesEquipo1: 1,
        GolesEquipo2: 0,
        Equipo2:"Los insanos",
        Fecha:"15 de Diciembre 2024"
    }
]
    function TarjetaPartido({partido}){
        return(
            <>
            
            <div className='Contenedor-Partido'>
            <h1 className='Fecha-Partido'>{partido.Fecha}</h1>
                <div className='Equipo1'><h1 className='nombreequipo'>{partido.Equipo1}</h1> <h1>{partido.GolesEquipo1}</h1></div>
                <div className='Equipo2'><h1 className='nombreequipo'>{partido.Equipo2}</h1> <h1>{partido.GolesEquipo2}</h1></div>
            </div>
            </>
            
        )
    }
    return (
        <>
        <div className='Contenedor-Partidos'>
            { /* Renderiza una tarjeta para cada jugador */ }
            {Partidos.map(partido => (<TarjetaPartido key={partido.Id} partido={partido} />))}

        </div>
        </>
             
    )

}