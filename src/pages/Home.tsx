import React from 'react';
import Navbar from '../components/Navbar';

const heroStyle = "bg-gradient-to-br from-[#1E88E5] via-[#D81B60] to-[#F5F7FA] text-white py-20 px-8 text-center";
const titleStyle = "text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg";
const subtitleStyle = "text-xl font-medium mb-8 max-w-2xl mx-auto";
const buttonStyle = "bg-white text-[#1E88E5] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#F5F7FA] transition";

const Home: React.FC = () => (
  <>
    <Navbar />
    <section className={heroStyle}>
      <h1 className={titleStyle}>Forge the Future of AI</h1>
      <p className={subtitleStyle}>
        Build, automate, and monetize intelligent agents—without writing a single line of code.
      </p>
      <a href="/dashboard">
        <button className={buttonStyle}>Launch Studio</button>
      </a>
    </section>
  </>
);

export default Home;
