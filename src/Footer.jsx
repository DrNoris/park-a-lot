import React from "react";

function Footer({dark}) {
  return (
    <footer className={`${dark ? 'bg-albastru' : 'bg-alb'}  border-t ${dark ? 'border-gray-600' : 'border-gray-300'} p-4"`}>
      <div 
        className={`w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ${dark ? 'bg-albastru' : 'bg-alb'}`}
>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Park a Lot™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Despre
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Termeni & Condiții
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contactează-ne
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
