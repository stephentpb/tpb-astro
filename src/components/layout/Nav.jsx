import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Our Programs', href: '/programs' },
    { title: 'Donate', href: '/donate' },
    { title: 'Third Place Books', href: 'https://thirdplacebooks.com/' },
  ];

  return (
    <nav className="bg-color-primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Navigation Bar */}
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/logo.png"
                alt="Third Place Books Literary Foundation"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Links (hidden on mobile) */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-stone-50 hover:text-stone-300 font-medium text-sm transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button (hidden on desktop) */}
          <button
            className="md:hidden text-stone-50 hover:text-stone-300 focus:outline-none p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden border-t border-stone-700 py-3">
            <ul className="flex flex-col space-y-3 px-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-stone-50 hover:text-stone-300 font-medium text-base py-1"
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}