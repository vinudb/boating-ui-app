import React from 'react';

const Header = () => (
    <header className="header">
        <div className="section">
            <div className="wrapperHeader">
                <a className="logo" href="/" title="" ><img src="/zizoo-logo.svg" alt="zizoo-logo" title="Zizoo Logo"></img></a>
                <div className="tagline">The leading global boat rental platform</div>
                <div className="phone">
                    <span className="working-hours">Mon-Sun: 9-9pm CET</span>
                    <a aria-label="phone-number" className="phone-number" href="tel:+44 12 3456 7890">
                        <i className="fa fa-phone"></i>
                        +44 12 3456 7890
          </a>
                </div>
            </div>
        </div>
        <div className="section menu">
            <div className="wrapperHeader">
                <div className="header-left">
                    <ul className="nav-list">
                        <li className="item">Top Destinations</li>
                        <li className="item">Boats</li>
                        <li className="item">Deals</li>
                        <li className="item">Luxury</li>
                        <li className="item">About Zizoo</li>
                    </ul>
                </div>

                <div className="header-right">
                    <div className="wishlist"><i className="fa fa-heart-o"></i></div>
                    <div className="user-menu">
                        <a className="user-menu-register" href="/">Sign Up</a>
                        <a className="user-menu-register" href="/">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Header;