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
      features: [
        "5 books per month",
        "Basic summaries",
        "Limited translations",
      ],
    },
    {
      title: "Standard",
      subtitle: "For regular readers",
      monthly: "₹99",
      yearly: "₹999",
      features: [
        "25 books per month",
        "Generate summaries",
        "Unlimited translations",
      ],
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
      <section className="text-center py-10 pb-5 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Subscription{" "}
          <span className="text-blue-600 dark:text-blue-400">Plans</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg">
          Choose the plan that best fits your reading journey. Unlock access to
          AI-powered summaries, translations, and interactive reading with
          LibroScope eLibrary.
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
              className={`p-8 bg-gray-50 dark:bg-gray-800 rounded-[50px] shadow-md text-center border ${
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
                  className="px-6 py-2 rounded-[50px] bg-blue-600 hover:bg-blue-700 text-white font-semibold transition w-full"
                >
                  Choose Plan
                </button>
              ) : (
                <button
                  disabled
                  className="px-6 py-2 rounded-[50px] bg-gray-400 text-white font-semibold w-full cursor-not-allowed"
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
