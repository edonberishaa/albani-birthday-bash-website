
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 py-6 text-center border-t border-albani-red">
      <p className="text-gray-400 text-sm">
        © {currentYear} | Me ♥️ për Albanin
      </p>
    </footer>
  );
};

export default Footer;
