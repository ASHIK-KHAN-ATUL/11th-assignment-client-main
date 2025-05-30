import React, { useState } from "react";

const BorrowingTipsFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const tips = [
    "Use the search bar to find books by title, author, or category.",
    "Check book availability before borrowing.",
    "Return books on time to avoid penalties.",
    "You can borrow up to 3 books at a time."
  ];

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click the “Register” button, fill in your details, and submit the form."
    },
    {
      question: "How many books can I borrow at once?",
      answer: "You can borrow up to 3 books at a time."
    },
    {
      question: "What happens if I don’t return a book on time?",
      answer: "You may lose borrowing privileges temporarily or incur a small fine."
    },
    {
      question: "How do I find books in a specific category?",
      answer: "Navigate to the 'Book Categories' section ."
    }
  ];

  return (
    <div className="pt-20 w-[90%] md:w-[80%] rounded-lg mx-auto ">

      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#6794fc]">
            Borrowing Tips & <span className="text-purple-600">FAQ</span>?
      </h2>

      <div className=" mb-20">
        <h3 className="text-2xl font-medium mb-8 border-l-4 border-[#6794fc] px-5">Borrowing Tips</h3>
        <ul className="list-disc pl-6 space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="text-[#6794fc] md:text-xl">{tip}</li>
          ))}
        </ul>
      </div>

      <div className="">
        <h3 className="text-2xl font-medium mb-8 border-l-4 border-[#6794fc] px-5">Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item mb-4 p-4  duration-500 border border-[#90e0ef] rounded-lg cursor-pointer ${openFAQ === index ? "" : "bg-transparent"}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h4 className="text-lg font-semibold ">{faq.question}</h4>
            </div>
            {openFAQ === index && <p className="faq-answer  mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>

    </div>
  );
};

export default BorrowingTipsFAQ;
