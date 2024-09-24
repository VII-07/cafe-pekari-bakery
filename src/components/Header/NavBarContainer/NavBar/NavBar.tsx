import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarComponent, UlListComponent, LiListComponent, StyledLink } from "./NavBar.styled";

type NAV_BAR_ELEMENT_TYPE = {
    title: string;
    path: string;
    active: boolean;
};

type NAV_BAR_ELEMENTS_TYPE = NAV_BAR_ELEMENT_TYPE[];

const NAV_BAR_ELEMENTS: NAV_BAR_ELEMENTS_TYPE = [
    { title: 'Головна', path: '/home', active: true },
    { title: 'Меню', path: '/menu', active: false },
    { title: 'Хто ми?', path: '/reservations', active: false },
    { title: 'Акції', path: '/blog', active: false },
    { title: 'Відгуки', path: '/contact', active: false }
];

const NavBar = () => {
    const location = useLocation(); // For Marko Використовується для перевірки поточного URL
    const [navItems, setNavItems] = useState(NAV_BAR_ELEMENTS);

    const handleNavClick = (path: string) => {
        const updatedNavItems = navItems.map((item) => ({
            ...item,
            active: item.path === path,
        }));
        setNavItems(updatedNavItems);
    };

    return (
        <NavBarComponent>
            <UlListComponent>
                {navItems.map((element, index) => (
                    <LiListComponent key={index}>
                        <StyledLink
                            to={element.path}
                            onClick={() => handleNavClick(element.path)}
                            isActive={element.path === location.pathname}
                        >
                            {element.title}
                        </StyledLink>
                    </LiListComponent>
                ))}
            </UlListComponent>
        </NavBarComponent>
    );
};

export default NavBar;
