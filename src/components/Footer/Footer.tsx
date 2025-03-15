const Footer = () => {
  return (
    <footer className="p-10 text-sm bg-darkGrey text-mediumGrey">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6 space-x-6 text-white">
          <a href="#" className="hover:text-gray-400" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Youtube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:text-left">
          <a href="#" className="hover:underline">
            Audio Description
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Gift Cards
          </a>
          <a href="#" className="hover:underline">
            Media Center
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Legal Notices
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>

        <div className="flex justify-center my-6">
          <button className="px-4 py-2 text-sm text-white border border-gray-500 rounded hover:bg-gray-700">
            Service Code
          </button>
        </div>

        <p className="text-xs text-center text-gray-500">
          © 1993-2025 Chute Boxe Itapema, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
