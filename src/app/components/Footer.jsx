const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 sm:py-8 flex justify-center text-gray-400">
      <p className="text-sm">
        &copy; Deimos Karkee {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
