import { useState, useEffect } from "react";
import "./Header.css"

import IconMenu from "../assets/icon-menu.svg"
import Logo from "../assets/K28VKvG.png"
import IconShoppingBag from "../assets/icon-shoppingbag.svg"
import IconBusca from "../assets/icon-busca.svg"

export function Header() {

    const [mobile, setMobile] = useState(() => window.innerWidth);
    const [showSearch, setShowSearch] = useState(false); // novo estado

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        // Limpar o evento listener quando o componente é desmontado
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    const handleSearchClick = () => {
        setShowSearch(!showSearch); // toggle the visibility of search div
    };

    return (
        <>
            <div className="header">
                <div className="header-top">
                    <span>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</span>
                </div>
                {mobile <= 1100 ? (
                    <>
                        <div className="full-header">
                            <div className="menu">
                                <img src={IconMenu} alt="Menu" />
                            </div>
                            <div className="logo">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className="search" onClick={handleSearchClick}>
                                <img src={IconBusca} alt="Search" />
                            </div>
                            <div className="shopping-cart">
                                <img src={IconShoppingBag} alt="Shopping Cart" />
                            </div>
                        </div>
                        {showSearch && <div className={`search-mobile ${showSearch ? 'active' : ''}`}>
                            <input placeholder="O Que Você Busca?" />
                        </div>}
                    </>
                ) : (
                    <></>
                )
                }

            </div>
        </>
    )
}
