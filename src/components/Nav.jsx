import { useState } from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: 'Browse', href: '/browse' },
    { title: 'Events', href: '/events' },
    { title: 'Subscription Box', href: '/signature-reads' },
    { title: 'Gift Cards', href: '/gift-cards' },
    { title: 'Used Books', href: '/used-books' },
    { title: 'Books to Students Fund', href: '/books-students-fund' },
    { title: 'About', href: '/about' },
  ];

  const storeLocations = [
    { name: 'Lake Forest Park', href: '/locations/lake-forest-park' },
    { name: 'Ravenna', href: '/locations/ravenna' },
    { name: 'Seward Park', href: '/locations/seward-park' },
  ];

  const iconLinks = [
    { icon: <FaSearch />, href: '/search', label: 'Search' },
    { icon: <FaUser />, href: '/login', label: 'Login' },
    { icon: <FaHeart />, href: '/wishlist', label: 'Wishlist' },
    { icon: <FaShoppingCart />, href: '/cart', label: 'Cart' },
  ];

  return (
    <nav className="bg-stone-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Top row: logo left, stores + icons right --- */}
        <div className="hidden md:flex justify-between items-center h-12 border-b border-gray-200">
          <div className="text-2xl font-bold text-stone-50">
            <a href="/">Third Place Books</a>
          </div>

          <div className="flex items-center space-x-6">
            {/* Store locations */}
            <ul className="flex space-x-6">
              {storeLocations.map((store) => (
                <li key={store.href}>
                  <a
                    href={store.href}
                    className="text-stone-50 hover:text-stone-300 font-medium text-sm"
                  >
                    {store.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Icon links */}
            <ul className="flex space-x-4">
              {iconLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-stone-50 hover:text-stone-300"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom row: main nav links --- */}
        <div className="flex h-16 items-center px-0 md:px-0">
{/* Mobile: top row */}
<div className="flex justify-between w-full md:hidden px-4 items-center">
  {/* Logo */}
  <div className="text-2xl font-bold text-stone-50">
    <a href="/">Third Place Books</a>
  </div>

  {/* Icon links (to the left of hamburger) */}
  <div className="flex items-center space-x-4">
    {iconLinks.map(item => (
      <a
        key={item.href}
        href={item.href}
        className="text-stone-50 hover:text-stone-300"
        aria-label={item.label}
      >
        {item.icon}
      </a>
    ))}

    {/* Hamburger button */}
    <button
      className="text-stone-50 hover:text-stone-300 focus:outline-none"
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
</div>


          {/* Desktop nav links (right-justified with spacing) */}
          <ul className="hidden md:flex w-full justify-end space-x-6">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-stone-50 hover:text-stone-300 font-medium"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="flex flex-col space-y-2 mt-2 md:hidden pb-4 px-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-stone-50 hover:text-stone-300 font-medium"
                >
                  {link.title}
                </a>
              </li>
            ))}
            {storeLocations.map(store => (
              <li key={store.href}>
                <a
                  href={store.href}
                  className="block text-stone-50 hover:text-stone-300 font-medium text-sm"
                >
                  {store.name}
                </a>
              </li>
            ))}
          </ul>
        )}

      </div>
    </nav>
  );
}
