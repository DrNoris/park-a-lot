import { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('checkoutData');
    console.log("Salut");
    console.log(storedData);
    if (storedData) {
      setCheckoutData(JSON.parse(storedData));
      localStorage.removeItem('checkoutData');
    }
  }, []);

  if (!checkoutData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Încărcare...</h2>
        </div>
      </div>
    );
  }

  const { owner, parkingId, price, hours, totalCost } = checkoutData;

  const mergeHours = (hours) => {
    const sortedHours = hours
      .map((hour) => {
        const [start, end] = hour.split("-").map((time) => parseInt(time.trim().split(":")[0]));
        return { start, end, original: hour };
      })
      .sort((a, b) => a.start < b.start);
  
    const mergedHours = [];
    let currentInterval = sortedHours[0];
  
    for (let i = 1; i < sortedHours.length; i++) {
      const nextInterval = sortedHours[i];
      
      if (nextInterval.start === currentInterval.end) {
        currentInterval.end = nextInterval.end;
      } else {
        mergedHours.push(currentInterval.original); 
        currentInterval = nextInterval; 
      }
    }
  
    mergedHours.push(currentInterval.original);
  
    return mergedHours;
  };
  
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Confirmă Comanda</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Parcare:</span>
            <span className="text-gray-800">{owner}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">ID Parcare:</span>
            <span className="text-gray-800">{parkingId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Ore selectate:</span>
            <span className="text-gray-800">{hours.join(", ")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Preț pe oră:</span>
            <span className="text-green-600">{price} RON</span>
          </div>
          <div className="flex justify-between text-xl font-semibold mt-4">
            <span className="text-gray-600">Total:</span>
            <span className="text-green-700">{totalCost} RON</span>
          </div>
        </div>

        {/* Buton pentru a finaliza comanda */}
        <div className="mt-6 text-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition">
            Finalizează Plata
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
