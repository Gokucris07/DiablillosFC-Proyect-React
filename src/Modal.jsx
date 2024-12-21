import React from 'react';
export default function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null; // Si isOpen es falso, no renderiza el modal

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

 
