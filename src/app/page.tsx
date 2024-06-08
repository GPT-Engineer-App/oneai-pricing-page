"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">OneAI</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">One API for Multiple AI Providers</h1>
          <p className="text-lg mb-8">Seamlessly integrate with the best AI models using OneAI.</p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded">Get Started</button>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="flex flex-wrap justify-center">
            {/* Free Plan */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Free</h3>
                <p className="text-2xl font-bold mb-4">$0/month</p>
                <ul className="mb-6">
                  <li className="flex items-center justify-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" /> Basic Features
                  </li>
                  <li className="flex items-center justify-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" /> Limited API Calls
                  </li>
                </ul>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded">Sign Up</button>
              </div>
            </div>
            {/* Pro Plan */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Pro</h3>
                <p className="text-2xl font-bold mb-4">$49/month</p>
                <ul className="mb-6">
                  <li className="flex items-center justify-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" /> All Free Features
                  </li>
                  <li className="flex items-center justify-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" /> Higher API Limits
                  </li>
                  <li className="flex items-center justify-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" /> Priority Support
                  </li>
                </ul>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded">Get Started</button>
              </div>
            </div>
            {/* Enterprise Plan */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Enterprise</h3>
                <p className="text-2xl font-bold mb-4">Contact Us</p>
                <ul className="mb-6">
                  <li className="flex items-center justify-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" /> All Pro Features
                  </li>
                  <li className="flex items-center justify-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" /> Custom API Limits
                  </li>
                  <li className="flex items-center justify-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" /> Dedicated Support
                  </li>
                </ul>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose OneAI?</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="text-center">
                <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
                <p>Integrate with multiple AI providers effortlessly.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="text-center">
                <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                <p>Scale your AI capabilities as your business grows.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="text-center">
                <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
                <p>Get the best value for your investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is OneAI?",
                answer: "OneAI is an API provider that allows you to integrate with multiple AI providers using a single API.",
              },
              {
                question: "How does the pricing work?",
                answer: "We offer different pricing tiers to suit your needs, including a Free plan, Pro plan, and Enterprise plan.",
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can upgrade or downgrade your plan at any time.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className="w-full text-left font-semibold text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                </button>
                {faqOpen === index && <p className="mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Home</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Features</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Contact</a>
          </div>
          <div className="mb-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">GitHub</a>
          </div>
          <div>&copy; 2023 OneAI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;