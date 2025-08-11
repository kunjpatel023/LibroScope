import React from "react";

export default function PricingPage() {
  const plans = [
    {
      title: "Free",
      subtitle: "Perfect for casual readers",
      price: "₹0",
      frequency: "/month",
      included: [
        "5 books per month",
        "Basic summaries",
        "Limited translations",
        "Community support",
        "Mobile app access",
      ],
      limitations: [
        "No AI chatbot",
        "Limited export options",
        "Basic recommendations",
      ],
      popular: false,
    },
    {
      title: "Standard",
      subtitle: "Great for regular readers",
      price: "₹99",
      frequency: "/month",
      included: [
        "25 books per month",
        "Advanced summaries",
        "Unlimited translations",
        "Priority support",
        "Export to PDF/DOCX",
        "Reading analytics",
        "Offline access",
      ],
      limitations: ["Limited AI chatbot queries"],
      popular: true,
    },
    {
      title: "Premium",
      subtitle: "Best for power readers",
      price: "₹199",
      frequency: "/month",
      included: [
        "Unlimited books",
        "Premium AI summaries",
        "Unlimited translations",
        "Priority support",
        "Advanced analytics",
        "Unlimited AI chatbot",
        "Custom recommendations",
        "Early access to features",
        "Team collaboration",
      ],
      limitations: [],
      popular: false,
    },
  ];

  return (
    <div className="bg-[#f5f1ea] min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Choose Your Reading Journey</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Unlock the power of AI-driven reading with plans designed for every
          type of reader
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-xl shadow-md p-8 flex flex-col justify-between border ${
              plan.popular ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <div>
              <h2 className="text-xl font-semibold">{plan.title}</h2>
              <p className="text-gray-500">{plan.subtitle}</p>

              <div className="flex items-end mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.frequency}</span>
              </div>

              {plan.popular && (
                <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full inline-block mt-3">
                  ★ Most Popular
                </div>
              )}

              <div className="mt-6">
                <h3 className="font-semibold mb-2">What's included:</h3>
                <ul className="space-y-2 text-gray-700">
                  {plan.included.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {plan.limitations.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Limitations:</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {plan.limitations.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              className={`mt-8 py-2 px-4 rounded-lg font-semibold ${
                plan.popular
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
