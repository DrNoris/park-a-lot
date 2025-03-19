import { useState } from "react";
import { Link} from "react-router-dom";
import { Menu, X } from "lucide-react";

import Register from "./pages/Register";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-alb text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="src/download.png" alt="Park a Lot Logo" className="h-10 w-10" />
          <span className="text-xl text-albastru font-semibold">Park a Lot</span>
        </Link>

        {/* Meniu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/login">
            <button className="bg-albastru hover:bg-galben text-white font-bold py-2 px-4 border border-albastru rounded hover:border-transparent">
              LOG IN
            </button>
          </Link>
          <Link to="/register" element={<Register/>}>
          <button className="bg-transparent hover:bg-galben text-albastru font-semibold hover:text-white py-2 px-4 border border-albastru hover:border-transparent rounded">
            SIGN IN
          </button>
          </Link>
        </nav>

        {/* Buton Meniu Burger - Mobil */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-albastru" size={30} /> : <Menu className="text-albastru" size={30} />}
        </button>
      </div>

      {/* Meniu Mobil */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center p-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <button className="w-80 bg-albastru hover:bg-blue-700 text-white font-bold py-2 px-4 border border-albastru rounded">
              LOG IN
            </button>
          </Link>
          <Link to="/" onClick={() => setIsOpen(false)}>
          <button className="w-80 bg-transparent hover:bg-blue-700 text-albastru font-semibold hover:text-white py-2 px-4 border border-albastru hover:border-transparent rounded">
            SIGN IN
          </button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
