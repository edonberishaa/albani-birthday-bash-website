
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-full py-12 text-center">
      <h1 
        className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 shiny-text transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      >
        Gëzuar Ditëlindjen Albani!
      </h1>
      <p 
        className={`text-xl md:text-2xl text-gray-300 transition-opacity duration-1000 delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      >
        Shumë vite të lumtura, shok i ngushtë!
      </p>
    </header>
  );
};

export default Header;
