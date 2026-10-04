// components/Header.tsx

"use client";

import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "SHOP", href: "/shop" },
    { name: "COLLECTIONS", href: "/collections" },
    { name: "ABOUT", href: "/about" },
    { name: "JOURNAL", href: "/journal" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#050607] text-white">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 font-serif text-[26px] font-medium tracking-[0.32em]"
        >
          VLORÉ
        </Link>

        {/* Navigation */}
        <nav className="ml-auto hidden h-full items-center gap-10 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex h-full items-center text-[11px]
                font-semibold tracking-[0.14em] text-white/70
                transition-colors duration-300 hover:text-white
                ${index === 0 ? "text-white" : ""}
              `}
            >
              {item.name}

              {/* Active underline */}
              {index === 0 && (
                <span className="absolute bottom-[16px] left-0 h-[1px] w-full bg-[#b58b5e]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="ml-12 flex items-center gap-6">
          <button
            aria-label="Search"
            className="text-white/70 transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>

          <button
            aria-label="Account"
            className="hidden text-white/70 transition hover:text-white sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            fill="#666666"                      
            >
              <path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z" />
            </svg>
          </button>

          <button
            aria-label="Shopping bag"
            className="text-white/70 transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#666666"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
