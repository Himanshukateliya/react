import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FunctionCompoDynamicSubMenu = () => {
    const [showBasic, setShowBasic] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.username); // Updated condition
    // const [isLoggedIn, setIsLoggedIn] = useState(cookies.username !== undefined);

    const navigate = useNavigate();
    const handleLogout = () => {
        removeCookie('username');
        removeCookie('id');
        console.log("Successfully logged out");
        setIsLoggedIn(false);
        navigate("/loginregistration")
    };

    // const name = cookies.get('username');

    // console.log("username", name);

    const menuItems = [
        {
            title: 'Home',
            url: `/`,
        },
        {
            title: 'about',
            url: `/about`,
        },
        {
            title: 'Services',
            url: '/services',
            submenu: [
                {
                    title: 'web design',
                    url: 'web-design',
                },
                {
                    title: 'web development',
                    url: 'web-dev',
                },
                {
                    title: 'SEO',
                    url: 'seo',
                },
            ],
        },
        {
            title: 'FetchAPI',
            url: `/fetchapi`,
        },
    ];

    const MenuData = menuItems.map((data, index) => {
        if (data.submenu != undefined) {
            var submenudata = data.submenu.map((submenu, index) => {
                return <MDBDropdownItem key={index} link>{submenu.title}</MDBDropdownItem>;
            });
        }
        if (data.submenu == null) {
            return (
                <MDBNavbarItem key={index}>
                    <Link className='nav-link' to={data.url}>
                        {data.title}
                    </Link>
                </MDBNavbarItem>
            );
        } else {
            return (
                <MDBNavbarItem key={index}>
                    <MDBDropdown>
                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                            {data.title}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>{submenudata}</MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarItem>
            );
        }
    });

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='ms-auto w-auto mb-2 mb-lg-0 '>
                            {MenuData}


                            {isLoggedIn ? (
                                <MDBNavbarItem>
                                    <button onClick={handleLogout} className='nav-link btn btn-primary text-light'>
                                        Logout
                                    </button>
                                </MDBNavbarItem>
                            ) : (
                                <MDBNavbarItem>
                                    <Link className='nav-link btn btn-primary text-light' to='/loginregistration'>
                                        Login
                                    </Link>
                                </MDBNavbarItem>
                            )}

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default FunctionCompoDynamicSubMenu;











// import React, { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBDropdown,
//     MDBDropdownToggle,
//     MDBDropdownMenu,
//     MDBDropdownItem,
//     MDBCollapse,
// } from 'mdb-react-ui-kit';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import CustomHook from '../Hooks/useCustomHook';

// const FunctionCompoDynamicSubMenu = () => {
//     const { handleChange, inp, errors } = CustomHook({ role: '2' }, {});
//     const [showBasic, setShowBasic] = useState(false);
//     const [cookies, setCookie, removeCookie] = useCookies([]);
//     // const navigate = useNavigate();
//     const [isLoggedIn, setIsLoggedIn] = useState(cookies.username !== undefined);
//     const [loade, setLoade] = useState(true);

//     useEffect(() => {

//     }, [loade]);


//     const handleLogout = () => {
//         removeCookie('username');
//         setLoade(false)
//         setIsLoggedIn(false);
//     };

//     const menuItems = [
//         {
//             title: 'Home',
//             url: `/`,
//         },
//         {
//             title: 'about',
//             url: `/about`,
//         },
//         {
//             title: 'Services',
//             url: '/services',
//             submenu: [
//                 {
//                     title: 'web design',
//                     url: 'web-design',
//                 },
//                 {
//                     title: 'web development',
//                     url: 'web-dev',
//                 },
//                 {
//                     title: 'SEO',
//                     url: 'seo',
//                 },
//             ],
//         },
//         {
//             title: 'FetchAPI',
//             url: `/fetchapi`,
//         },
//     ];

//     const MenuData = menuItems.map((data, index) => {
//         if (data.submenu != undefined) {
//             var submenudata = data.submenu.map((submenu, index) => {
//                 return <MDBDropdownItem key={index} link>{submenu.title}</MDBDropdownItem>;
//             });
//         }
//         if (data.submenu == null) {
//             return (
//                 <MDBNavbarItem key={index}>
//                     <Link className='nav-link' to={data.url}>
//                         {data.title}
//                     </Link>
//                 </MDBNavbarItem>
//             );
//         } else {
//             return (
//                 <MDBNavbarItem key={index}>
//                     <MDBDropdown>
//                         <MDBDropdownToggle tag='a' className='nav-link' role='button'>
//                             {data.title}
//                         </MDBDropdownToggle>
//                         <MDBDropdownMenu>{submenudata}</MDBDropdownMenu>
//                     </MDBDropdown>
//                 </MDBNavbarItem>
//             );
//         }
//     });

//     return (
//         <>
//             <MDBNavbar expand='lg' light bgColor='light'>
//                 <MDBContainer fluid>
//                     <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

//                     <MDBNavbarToggler
//                         aria-controls='navbarSupportedContent'
//                         aria-expanded='false'
//                         aria-label='Toggle navigation'
//                         onClick={() => setShowBasic(!showBasic)}
//                     >
//                         <MDBIcon icon='bars' fas />
//                     </MDBNavbarToggler>

//                     <MDBCollapse navbar show={showBasic}>
//                         <MDBNavbarNav className='ms-auto w-auto mb-2 mb-lg-0 '>
//                             {MenuData}
//                             {isLoggedIn ? (
//                                 <MDBNavbarItem>
//                                     <button onClick={handleLogout} className='nav-link btn btn-primary text-light'>
//                                         Logout
//                                     </button>
//                                 </MDBNavbarItem>
//                             ) : (
//                                 <MDBNavbarItem>
//                                     <Link className='nav-link btn btn-primary text-light' to='/loginregistration'>
//                                         Login
//                                     </Link>
//                                 </MDBNavbarItem>
//                             )}
//                         </MDBNavbarNav>
//                     </MDBCollapse>
//                 </MDBContainer>
//             </MDBNavbar>
//         </>
//     );
// };

// export default FunctionCompoDynamicSubMenu;

