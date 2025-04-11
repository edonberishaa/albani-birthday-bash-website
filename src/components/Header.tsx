
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-full py-8 text-center">
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 shiny-text transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      >
        Gëzuar Ditëlindjen Albani!
      </h1>
      <p 
        className={`text-lg md:text-xl text-gray-300 transition-opacity duration-1000 delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      >
        Shumë vite të lumtura, shok i ngushtë!
      </p>
    </header>
  );
};

export default Header;
