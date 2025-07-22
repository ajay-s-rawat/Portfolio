export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/ajay-s-rawat", label: "GitHub" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/ajay-rawat-83531a12a", label: "LinkedIn" },
    { icon: "fab fa-twitter", href: "https://twitter.com", label: "Twitter" },
    { icon: "fab fa-itch-io", href: "https://itch.io", label: "Itch.io" }
  ];

  return (
    <footer className="bg-dark-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gradient mb-4">Ajay Singh Rawat</h3>
          <p className="text-gray-300 mb-6">Senior Unity Developer</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                aria-label={link.label}
              >
                <i className={`${link.icon} text-xl`} />
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Ajay Singh Rawat. All rights reserved. | Built with passion for game development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
