import {React, useState} from 'react'
import { personOutline, mailOutline } from 'ionicons/icons'; // Import icons from ionicons

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:niv.ozer@yahoo.com?subject=Message%20from%20${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div  id="contact" className="flex flex-col justify-center p-10 items-center min-h-screen">
      <h1 className="text-5xl xs:text-center font-cinzel mb-4">
        keep in touch
      </h1>
      <p className="xs:text-base xs:w-full text-lg lg:text-xl font-serif text-gray-700 mb-8 flex-wrap">
        Whether it's questions regarding Profession ancient Rome Skiing or anything else, feel free to reach out.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl w-1/2 
      xs:w-screen xs:px-16">
        <label className="flex items-center text-amber-950 border border-amber-300 bg-white p-3 rounded-lg shadow-md">
          <input
            type="text"
            className="w-full text-lg focus:outline-none"
            placeholder="Your Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <ion-icon name="person-circle" size="large"></ion-icon>
        </label>
        <label className="flex items-center text-amber-950  border border-amber-300 bg-white p-3 rounded-lg shadow-md">
          <input
            type="email"
            className="w-full text-lg focus:outline-none"
            placeholder="Your Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <ion-icon name="mail" size="large"></ion-icon>
        </label>
        <textarea
          className="w-full h-32 border border-amber-300 bg-white p-3 rounded-lg shadow-md text-lg focus:outline-none"
          placeholder="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button
          className="bg-gold-gradient border-amber-300 text-white text-xl py-3 rounded-xl shadow-lg hover:shadow-inner font-cinzel"
          type="submit"
        >
          Send Offering
        </button>
      </form>
    </div>
  );
};

