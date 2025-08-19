// import React from "react";

// export default function PricingPage() {
//   const plans = [
//     {
//       title: "Free",
//       subtitle: "Perfect for casual readers",
//       price: "₹0",
//       frequency: "/month",
//       included: [
//         "5 books per month",
//         "Basic summaries",
//         "Limited translations",
//         "Community support",
//         "Mobile app access",
//       ],
//       limitations: [
//         "No AI chatbot",
//         "Limited export options",
//         "Basic recommendations",
//       ],
//       popular: false,
//     },
//     {
//       title: "Standard",
//       subtitle: "Great for regular readers",
//       price: "₹99",
//       frequency: "/month",
//       included: [
//         "25 books per month",
//         "Advanced summaries",
//         "Unlimited translations",
//         "Priority support",
//         "Export to PDF/DOCX",
//         "Reading analytics",
//         "Offline access",
//       ],
//       limitations: ["Limited AI chatbot queries"],
//       popular: true,
//     },
//     {
//       title: "Premium",
//       subtitle: "Best for power readers",
//       price: "₹199",
//       frequency: "/month",
//       included: [
//         "Unlimited books",
//         "Premium AI summaries",
//         "Unlimited translations",
//         "Priority support",
//         "Advanced analytics",
//         "Unlimited AI chatbot",
//         "Custom recommendations",
//         "Early access to features",
//         "Team collaboration",
//       ],
//       limitations: [],
//       popular: false,
//     },
//   ];

//   return (
//     <div className="bg-[#f5f1ea] min-h-screen py-16 px-6 m-8 rounded-3xl">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-bold mb-4">Choose Your Reading Journey</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Unlock the power of AI-driven reading with plans designed for every
//           type of reader
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {plans.map((plan, idx) => (
//           <div
//             key={idx}
//             className={`bg-white rounded-xl shadow-md p-8 flex flex-col justify-between border ${
//               plan.popular ? "border-blue-500" : "border-gray-200"
//             }`}
//           >
//             <div>
//               <h2 className="text-xl font-semibold">{plan.title}</h2>
//               <p className="text-gray-500">{plan.subtitle}</p>

//               <div className="flex items-end mt-4">
//                 <span className="text-4xl font-bold">{plan.price}</span>
//                 <span className="text-gray-500 ml-1">{plan.frequency}</span>
//               </div>

//               {plan.popular && (
//                 <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full inline-block mt-3">
//                   ★ Most Popular
//                 </div>
//               )}

//               <div className="mt-6">
//                 <h3 className="font-semibold mb-2">What's included:</h3>
//                 <ul className="space-y-2 text-gray-700">
//                   {plan.included.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-green-500 mr-2">✓</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {plan.limitations.length > 0 && (
//                 <div className="mt-6">
//                   <h3 className="font-semibold mb-2">Limitations:</h3>
//                   <ul className="space-y-2 text-gray-400 text-sm">
//                     {plan.limitations.map((item, i) => (
//                       <li key={i}>• {item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             <button
//               className={`mt-8 py-2 px-4 rounded-lg font-semibold ${
//                 plan.popular
//                   ? "bg-blue-500 text-white hover:bg-blue-600"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               Choose Plan
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// import React from "react";

// export default function PricingPage() {
//   const plans = [
//     {
//       title: "Free",
//       subtitle: "Perfect for casual readers",
//       price: "₹0",
//       frequency: "/month",
//       included: [
//         "5 books per month",
//         "Basic summaries",
//         "Limited translations",
//         "Community support",
//         "Mobile app access",
//       ],
//       limitations: [
//         "No AI chatbot",
//         "Limited export options",
//         "Basic recommendations",
//       ],
//       popular: false,
//     },
//     {
//       title: "Standard",
//       subtitle: "Great for regular readers",
//       price: "₹99",
//       frequency: "/month",
//       included: [
//         "25 books per month",
//         "Advanced summaries",
//         "Unlimited translations",
//         "Priority support",
//         "Export to PDF/DOCX",
//         "Reading analytics",
//         "Offline access",
//       ],
//       limitations: ["Limited AI chatbot queries"],
//       popular: true,
//     },
//     {
//       title: "Premium",
//       subtitle: "Best for power readers",
//       price: "₹199",
//       frequency: "/month",
//       included: [
//         "Unlimited books",
//         "Premium AI summaries",
//         "Unlimited translations",
//         "Priority support",
//         "Advanced analytics",
//         "Unlimited AI chatbot",
//         "Custom recommendations",
//         "Early access to features",
//         "Team collaboration",
//       ],
//       limitations: [],
//       popular: false,
//     },
//   ];

//   return (
//     <div className="bg-[#f5f1ea] min-h-screen py-10 px-4 sm:px-6 lg:py-16 lg:px-8 m-4 sm:m-8 rounded-2xl">
//       {/* Header */}
//       <div className="text-center mb-10 sm:mb-12">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-3">
//           Choose Your Reading Journey
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
//           Unlock the power of AI-driven reading with plans designed for every type of reader
//         </p>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
//         {plans.map((plan, idx) => (
//           <div
//             key={idx}
//             className={`bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col justify-between border transition-transform hover:scale-[1.02] ${
//               plan.popular ? "border-blue-500" : "border-gray-200"
//             }`}
//           >
//             <div>
//               {/* Title */}
//               <h2 className="text-lg sm:text-xl font-semibold">{plan.title}</h2>
//               <p className="text-gray-500 text-sm sm:text-base">{plan.subtitle}</p>

//               {/* Price */}
//               <div className="flex items-end mt-4">
//                 <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
//                 <span className="text-gray-500 ml-1 text-sm sm:text-base">{plan.frequency}</span>
//               </div>

//               {/* Popular Badge */}
//               {plan.popular && (
//                 <div className="bg-blue-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full inline-block mt-3">
//                   ★ Most Popular
//                 </div>
//               )}

//               {/* Included Features */}
//               <div className="mt-6">
//                 <h3 className="font-semibold mb-2 text-sm sm:text-base">What's included:</h3>
//                 <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
//                   {plan.included.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-green-500 mr-2">✓</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Limitations */}
//               {plan.limitations.length > 0 && (
//                 <div className="mt-6">
//                   <h3 className="font-semibold mb-2 text-sm sm:text-base">Limitations:</h3>
//                   <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
//                     {plan.limitations.map((item, i) => (
//                       <li key={i}>• {item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Choose Button */}
//             <button
//               className={`mt-8 py-2 px-4 rounded-lg font-semibold w-full sm:w-auto ${
//                 plan.popular
//                   ? "bg-blue-500 text-white hover:bg-blue-600"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               Choose Plan
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// import React, { useState } from "react";

// export default function SubscriptionPage() {
//   const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly

//   const plans = [
//     {
//       title: "Free Explorer",
//       subtitle: "Start reading with essentials",
//       monthly: "₹0",
//       yearly: "₹0",
//       included: [
//         "5 books per month",
//         "Basic summaries",
//         "Limited translations",
//         "Bookmarks & completed books",
//       ],
//       popular: false,
//     },
//     {
//       title: "Smart Reader",
//       subtitle: "Perfect for regular readers",
//       monthly: "₹99",
//       yearly: "₹999", // yearly price (discounted ~2 months free)
//       included: [
//         "25 books per month",
//         "Advanced summaries",
//         "Unlimited translations",
//         "Book download for offline",
//       ],
//       popular: true,
//     },
//     {
//       title: "Pro Scholar",
//       subtitle: "Unlimited access & features",
//       monthly: "₹199",
//       yearly: "₹1999", // yearly price (discounted ~3 months free)
//       included: [
//         "Unlimited books",
//         "Premium summaries",
//         "Unlimited translations",
//         "Offline downloads",
//         "Priority support",
//       ],
//       popular: false,
//     },
//   ];

//   return (
//     <div className="bg-[#f8f6f1] min-h-screen py-10 px-4 sm:px-6 lg:py-16 lg:px-8 m-4 sm:m-8 rounded-2xl">
//       {/* Header */}
//       <div className="text-center mb-10 sm:mb-12">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//           Choose Your SmartShelf Plan
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
//           Pick a plan that matches your reading style. Switch between monthly and yearly billing.
//         </p>
//       </div>

//       {/* Billing Toggle */}
//       <div className="flex justify-center mb-8">
//         <div className="bg-white rounded-full shadow p-1 flex">
//           <button
//             onClick={() => setBillingCycle("monthly")}
//             className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition ${
//               billingCycle === "monthly"
//                 ? "bg-indigo-500 text-white"
//                 : "text-gray-600 hover:text-indigo-500"
//             }`}
//           >
//             Monthly
//           </button>
//           <button
//             onClick={() => setBillingCycle("yearly")}
//             className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition ${
//               billingCycle === "yearly"
//                 ? "bg-indigo-500 text-white"
//                 : "text-gray-600 hover:text-indigo-500"
//             }`}
//           >
//             Yearly
//           </button>
//         </div>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
//         {plans.map((plan, idx) => (
//           <div
//             key={idx}
//             className={`bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col justify-between border transition-transform hover:scale-[1.02] ${
//               plan.popular ? "border-purple-500" : "border-gray-200"
//             }`}
//           >
//             <div>
//               {/* Title */}
//               <h2 className="text-lg sm:text-xl font-semibold">{plan.title}</h2>
//               <p className="text-gray-500 text-sm sm:text-base">{plan.subtitle}</p>

//               {/* Price */}
//               <div className="flex items-end mt-4">
//                 <span className="text-3xl sm:text-4xl font-bold text-indigo-600">
//                   {billingCycle === "monthly" ? plan.monthly : plan.yearly}
//                 </span>
//                 <span className="text-gray-500 ml-1 text-sm sm:text-base">
//                   {billingCycle === "monthly" ? "/month" : "/year"}
//                 </span>
//               </div>

//               {/* Popular Badge */}
//               {plan.popular && (
//                 <div className="bg-purple-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full inline-block mt-3">
//                   ★ Most Popular
//                 </div>
//               )}

//               {/* Included Features */}
//               <div className="mt-6">
//                 <h3 className="font-semibold mb-2 text-sm sm:text-base">What’s included:</h3>
//                 <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
//                   {plan.included.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-green-500 mr-2">✓</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Choose Button */}
//             <button
//               className={`mt-8 py-2 px-4 rounded-lg font-semibold w-full sm:w-auto ${
//                 plan.popular
//                   ? "bg-purple-500 text-white hover:bg-purple-600"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               Choose Plan
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { useLocation } from "react-router-dom";

// const stripePromise = loadStripe("pk_test_xxx"); // placeholder; in India invite-only so can remain dummy

// export default function SubscriptionPage() {
//   const [billingCycle, setBillingCycle] = useState("monthly");
//   const location = useLocation();

//   useEffect(() => {
//     if (location.search.includes("success=true")) {
//       alert("✅ Payment successful! Subscription activated.");
//     }
//     if (location.search.includes("canceled=true")) {
//       alert("❌ Payment canceled.");
//     }
//   }, [location]);

//   const plans = [
//     {
//       title: "Free",
//       subtitle: "For casual readers",
//       monthly: "₹0",
//       yearly: "₹0",
//       features: ["5 books per month", "Basic summaries", "Limited translations"],
//     },
//     {
//       title: "Standard",
//       subtitle: "For regular readers",
//       monthly: "₹99",
//       yearly: "₹999",
//       features: ["25 books per month", "Generate summaries", "Unlimited translations"],
//       popular: true,
//     },
//     {
//       title: "Premium",
//       subtitle: "For power readers",
//       monthly: "₹199",
//       yearly: "₹1999",
//       features: ["Unlimited books", "Premium summaries", "Unlimited translations", "Offline downloads"],
//     },
//   ];

//   const handleCheckout = async (plan) => {
//     const stripe = await stripePromise;
//     const price = billingCycle === "monthly"
//       ? plan.monthly.replace("₹", "")
//       : plan.yearly.replace("₹", "");
      
//     // Mock checkout: redirect with success for demo
//     window.location.href = `/subscription?success=true`;
//   };

//   return (
//     <div className="bg-[#f5f1ea] min-h-screen py-10 px-4 sm:px-6 m-4 sm:m-8 rounded-2xl">
//       <div className="text-center mb-10">
//         <h1 className="text-2xl sm:text-3xl font-bold">SmartShelf Plans</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">Choose convenience for your reading journey.</p>
//       </div>

//       <div className="flex justify-center mb-8">
//         <div className="bg-gray-200 rounded-lg p-1 flex">
//           <button
//             onClick={() => setBillingCycle("monthly")}
//             className={`px-4 py-2 rounded-lg ${billingCycle === "monthly" ? "bg-purple-500 text-white" : ""}`}
//           >
//             Monthly
//           </button>
//           <button
//             onClick={() => setBillingCycle("yearly")}
//             className={`px-4 py-2 rounded-lg ${billingCycle === "yearly" ? "bg-purple-500 text-white" : ""}`}
//           >
//             Yearly
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {plans.map((plan, idx) => (
//           <div
//             key={idx}
//             className={`bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border ${plan.popular ? "border-purple-500" : "border-gray-200"}`}
//           >
//             <div>
//               <h2 className="text-lg font-semibold">{plan.title}</h2>
//               <p className="text-gray-500 text-sm">{plan.subtitle}</p>
//               <div className="mt-4 flex items-end">
//                 <span className="text-3xl font-bold">
//                   {billingCycle === "monthly" ? plan.monthly : plan.yearly}
//                 </span>
//                 <span className="text-gray-500 ml-1 text-sm">
//                   {billingCycle === "monthly" ? "/month" : "/year"}
//                 </span>
//               </div>
//               {plan.popular && (
//                 <div className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full inline-block mt-2">
//                   ★ Most Popular
//                 </div>
//               )}
//               <ul className="mt-6 space-y-2 text-gray-700 text-sm">
//                 {plan.features.map((item, i) => (
//                   <li key={i}>✓ {item}</li>
//                 ))}
//               </ul>
//             </div>
//             {plan.title !== "Free" && (
//               <button
//                 onClick={() => handleCheckout(plan)}
//                 className="mt-6 py-2 px-4 rounded-lg font-semibold w-full bg-purple-500 text-white hover:bg-purple-600"
//               >
//                 Choose Plan
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { useLocation } from "react-router-dom";

// const stripePromise = loadStripe("pk_test_51RxT0fA4hA42Y2fpUCPQJN2ilx8xl5SgDm41h07jYNokxmgFUx03wSVKqCKaeGvG1AmGhlu19Le1V7ptKq377FOX00vmGtarqp"); // replace with your publishable key

// export default function SubscriptionPage() {
//   const [billingCycle, setBillingCycle] = useState("monthly");
//   const location = useLocation();

//   useEffect(() => {
//     if (location.search.includes("success=true")) {
//       alert("✅ Payment successful! Subscription activated.");
//     }
//     if (location.search.includes("canceled=true")) {
//       alert("❌ Payment canceled.");
//     }
//   }, [location]);

//   const plans = [
//     {
//       title: "Free",
//       subtitle: "For casual readers",
//       monthly: "₹0",
//       yearly: "₹0",
//       features: ["5 books per month", "Basic summaries", "Limited translations"],
//     },
//     {
//       title: "Standard",
//       subtitle: "For regular readers",
//       monthly: "₹99",
//       yearly: "₹999",
//       features: ["25 books per month", "Generate summaries", "Unlimited translations"],
//       popular: true,
//     },
//     {
//       title: "Premium",
//       subtitle: "For power readers",
//       monthly: "₹199",
//       yearly: "₹1999",
//       features: [
//         "Unlimited books",
//         "Premium summaries",
//         "Unlimited translations",
//         "Future AI features",
//       ],
//     },
//   ];

//   const handleCheckout = async (plan) => {
//     const stripe = await stripePromise;
//     const price = billingCycle === "monthly" ? plan.monthly.replace("₹", "") : plan.yearly.replace("₹", "");
//     const res = await fetch(
//       `http://127.0.0.1:8000/api/create-checkout-session/?plan_name=${plan.title}&price=${price}`
//     );
//     const session = await res.json();
//     if (session.id) {
//       await stripe.redirectToCheckout({ sessionId: session.id });
//     } else {
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="bg-[#f5f1ea] min-h-screen py-10 px-4 sm:px-6 m-4 sm:m-8 rounded-2xl">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-2xl sm:text-3xl font-bold">SmartShelf Plans</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Pick the plan that fits your reading journey
//         </p>
//       </div>

//       {/* Billing Toggle */}
//       <div className="flex justify-center mb-8">
//         <div className="bg-gray-200 rounded-lg p-1 flex">
//           <button
//             onClick={() => setBillingCycle("monthly")}
//             className={`px-4 py-2 rounded-lg ${
//               billingCycle === "monthly" ? "bg-purple-500 text-white" : ""
//             }`}
//           >
//             Monthly
//           </button>
//           <button
//             onClick={() => setBillingCycle("yearly")}
//             className={`px-4 py-2 rounded-lg ${
//               billingCycle === "yearly" ? "bg-purple-500 text-white" : ""
//             }`}
//           >
//             Yearly
//           </button>
//         </div>
//       </div>

//       {/* Plans */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {plans.map((plan, idx) => (
//           <div
//             key={idx}
//             className={`bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border ${
//               plan.popular ? "border-purple-500" : "border-gray-200"
//             }`}
//           >
//             <div>
//               <h2 className="text-lg font-semibold">{plan.title}</h2>
//               <p className="text-gray-500 text-sm">{plan.subtitle}</p>
//               <div className="mt-4 flex items-end">
//                 <span className="text-3xl font-bold">
//                   {billingCycle === "monthly" ? plan.monthly : plan.yearly}
//                 </span>
//                 <span className="text-gray-500 ml-1 text-sm">
//                   {billingCycle === "monthly" ? "/month" : "/year"}
//                 </span>
//               </div>
//               {plan.popular && (
//                 <div className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full inline-block mt-2">
//                   ★ Most Popular
//                 </div>
//               )}
//               <ul className="mt-6 space-y-2 text-gray-700 text-sm">
//                 {plan.features.map((item, i) => (
//                   <li key={i}>✓ {item}</li>
//                 ))}
//               </ul>
//             </div>
//             {plan.title !== "Free" && (
//               <button
//                 onClick={() => handleCheckout(plan)}
//                 className="mt-6 py-2 px-4 rounded-lg font-semibold w-full bg-purple-500 text-white hover:bg-purple-600"
//               >
//                 Choose Plan
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// const stripePromise = loadStripe("pk_test_51RxT0fA4hA42Y2fpUCPQJN2ilx8xl5SgDm41h07jYNokxmgFUx03wSVKqCKaeGvG1AmGhlu19Le1V7ptKq377FOX00vmGtarqp"); // replace with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes("success=true")) {
      alert("✅ Payment successful! Subscription activated.");
    }
    if (location.search.includes("canceled=true")) {
      alert("❌ Payment canceled.");
    }
  }, [location]);

  const plans = [
    {
      title: "Free",
      subtitle: "For casual readers",
      monthly: "₹0",
      yearly: "₹0",
      features: ["5 books per month", "Basic summaries", "Limited translations"],
    },
    {
      title: "Standard",
      subtitle: "For regular readers",
      monthly: "₹99",
      yearly: "₹999",
      features: ["25 books per month", "Generate summaries", "Unlimited translations"],
      popular: true,
    },
    {
      title: "Premium",
      subtitle: "For power readers",
      monthly: "₹199",
      yearly: "₹1999",
      features: [
        "Unlimited books",
        "Premium summaries",
        "Unlimited translations",
        "Future AI features",
      ],
    },
  ];

  const handleCheckout = async (plan) => {
    const stripe = await stripePromise;
    const price =
      billingCycle === "monthly"
        ? plan.monthly.replace("₹", "")
        : plan.yearly.replace("₹", "");
    const res = await fetch(
      `http://127.0.0.1:8000/api/create-checkout-session/?plan_name=${plan.title}&price=${price}`
    );
    const session = await res.json();
    if (session.id) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-[#f0efe9] text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Subscription <span className="text-blue-600 dark:text-blue-400">Plans</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg">
          Choose the plan that best fits your reading journey. Unlock access to AI-powered summaries,
          translations, and interactive reading with SmartShelf eLibrary.
        </p>
      </section>

      {/* Toggle Section */}
      <section className="py-10 px-6 dark:bg-gray-900">
        <div className="flex justify-center mb-12">
          <div className="flex bg-white dark:bg-gray-800 rounded-full p-1">
            <button 
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "text-black text-bold dark:text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === "yearly"
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "text-black text-bold dark:text-gray-300"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md text-center border ${
                plan.popular ? "border-blue-600" : "border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600">{plan.subtitle}</p>
              <p className="text-lg font-bold mb-4 mt-2">
                {billingCycle === "monthly" ? plan.monthly : plan.yearly}
                <span className="ml-1 text-sm text-gray-500">
                  {billingCycle === "monthly" ? "/month" : "/year"}
                </span>
              </p>
              {plan.popular && (
                <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                  ★ Most Popular
                </div>
              )}
              <ul className="text-sm mb-6 space-y-2">
                {plan.features.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
              {plan.title !== "Free" ? (
                <button
                  onClick={() => handleCheckout(plan)}
                  className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition w-full"
                >
                  Choose Plan
                </button>
              ) : (
                <button
                  disabled
                  className="px-6 py-2 rounded-xl bg-gray-400 text-white font-semibold w-full cursor-not-allowed"
                >
                  Current Plan
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
