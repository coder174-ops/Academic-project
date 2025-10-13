import { useState } from 'react';
// // import { Logo } from '../assets/icons/image.png';
// // import { MenuIcon } from '../assets/icons/MenuIcon';
// // import { XIcon } from '../assets/icons/XIcon';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="z-50 bg-black flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur">
      <a href="#" className="text-white hidden md:flex items-center transition duration-500 text-2xl font-semibold">
        Dev <span className="text-[#06B6D4]">Cluster</span>
      </a>
      <div class="text-white hidden md:flex items-center gap-6 ml-7 border mx-2 border-slate-700 px-9 py-4 rounded-full text-1.5xl">
        <a href="#Home" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
            <span
                class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#06B6D4]">Home</span>
        </a>
        <a href="#About" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">About</span>
            <span
                class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#06B6D4]">About</span>
        </a>
        <a href="#Community" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">Community</span>
            <span
                class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#06B6D4]">Community</span>
        </a>
        <a href="#Team" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">Meet the Team</span>
            <span
                class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#06B6D4]">Meet the Team</span>
        </a>
    </div>

      <div className="hidden md:block space-x-3">
         <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300 "> 
          Get started
        </button>
        <button className="hover:bg-slate-300/20 transition px-6 py-2 border border-slate-400 rounded-md text-white">
          Login
        </button>
      </div>

      <button
        id="open-menu"
        className="md:hidden active:scale-90 transition"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <MenuIcon />
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-navLinks"
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
        <a href="#resources" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
        <a href="#stories" onClick={() => setIsMobileMenuOpen(false)}>Stories</a>
        <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
        <button
          id="close-menu"
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <XIcon />
        </button>
      </div>
    </nav>
  );
}

// Separate SVG components
// src/assets/icons/Logo.jsx
export const Logo = () => (
  <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Your SVG path data here */}
  </svg>
);

// src/assets/icons/MenuIcon.jsx
export const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu">
    <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>
  </svg>
);

// src/assets/icons/XIcon.jsx
export const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);


