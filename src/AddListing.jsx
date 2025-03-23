import React from "react";
import { useState } from "react";
//ip: 192.168.34.124, port:1234
function AddListing() {
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const [hours, setHours] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 5) {
      setError("Poți adăuga maxim 5 imagini.");
      return;
    }
    setError("");
    setImages([...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address || !hours || !pricePerHour || images.length === 0 || !details) {
      setError("Te rog completează toate câmpurile.");
      return;
    }
  
    const formData = new FormData();
    formData.append("address", address);
    formData.append("hours", hours);
    formData.append("pricePerHour", pricePerHour);
    formData.append("details", details);
    images.forEach((image, index) => {
      formData.append(`images`, image);
    });
  
    try {
      const response = await fetch("https://1d2f-5-2-197-133.ngrok-free.app", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        console.log("Loc de parcare adăugat cu succes!");
        setAddress("");
        setHours("");
        setPricePerHour("");
        setDetails("");
        setImages([]);
        setError("");
      } else {
        setError("Eroare la trimiterea datelor.");
      }
    } catch (error) {
      setError("Eroare de rețea. Verifică dacă backend-ul rulează.");
      console.error("Eroare:", error);
    }
  };
  

  return (
    <div data-aos="fade-up" className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Adaugă un loc de parcare
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label htmlFor="address" className="block text-lg font-semibold">
            Adresă
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Introdu adresa"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hours" className="block text-lg font-semibold">
            Interval orar
          </label>
          <input
            type="text"
            id="hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="Ex: 6:00-8:00"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pricePerHour" className="block text-lg font-semibold">
            Preț pe oră (RON)
          </label>
          <input
            type="number"
            id="pricePerHour"
            value={pricePerHour}
            onChange={(e) => setPricePerHour(e.target.value)}
            placeholder="Preț pe oră"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="details" className="block text-lg font-semibold">
            Detalii
          </label>
          <input
            type="text"
            id="details"
            value={address}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Introdu Detalii"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="images" className="block text-lg font-semibold">
            Imagini
          </label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from(images).map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`image-preview-${index}`}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          )}
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Adaugă locul de parcare
        </button>
      </form>
    </div>
  );
}

export default AddListing;
