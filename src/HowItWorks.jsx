import React from 'react'

function HowItWorks() {
  return (
    <div className="py-16 bg-alb">
        <div data-aos="fade-up" className="container w-3/4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Cum funcționează Park a Lot</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Căutare locuri de parcare</h3>
                <p>Căută locuri de parcare disponibile în Cluj-Napoca, în funcție de timpul și locul dorit.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Rezervă un loc</h3>
                <p>Rezervă un loc de parcare rapid și ușor, prin aplicație. Vei plăti doar pentru timpul pe care îl folosești.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Începe parcarea</h3>
                <p>După confirmarea rezervării, îți vei parca vehiculul în locul respectiv. La final, plătești direct prin aplicație.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Listează-ți locul în aplicație</h3>
                <p>Oferă locul tău de parcare în aplicație când ești plecat și câștigă bani pasiv</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks
