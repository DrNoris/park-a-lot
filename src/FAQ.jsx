import React from "react";
import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: `Cum garantează Park-a-Lot siguranța locului de parcare? `,
      answer: `Toți utilizatorii sunt verificați, iar rezervările sunt gestionate printr-un sistem securizat.`,
    },
    {
      question: `Cum pot verifica disponibilitatea unui loc?`,
      answer: `Vezi în aplicație locurile disponibile în timp real și rezervă imediat.`,
    },
    {
      question: `Ce se întâmplă dacă am nevoie urgentă de locul meu închiriat?`,
      answer: `Poți seta perioade în care locul tău este indisponibil sau să anulezi o rezervare cu notificare prealabilă.`,
    },
    {
      question: `Pot închiria un loc de parcare pentru mai multe zile?`,
      answer: `Da, poți alege să rezervi un loc pe ore, zile sau chiar săptămâni.`,
    },
    {
      question: `Ce se întâmplă dacă cineva nu respectă rezervarea?`,
      answer: `Avem un sistem de evaluări și penalizări pentru utilizatorii neserioși.`,
    },
    {
        question: `Există oferte sau abonamente pentru utilizatorii frecvenți?`,
        answer: `Da, vom introduce abonamente pentru cei care folosesc frecvent Park-a-Lot.`,
      },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-albastru">
      <div className="max-w-4xl mx-auto p-4 bg-albastru">
        <h1
          className="text-2xl font-bold 
                           mb-9 mt-4 text-alb
                           text-center"
        >
          FAQ
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} data-aos="fade-up" className="border-b-2 border-gray-300 p-4">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left font-black text-alb
                                       hover:text-gray-300 focus:outline-none"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-alb">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
