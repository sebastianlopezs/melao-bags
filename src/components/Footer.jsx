import { Link } from "react-router-dom";
import "../css/footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

export const Footer = () => {
  return (
    <div className="footer bg-white text-black">
      <footer>
        <div className="row">
          <div className="colPrincipal">
            <img src="/melaologo.jpg" className="w-56 mb-2" />
            <h2 className="slogan text-center text-lg mb-">ELIGE TU ESTILO</h2>
          </div>
          <div className="col">
            <h3>
              Contacto{" "}
              <div className="underlineFooter">
                <span></span>
              </div>{" "}
            </h3>
            <ul>
              <li>
                <Link to="">Dirección</Link>
              </li>
              <li>
                <Link to="">Número de teléfono</Link>
              </li>
              <li>
                <Link to="">Correo electrónico</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Links{" "}
              <div className="underlineFooter">
                <span></span>
              </div>{" "}
            </h3>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/">Servicios</Link>
              </li>
              <li>
                <Link to="/">Nosotros</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Suscribete
              <div className="underlineFooter">
                <span></span>
              </div>{" "}
            </h3>
            <form className="formFooter">
              <TfiEmail className="text-lg" />
              <input type="email" placeholder="Boletín informativo" required />
              <button type="submit">
                <FaArrowRight className="hover:text-red-600 transition duration-300 cursor-pointer"/>
              </button>
            </form>
            <div className="social-icons flex gap-3 text-4xl">
              <FaWhatsapp className="hover:text-red-600 transition duration-300 cursor-pointer" />
              <FaInstagram className="hover:text-red-600 transition duration-300 cursor-pointer" />
              <BsTwitterX className="hover:text-red-600 transition duration-300 cursor-pointer" />
              <FaFacebookF className="hover:text-red-600 transition duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Melao Bags © 2023 - Derechos de Autor</p>
      </footer>
    </div>
  );
};
