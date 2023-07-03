import React, { useState, useEffect } from 'react';

import "./Institucional.css"

interface Section {
  title: string;
  links: string[];
}

export const Institucional: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  const handleToggle = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");

    const checkMediaQuery = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQueryList.addEventListener("change", checkMediaQuery);

    // Cleanup
    return () => {
      mediaQueryList.removeEventListener("change", checkMediaQuery);
    };
  }, []);

  const sections: Section[] = [
    {
      title: "Informações",
      links: ["Quem Somos", "Prazo de Envio", "Trocas e Devoluções", "Promoções e Cupons"],
    },
    {
      title: "Minha Conta",
      links: ["Minha Conta", "Meus Pedidos", "Cadastre-se"],
    },
    {
      title: "Onde nos Encontrar",
      links: ["Lojas", "Endereço"],
    },
  ];

  return (
    <div className="institucional">
      {sections.map((section, index) => (
        <div className="institucional-content" key={index}>
          <div className="institucional-title" onClick={() => handleToggle(index)}>
            <strong>{section.title}</strong> <span>{isMobile && ((activeIndex === index) ? '-' : '+')}</span>
          </div>
          {(isMobile && activeIndex === index) || !isMobile ? (
            <div className="institucional-links">
              {section.links.map((link, linkIndex) => (
                <a key={linkIndex} href="/">
                  {link}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Institucional;
