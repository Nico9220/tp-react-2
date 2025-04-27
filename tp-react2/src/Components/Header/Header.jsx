import  { Link } from 'react-router-dom';
import Idioma from './Idioma'; // hay que crearlo todavia

const Header = () => {
    return (
        <header className= "sticky top-0 z-50 bg-gray-900 text-white flex justify-between items-center p-4 shadow-md">
            {/*Logo no nombre */}
            <Link to="/" className="text-2xl font-bold hover:text-gray-400 transition">
            Magic SPA
            </Link>

            {/* Navegacion */}
            <nav className="flex gap-6 items-center">
                <Link to="/" className="hover:text-gray-400 transition">Inicio</Link>
                <Link to="/favoritos" className="hover:text-gray-400 transition">Favoritos</Link>
                <Idioma />
            </nav>
        </header>
    );
};

export default Header;