export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-github", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-itch-io", href: "#" }
  ];

  return (
    <footer className="bg-dark-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gradient mb-4">Alex Chen</h3>
          <p className="text-gray-300 mb-6">Game Developer & Unity Expert</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                <i className={`${link.icon} text-xl`} />
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Alex Chen. All rights reserved. | Built with passion for game development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
