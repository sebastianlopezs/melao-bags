// import React from 'react';
import { useNavigate } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <VscArrowLeft
          className="cursor-pointer  text-2xl hover:text-red-600 transition duration-300 my-3 mx-3"
          onClick={() => {
            navigate("/");
          }}
        />
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-40 mr-2"
                src="../../public/melaologo.jpg"
                alt="logo"
              />
            </a>
            <div className="w-full shadow-xl border text-black rounded-3xl dark:border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Crear una cuenta
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Ingrese su correo"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Confirmar contraseña
                    </label>
                    <input
                      type="confirm-password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500"
                      >
                        Acepto los {" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-red-600 transition duration-300"
                          href="#"
                        >
                          Términos y Condiciones
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-red-600 hover:bg-red-700 transition duration-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Registrarse
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    ¿Ya es miembro?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-red-600 transition duration-300"
                    >
                      Inicie sesión aquí
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
