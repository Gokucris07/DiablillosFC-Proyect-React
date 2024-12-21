import { useState } from 'react'
import Modal from './Modal';
import { NavLink,Link } from 'react-router-dom';
export default function Inicio(){
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto o cerrado

  const openModal = () => {
    setIsModalOpen(true); // Abrimos el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cerramos el modal
  };
    
    return (
        <>
        <div className='ContenedorHeader'>
            <div className='headerhijo'>
                <div className='LogoMenu'>
                <Link className='Link-Route' to="/"><h1>Diablillos FC</h1></Link>
                </div>
                <ul>
                <li>
              <NavLink to="/plantilla" 
                className={({ isActive }) => isActive ? 'Link-Route active' : 'Link-Route'}
              > Plantilla ▼
              </NavLink>
            </li>
            <li>
              <NavLink to="/partidos" 
                className={({ isActive }) => isActive ? 'Link-Route active' : 'Link-Route'}
              >Partidos ▼
              </NavLink>
            </li>
                </ul>
                <button className='boton-login' onClick={openModal}>Login</button>
                <Modal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
        </div>
        </>
             
    )
}