"use client";
import { useConfig } from "./Configuracao";
import { Textos } from "../Components/Textos";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Configuracao } from "./Configuracao";
import "../Components.css/Navegacao.css"
import Image from "next/image";

export function Navegacao() {
    const { config } = useConfig();
    const [t, setT] = useState(Textos.pt.nav); // Valor inicial em português
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.nav || Textos.pt.nav);
        }
    }, [config?.idioma]);

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.nav);
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    if (!t) return null;
    return (
        <nav className="navegacao">
            <div className="nav-esquerda">
                <Image
                    src="/LogoNav.png"
                    alt="Logo WebCode"
                    width={50}
                    height={50}
                    className="logo-imagem"
                />
                <h1
                    style={{
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontWeight: 'bold',
                        color: 'var(--color-text)',
                        margin: 0
                    }}>{t.nome}</h1>
            </div>

            {/* Versão Desktop */}
            {!isMobile && (
                <div className="nav-direita">
                    <Link href="#inicio" className="links">{t.links.inicio}</Link>
                    <Link href="#sobre" className="links">{t.links.sobre}</Link>
                    <Link href="#servicos" className="links">{t.links.servicos}</Link>
                    <Link href="#projetos" className="links">{t.links.projetos}</Link>
                    <Link href="#contato" className="links">{t.links.contato}</Link>
                    <Configuracao />
                </div>
            )}

            {/* Versão Mobile */}
            {isMobile && (
                <>
                    <Configuracao />

                    <button
                        className={`hamburguer-button ${isMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <Link href="#inicio" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                            {t.links.inicio}
                        </Link>
                        <Link href="#sobre" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                            {t.links.sobre}
                        </Link>
                        <Link href="#servicos" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                            {t.links.servicos}
                        </Link>
                        <Link href="#projetos" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                            {t.links.projetos}
                        </Link>
                        <Link href="#contato" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                            {t.links.contato}
                        </Link>
                    </div>
                </>
            )}
        </nav>
    );
}