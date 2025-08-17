"use client";
import { useConfig } from "./Configuracao";
import { Textos } from "../Components/Textos";
import { useEffect, useState } from "react";
import { Configuracao } from "./Configuracao";
import Image from "next/image";
import Link from "next/link";
import "../Components.css/Hero.css"

export function Sobre() {
    const { config } = useConfig();
    const [t, setT] = useState(Textos.pt.sobre); // Valor inicial em português
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
            setT(Textos[config.idioma]?.sobre || Textos.pt.sobre);
        }
    }, [config?.idioma]);

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.sobre);
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    if (!t) return null;
    return (
        <section className="hero" id="sobre"
            style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: isMobile ? '20px' : '400px 0 0 0',
                color: 'var(--color-text)'
            }
            }>

            {/* <div>
                <Image
                    src="/hero.png"
                    alt="Logo WebCode"
                    width={950}
                    height={950}
                    className="logo-imagem"
                />
            </div> */}
            <div
                style={{
                    flex: 1,
                    padding: '60px',
                    textAlign: isMobile ? 'center' : 'left'
                }}>

                <div style={{
                    position: isMobile ? 'relative' : 'absolute',
                    transform: isMobile ? 'translateY(0)' : 'translateY(-300px)'
                }}>


                    <div
                        style={{
                            // width: '58vw',
                            gap: '10px',
                            fontSize: isMobile ? '1.2rem' : '3rem',
                            fontWeight: 'bold',
                            transform: isMobile ? 'translateY(0)' : 'translateY(-20px)'
                        }}>

                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                            <h2>{t.titulo1}</h2>
                            <h2 style={{ color: "var(--purple-accent)" }}>
                                {t.titulo2}
                            </h2>
                            <h2>{t.titulo3}</h2>
                        </div>
                        <h2>{t.titulo4}</h2>
                    </div>



                    <p style={{ textAlign: "justify", fontWeight: '400', width: '35vw', transform: isMobile ? 'translateY(0)' : 'translateY(-20px)', margin: '25px 0 25px 0' }}>
                        {t.descricao1}
                    </p>
                    <p style={{ textAlign: "justify", fontWeight: '400', width: '35vw', transform: isMobile ? 'translateY(0)' : 'translateY(-20px)' }}>
                        {t.descricao2}
                    </p>


                    <div style={{ display: "flex", flexDirection: "row", transform: isMobile ? 'translateY(0)' : 'translateY(20px)', zIndex: 30 }}>


                        <div>
                            <div style={{display: "flex", flexDirection: "row", padding: "5px 30px 5px 0", gap: "8px", alignItems: "center" }}>
                                <Image
                                    src="/correto.png"
                                    alt="Logo WebCode"
                                    width={20}
                                    height={20}
                                    className="logo-imagem"
                                />
                                <p>{t.qualificacao.Suporte} <br /></p>
                            </div>

                            <div style={{display: "flex", flexDirection: "row", padding: "5px 30px 5px 0", gap: "8px", alignItems: "center" }}>
                                <Image
                                    src="/correto.png"
                                    alt="Logo WebCode"
                                    width={20}
                                    height={20}
                                    className="logo-imagem"
                                />
                                <p>{t.qualificacao.Soluções} <br /></p>
                            </div>

                            <div style={{display: "flex", flexDirection: "row", padding: "5px 30px 5px 0", gap: "8px", alignItems: "center" }}>
                                <Image
                                    src="/correto.png"
                                    alt="Logo WebCode"
                                    width={20}
                                    height={20}
                                    className="logo-imagem"
                                />
                                <p>{t.qualificacao.Segurança} <br /></p>
                            </div>

                            <div style={{display: "flex", flexDirection: "row", padding: "5px 30px 5px 0", gap: "8px", alignItems: "center" }}>
                                <Image
                                    src="/correto.png"
                                    alt="Logo WebCode"
                                    width={20}
                                    height={20}
                                    className="logo-imagem"
                                />
                                <p>{t.qualificacao.Atendimento} <br /></p>
                            </div>
                        </div>

                        <div>

                            <div style={{display: "flex", flexDirection: "row", padding: "5px 0 5px 15px", gap: "8px", alignItems: "center" }}>
                                <Image
                                    src="/correto.png"
                                    alt="Logo WebCode"
                                    width={20}
                                    height={20}
                                    className="logo-imagem"
                                />
                                <p>{t.qualificacao.Desempenho} <br /></p>
                            </div>

                            <div style={{display: "flex", flexDirection: "row", padding: "5px 0 5px 15px", gap: "8px", alignItems: "center" }}>
                                <Image
                                    src="/correto.png"
                                    alt="Logo WebCode"
                                    width={20}
                                    height={20}
                                    className="logo-imagem"
                                />
                                <p>{t.qualificacao.Acompanhamento} <br /></p>
                            </div>

                            <div style={{display: "flex", flexDirection: "row", padding: "5px 0 5px 15px", gap: "8px", alignItems: "center" }}>
                                <Image
                                    src="/correto.png"
                                    alt="Logo WebCode"
                                    width={20}
                                    height={20}
                                    className="logo-imagem"
                                />
                                <p>{t.qualificacao.Profissionais} <br /></p>
                            </div>

                            <div style={{display: "flex", flexDirection: "row", padding: "5px 0 5px 15px", gap: "8px", alignItems: "center" }}>
                                <Image
                                    src="/correto.png"
                                    alt="Logo WebCode"
                                    width={20}
                                    height={20}
                                    className="logo-imagem"
                                />
                                <p>{t.qualificacao.Tecnologia} <br /></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}