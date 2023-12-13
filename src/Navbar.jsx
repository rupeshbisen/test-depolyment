import Logo from './assets/react.svg'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
    // eslint-disable-next-line react/prop-types
    const { navClick, onNaveClick } = props;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <nav className={`${isScrolled ? 'bg-white shadow-lg ' : 'bg-transparent '} transition-all shadow-slate-500/50 z-50  w-screen`}>
            <div id="progress"></div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src={Logo} className={`h-10 ${isScrolled ? 'brightness-50' : ''}`} alt="Logo" />
                </a>

                <button data-collapse-toggle="navbar-user" type="button"
                    onClick={(e) => { e.preventDefault(); onNaveClick() }}
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden ${isScrolled ? 'brightness-50' : ''}`}
                    aria-controls="navbar-user" aria-expanded="false">
                    {!navClick &&
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    }
                    {navClick &&
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                </button>

                <div className={`items-center justify-between w-full md:flex md:w-auto ${navClick ? '' : 'hidden'}`} id="navbar-user">
                    <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 bg-white shadow-lg shadow-slate-500/50 rounded-lg md:flex-row md:space-x-8 md:bg-transparent md:shadow-none  md:mt-0 md:border-0 `}>

                        <li>
                            <NavLink to={'/'}
                                onClick={() => { onNaveClick() }}
                                className="block py-2 pl-3 pr-4 rounded hover:shadow-2xl hover:shadow-lime-600 hover:text-lime-600 underline-offset-4"
                                style={({ isActive }) => ({
                                    textDecoration: isActive ? 'underline' : ''
                                })}>
                                {'Home'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}
                                onClick={() => { onNaveClick() }}
                                className="block py-2 pl-3 pr-4 rounded hover:shadow-2xl hover:shadow-lime-600 hover:text-lime-600 underline-offset-4"
                                style={({ isActive }) => ({
                                    textDecoration: isActive ? 'underline' : ''
                                })}>
                                {'About'}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
