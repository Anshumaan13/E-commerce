import React from "react";
function About() {
  return (
<div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
<h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
<p className="text-gray-700 text-lg leading-relaxed">
        At <strong>Cyber</strong>, we believe technology can change lives. Our mission is to provide you with the
        latest and greatest in smartphones, gadgets, and accessories – with a seamless
        shopping experience and unmatched customer service.
</p>
<div className="mt-8">
<h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
<p className="text-gray-600">
          We aim to be the most trusted and innovative e-commerce destination
          in electronics — offering curated, reliable products with transparent pricing.
</p>
</div>
<div className="mt-8">
<h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
<ul className="list-disc ml-5 text-gray-600 space-y-2">
<li>Fast & Secure Delivery</li>
<li>Easy Returns and Refunds</li>
<li>Trusted by 50,000+ customers</li>
<li>24/7 Customer Support</li>
</ul>
</div>
</div>
  );
}
export default About;