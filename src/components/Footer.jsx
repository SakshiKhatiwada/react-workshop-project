import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
