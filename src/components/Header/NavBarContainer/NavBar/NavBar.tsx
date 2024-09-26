import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Іконки для меню
import {
  NavBarComponent,
  UlListComponent,
  LiListComponent,
  StyledLink,
  MobileMenuIcon,
} from "./NavBar.styled";

type NAV_BAR_ELEMENT_TYPE = {
  title: string;
  path: string;
  active: boolean;
};

type NAV_BAR_ELEMENTS_TYPE = NAV_BAR_ELEMENT_TYPE[];

const NAV_BAR_ELEMENTS: NAV_BAR_ELEMENTS_TYPE = [
  { title: "Головна", path: "/home", active: true },
  { title: "Профіль користувача", path: "/my-profile", active: false },
  { title: "Меню", path: "/menu", active: false },
  { title: "Хто ми?", path: "/reservations", active: false },
  { title: "Акції", path: "/blog", active: false },
  { title: "Відгуки", path: "/contact", active: false },
];

const NavBar = () => {
  const location = useLocation(); // Використовується для перевірки поточного URL
  const [navItems, setNavItems] = useState(NAV_BAR_ELEMENTS);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Стан для сендвіч-меню

  const handleNavClick = (path: string) => {
    const updatedNavItems = navItems.map((item) => ({
      ...item,
      active: item.path === path,
    }));
    setNavItems(updatedNavItems);
    setIsMenuOpen(false); // Закрити меню після кліку
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavBarComponent>
      <MobileMenuIcon onClick={toggleMenu} isOpen={isMenuOpen}>
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}{" "}
        {/* Іконка меню */}
      </MobileMenuIcon>

      <UlListComponent isOpen={isMenuOpen}>
        {navItems.map((element, index) =>
          !isMenuOpen && element.path === "/my-profile" ? null : (
            <LiListComponent key={index}>
              <StyledLink
                to={element.path}
                onClick={() => handleNavClick(element.path)}
                isActive={element.path === location.pathname}
              >
                {element.title}
              </StyledLink>
            </LiListComponent>
          )
        )}
      </UlListComponent>
    </NavBarComponent>
  );
};

export default NavBar;
