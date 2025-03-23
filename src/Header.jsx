import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header({ isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isAuthenticated);  // Verifică dacă starea se transmite corect

  return (
    <header className="bg-alb text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-2 sm:p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="logo.png" alt="Park a Lot Logo" className="h-15 w-15 object-cover" />
        </Link>

        {/* Meniu Desktop */}
        <nav className="hidden md:flex space-x-6">
          {isAuthenticated ? (
            <>
              <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" />
              <img className="w-10 h-10" src="https://icons.veryicon.com/png/o/miscellaneous/basic-icon/message-54.png" />
              <Link to="/find_spot">
                <button className="bg-albastru hover:bg-galben text-white font-bold py-2 px-4 border border-albastru rounded hover:border-transparent">
                  HARTĂ
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-transparent hover:bg-galben text-albastru font-semibold hover:text-white py-2 px-4 border border-albastru hover:border-transparent rounded">
                  ÎNCHIREAZĂ
                </button>
              </Link>
              <img className="w-10 h-10 ml-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-albastru hover:bg-galben text-white font-bold py-2 px-4 border border-albastru rounded hover:border-transparent">
                  LOG IN
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-transparent hover:bg-galben text-albastru font-semibold hover:text-white py-2 px-4 border border-albastru hover:border-transparent rounded">
                  SIGN UP
                </button>
              </Link>
            </>
          )}
        </nav>

        {/* Buton Meniu Burger - Mobil */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-albastru" size={30} /> : <Menu className="text-albastru" size={30} />}
        </button>
      </div>

      {/* Meniu Mobil */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center p-4 space-y-4">
          {isAuthenticated ? (
            <>
              <button className="w-80 bg-albastru hover:bg-galben hover:border-transparent text-white font-bold py-2 px-4 border border-albastru rounded">
                NOTIFICĂRI
              </button>
              <button className="w-80 bg-albastru hover:bg-galben hover:border-transparent text-white font-bold py-2 px-4 border border-albastru rounded">
                MESAJE
              </button>
              <button className="w-80 bg-albastru hover:bg-galben hover:border-transparent text-white font-bold py-2 px-4 border border-albastru rounded">
                CONT
              </button>

              <hr className="w-70 h-1 rounded-sm dark:bg-albastru"/>

              <Link to="/find_spot" onClick={() => setIsOpen(false)}>
                <button className="w-80 bg-albastru hover:bg-galben hover:border-transparent text-white font-bold py-2 px-4 border border-albastru rounded">
                  HARTĂ
                </button>
              </Link>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <button className="w-80 bg-transparent hover:bg-galben hover:border-transparent text-albastru font-semibold hover:text-white py-2 px-4 border border-albastru hover:border-transparent rounded">
                  ÎNCHIREAZĂ
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-80 bg-albastru hover:bg-galben text-white font-bold py-2 px-4 hover:border-transparent border border-albastru rounded">
                  LOG IN
                </button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <button className="w-80 bg-transparent hover:bg-galben text-albastru font-semibold hover:text-white py-2 px-4 hover:border-transparent border border-albastru hover:border-transparent rounded">
                  SIGN UP
                </button>
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
