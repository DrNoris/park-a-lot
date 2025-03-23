import React from "react";
import AddListing from "../AddListing";
import Header from "../Header";
import Footer from "../Footer";
import FAQ from "../FAQ";

function AddParkingPage() {
  return (
    <div>
      <Header isAuthenticated={true} />
      <section className="bg-albastru p-10 md:px-20 lg:px-80">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-alb">
            Adaugă un loc de parcare de închiriat
          </h2>
          <p className="mt-4 text-lg text-alb">
            Completează formularul de mai jos pentru a adăuga un anunț cu locul
            tău de parcare disponibil. Asigură-te că adaugi toate detaliile
            relevante, cum ar fi adresa, prețul și disponibilitatea.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center m-6 p-6 md:p-12 bg-alb rounded-3xl md:m-12">
        {/* Partea stângă (imagine) */}
        <div data-aos="fade-up" className="w-full md:w-1/2 mb-10 sm:mb-2">
            <img 
            src="https://wallpapers.com/images/hd/person-alone-in-a-parking-lot-yb2r1qb0qj1am46s.jpg" 
            alt="Person in parking lot"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
        </div>

        {/* Partea dreaptă (formular AddListing) */}
        <div className="w-full md:w-7/12 md:pl-8 mt-8 md:mt-0">
            <AddListing />
        </div>
        </section>
      <FAQ/>
      <Footer dark={true} />
    </div>
  );
}

export default AddParkingPage;
