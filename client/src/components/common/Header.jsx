import React, { useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItemStyles = "px-2 py-2 md:py-1 capitalize text-center";
  const activeMenuStyles = "bg-white text-surface-900 md:rounded-md";

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-10 bg-primary-400">
      <Container>
        <header className="py-6 text-white">
          <nav className="flex items-center justify-between">
            <Link
              to="/home"
              className="flex items-center gap-2 text-2xl font-bold uppercase tracking-tight"
            >
              <img src="images/logo.svg" alt="" className="w-8" />
              <span>S-Parlour</span>
            </Link>

            {/* Hamburger Icon for Mobile */}
            <button
              className="z-10 grid h-[1.7rem] w-[1.7rem] place-items-center text-[1.6rem] text-white md:hidden"
              onClick={toggleMenu}
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>

            <div
              className={`${menuOpen ? "translate-x-0" : "max-md:translate-x-full"} transition-transform duration-300 max-md:fixed max-md:bottom-0 max-md:right-0 max-md:top-0 max-md:w-[min(320px,90%)] max-md:bg-primary-400 max-md:pt-20`}
            >
              <div className="flex flex-col text-lg font-bold md:flex-row md:gap-8">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? activeMenuStyles + " " + menuItemStyles
                      : menuItemStyles
                  }
                  to="/home"
                  onClick={handleNavClick} // Close menu on click
                >
                  home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? activeMenuStyles + " " + menuItemStyles
                      : menuItemStyles
                  }
                  to="/about"
                  onClick={handleNavClick} // Close menu on click
                >
                  about
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? activeMenuStyles + " " + menuItemStyles
                      : menuItemStyles
                  }
                  to="/services"
                  onClick={handleNavClick} // Close menu on click
                >
                  services
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? activeMenuStyles + " " + menuItemStyles
                      : menuItemStyles
                  }
                  to="/booking"
                  onClick={handleNavClick} // Close menu on click
                >
                  booking
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? activeMenuStyles + " " + menuItemStyles
                      : menuItemStyles
                  }
                  to="/contact"
                  onClick={handleNavClick} // Close menu on click
                >
                  contact
                </NavLink>
              </div>
            </div>
          </nav>
        </header>
      </Container>
    </div>
  );
}
