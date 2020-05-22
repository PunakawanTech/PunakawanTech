import { Component } from 'react';
import Link from 'next/link';
import { Moon, Sun } from './Icon';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.switchTheme = this.switchTheme.bind(this);

        this.state = {
            shadow: '',
            hidden: '',
            theme: 'theme-light',
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        if(localStorage) {
            const theme = localStorage.getItem('theme', theme) || 'theme-light';
        
            this.setState({
                theme,
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const scrollTop = window.scrollY || window.scrollTop || event.srcElement.body.scrollTop;

        if (scrollTop === 0) {
            this.setState({
                shadow: '',
            });
        } else {
            this.setState({
                shadow: 'shadow-md',
            });
        }
    }

    toggleNav() {
        const { hidden } = this.state;

        if (hidden === '') {
            this.setState({
                hidden: 'block-nav',
            });
        } else {
            this.setState({
                hidden: '',
            });
        }
    }

    switchTheme() {
        let { theme } = this.state;

        if(theme === 'theme-light') {
            theme = 'theme-dark';
        } else {
            theme = 'theme-light';
        }

        if(localStorage) {
            localStorage.setItem('theme', theme);
        }
        
        this.setState({
            theme,
        });
    }

    render() {
        const { children } = this.props;
        const { shadow, hidden, theme } = this.state;

        return (
            <div className={`antialiased ${theme} bg-secondary`} style={{minHeight: '100vh'}}>
                <nav
                    className={`transition duration-500 z-50 flex items-center justify-between flex-wrap p-2 mb-4 fixed w-full bg-default top-0 ${shadow}`}
                >
                    <div className="flex items-center flex-shrink-0 mr-6 text-default">
                        <span className="font-thin text-xl tracking-tight">
                            <span className="font-semibold text-primary">Punakawan</span>Tech
                        </span>
                    </div>
                    <div className="block md:hidden lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-primary border-blue-500 hover:text-default hover:border-gray-700"
                            onClick={this.toggleNav}
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`transition duration-500 w-full xs:hidden flex-grow md:flex lg:flex md:items-center lg:items-center md:w-auto lg:w-auto ${hidden}`}
                    >
                        <div className="text-sm md:ml-auto">
                            <Link href="/">
                                <a className="transition duration-500 block mt-4 md:inline-block lg:inline-block md:mt-0 lg:mt-0 text-default hover:text-primary mr-4">
                                    Home
                                </a>
                            </Link>
                            <Link href="/#services">
                                <a className="transition duration-500 block mt-4 md:inline-block lg:inline-block md:mt-0 lg:mt-0 text-default hover:text-primary mr-4">
                                    Services
                                </a>
                            </Link>
                            <Link href="/#about-us">
                                <a className="transition duration-500 block mt-4 md:inline-block lg:inline-block md:mt-0 lg:mt-0 text-default hover:text-primary mr-4">
                                    About Us
                                </a>
                            </Link>
                            <Link href="/showcase">
                                <a className="transition duration-500 block mt-4 md:inline-block lg:inline-block md:mt-0 lg:mt-0 text-default hover:text-primary mr-4">
                                    Showcase
                                </a>
                            </Link>
                            <Link href="/blog">
                                <a className="transition duration-500 block mt-4 md:inline-block lg:inline-block md:mt-0 lg:mt-0 text-default hover:text-primary mr-4">
                                    Blog
                                </a>
                            </Link>
                        </div>
                        <div className="items-center">
                            <a
                                href="https://github.com/PunakawanTech"
                                target="_blank"
                                rel="noopener"
                                className="transition duration-500 inline-block text-sm px-4 py-2 leading-none rounded text-default hover:text-primary hover:bg-white mt-4 md:mt-2 lg:mt-2"
                            >
                                <svg
                                    className="fill-current w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <title>GitHub</title>
                                    <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="container mx-auto px-4">
                    <div className="pt-20">{children}</div>

                    <div onClick={this.switchTheme} className="transition duration-500 bg-white border border-gray-600 rounded-full fixed cursor-pointer hover:border-transparent hover:shadow-lg p-3" style={{bottom: 20, right: 20}}>
                        {theme === 'theme-light' ? <Moon/> : <Sun/>}
                    </div>
                </div>
            </div>
        );
    }
}
