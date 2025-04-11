
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-8 py-4 text-center">
      <p className="text-gray-400 text-sm">
        © {currentYear} | Me ♥️ për Albanin
      </p>
    </footer>
  );
};

export default Footer;
