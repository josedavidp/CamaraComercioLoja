import React, { useState } from 'react';
import { Header } from './Header'; // Asegúrate de importar el componente Header desde la ubicación correcta

export const Ingreso = () => {
  const [primerNombre, setFirstName] = useState('');
  const [segundoNombre, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setPassword] = useState('');
  const [confirmarClave, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para enviar los datos a tu servidor o realizar las acciones de registro necesarias
    console.log('Datos enviados:', primerNombre, segundoNombre, email, clave, confirmarClave);
    // Lógica adicional, como enviar datos a una API o realizar validaciones
  };

  return (
    <>
      <Header /> {/* Agregamos el componente Header */}
      <div className="min-h-screen py-40" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-blue rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 py-16 px-12 order-2 lg:order-1">
              <h2 className="text-3xl mb-4 text-yellow">Ingresar</h2>
              <p className="mb-4 text-white">
                Ingrese con sus credenciales para acceder a su cuenta 
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <input type="text" placeholder="Email" className="border border-gray py-1 px-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Clave" className="border border-gray py-1 px-2 w-full" value={clave} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray" />
                  <span className='text-white'>
                    Acepto los <a href="#" className="text-yellow font-semibold">Terminos y condiciones</a> &  <a href="#" className="text-yellow font-semibold">Politica de privacidad</a> 
                  </span>
                </div>
                <div className="mt-5">
                  <button type="submit" className="w-full bg-yellow py-3 text-center text-blue font-semibold">Ingresa</button>
                </div>
                <div className="mt-5">
                  <button type="submit" className="w-full bg-yellow py-3 text-center text-blue font-semibold">No tengo una cuenta</button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-no-repeat bg-cover bg-center order-1 lg:order-2" style={{ backgroundImage: `url('src/assets/img/bg.png'), minHeight: '300px' ` }}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};