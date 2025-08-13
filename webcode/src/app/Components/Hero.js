"use client";
import { useConfig } from "./Configuracao";
import { Textos } from "../Components/Textos";
import { useEffect, useState } from "react";
import { Configuracao } from "./Configuracao";
import Image from "next/image";
import Link from "next/link";
// import "../Components.css/Hero.css"

export function Hero() {
    const { config } = useConfig();
    const [t, setT] = useState(Textos.pt.hero); // Valor inicial em português
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
            setT(Textos[config.idioma]?.hero || Textos.pt.hero);
        }
    }, [config?.idioma]);

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.hero);
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    if (!t) return null;
    return (
        <section className="hero" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '20px' : '42px 0 0 0' }}>
            <div style={{ flex: 1, padding: '60px', textAlign: isMobile ? 'center' : 'left' }}>

                <div style={{ textAlign: "justify", position: isMobile ? 'relative' : 'absolute', transform: isMobile ? 'translateY(0)' : 'translateY(-160px)' }}>
                    <h1 style={{ fontSize: isMobile ? '2rem' : '4rem', fontWeight: 'bold' }}>{t.fraseP1}</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', fontSize: isMobile ? '1.2rem' : '2.8rem', fontWeight: 'bold', transform: isMobile ? 'translateY(0)' : 'translateY(-20px)' }}>
                        <h2>{t.fraseP2}</h2>
                        <h2 style={{ color: "var(--purple-accent)" }}>
                            {t.fraseP3}
                        </h2>
                    </div>
                    <p style={{ textAlign: "justify", fontSize: isMobile ? '1.1rem' : '1rem', fontWeight: '500', width: '30vw', transform: isMobile ? 'translateY(0)' : 'translateY(-20px)' }}>{t.descricao}</p>

                    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px" }}>
                        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "10px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                            </svg>
                            <Link href="/contato" className="botao-hero">
                                {t.orcamento}
                            </Link>
                        </div>

                        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "10px" }}>
                            <Image
                                src="/computador.png"
                                alt="Logo WebCode"
                                width={25}
                                height={20}
                                className="logo-imagem"
                            />
                            <Link href="/contato" className="botao-hero">
                                {t.trabalhos}
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Image
                    src="/hero.png"
                    alt="Logo WebCode"
                    width={950}
                    height={950}
                    className="logo-imagem"
                />
            </div>
        </section>
    );
}