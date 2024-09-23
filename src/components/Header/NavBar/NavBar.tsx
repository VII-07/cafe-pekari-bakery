import { Link } from "react-router-dom";
import { NavBarComponent, UlListComponent, LiListComponent } from "./NavBar.style";

type NAV_BAR_ELEMENT_TYPE = {
    title: string;
    path: string;
};

type NAV_BAR_ELEMENTS_TYPE = NAV_BAR_ELEMENT_TYPE[];

const NAV_BAR_ELEMENTS: NAV_BAR_ELEMENTS_TYPE = [
    { title: 'Головна', path: '/home' },
    { title: 'Меню', path: '/menu' },
    { title: 'Хто ми?', path: '/reservations' },
    { title: 'Акції', path: '/blog' },
    { title: 'Відгуки', path: '/contact' }
];

const NavBar = () => {
    return ( 
        <NavBarComponent>
            <UlListComponent>
                {NAV_BAR_ELEMENTS.map((element, index) => (
                    <LiListComponent key={index}>
                        <Link to={element.path}>{element.title}</Link>
                    </LiListComponent>
                ))}
            </UlListComponent>
        </NavBarComponent>
    );
};

export default NavBar;
