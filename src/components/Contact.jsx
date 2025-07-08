import React, { useState } from "react";
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };
  return (
<div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
<h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
<form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
<div>
<label className="block text-gray-700 font-semibold mb-1">Name</label>
<input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
</div>
<div>
<label className="block text-gray-700 font-semibold mb-1">Email</label>
<input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
</div>
<div>
<label className="block text-gray-700 font-semibold mb-1">Message</label>
<textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
></textarea>
</div>
<button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
>
          Send Message
</button>
</form>
</div>
  );
}
export default Contact;