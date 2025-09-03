"use client";
import { useConfig } from "./Configuracao";
import { Textos } from "../Components/Textos";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../Components.css/Comentarios.css"

export function Comentarios() {
    const { config } = useConfig();
    const [t, setT] = useState(Textos.pt.comentarios);
    const [isMobile, setIsMobile] = useState(false);
    const [expandedCards, setExpandedCards] = useState({});

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.comentarios || Textos.pt.comentarios);
        }
    }, [config?.idioma]);

    const toggleExpand = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    if (!t) return null;

    return (
        <section className="comentarios-container">
            <div className="comentarios-content">
                <div className="comentarios-carousel">
                    <Swiper
                        direction="vertical"
                        slidesPerView={isMobile ? 1.5 : 2.5}
                        spaceBetween={20}
                        mousewheel={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Mousewheel, Autoplay]}
                        className="comentarios-swiper-vertical"
                        style={{ height: "600px" }}
                    >
                        {t.comentarios.map((comentario, index) => (
                            <SwiperSlide key={index}>
                                <div className="comentario-card">
                                    <div className="comentario-header">
                                        <div className="comentario-avatar">
                                            <Image
                                                src={comentario.img || "/default-avatar.png"}
                                                alt={`Imagem de ${comentario.nome}`}
                                                width={40}
                                                height={40}
                                                style={{ borderRadius: "50%", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="comentario-info">
                                            <h3 className="comentario-nome">{comentario.nome}</h3>
                                            <span className="comentario-data">{comentario.data}</span>
                                        </div>
                                        <div className="comentario-rating">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star} className="star-filled">★</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="comentario-texto">
                                        <p className={expandedCards[index] ? "expanded" : "collapsed"}>
                                            {comentario.descricao}
                                        </p>
                                        {comentario.descricao.length > 120 && (
                                            <button 
                                                className="ler-mais-btn"
                                                onClick={() => toggleExpand(index)}
                                            >
                                                {expandedCards[index] ? "Ler menos" : "Ler mais"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="comentarios-info">
                    <div className="comentarios-titulo">
                        <span className="titulo-texto">{t.titulo1}</span>
                        <div className="titulo-destaque-container">
                            <h1 className="titulo-destaque">{t.titulo2}</h1>
                            <span className="titulo-complemento">{t.titulo3}</span>
                        </div>
                    </div>

                    <div className="comentarios-descricao">
                        <p>{t.descricao}</p>
                        <Link href="https://wa.me/5511999999999?text=Quero%20meu%20projeto%20online" className="projeto-btn">
                            {t.botao}
                        </Link>
                    </div>

                    <div className="comentarios-stats">
                        {t.lista.map((item, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-value">
                                    {item.valor}
                                    <span className="stat-plus">{item.mais}</span>
                                </div>
                                <div className="stat-label">{item.ponto}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <style jsx>{`
                .comentarios-content {
                    max-width: 90vw;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: ${isMobile ? 'column' : 'row'};
                    gap: 6rem;
                    align-items: center;
                }
                
                .comentarios-carousel {
                    flex: 1;
                    width: 90%;
                    max-width: 900px;
                }
                
                .comentarios-swiper-vertical {
                    height: 10vh;
                    padding: 80px !important;
                }
                
                .comentario-card {
                    background: white;
                    border-radius: 10px;
                    padding: 1rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    margin: 10px 0;
                }
                
                .comentario-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                    gap: 0.8rem;
                }
                
                .comentario-info {
                    flex: 1;
                }
                
                .comentario-nome {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0 0 0.2rem 0;
                    color: #2d3748;
                }
                
                .comentario-data {
                    font-size: 0.85rem;
                    color: #718096;
                }
                
                .comentario-rating {
                    color: #F59E0B;
                    font-size: 1rem;
                }
                
                .comentario-texto {
                    flex: 1;
                    position: relative;
                }
                
                .comentario-texto p {
                    color: #4a5568;
                    line-height: 1.6;
                    margin: 0;
                    font-size: 0.95rem;
                }
                
                .comentario-texto .collapsed {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .comentario-texto .expanded {
                    display: block;
                }
                
                .ler-mais-btn {
                    background: none;
                    border: none;
                    color: #4299e1;
                    font-weight: 600;
                    cursor: pointer;
                    margin-top: 0.5rem;
                    padding: 0;
                    font-size: 0.9rem;
                }
                
                .ler-mais-btn:hover {
                    text-decoration: underline;
                }
                
                .comentarios-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                    color: white;
                }
                
                .comentarios-titulo {
                    text-align: ${isMobile ? 'center' : 'left'};
                }
                
                .titulo-texto {
                    display: block;
                    font-size: 2.2rem;
                    color: #e2e8f0;
                    line-height: 1.2;
                    font-weight: 400;
                    margin-bottom: 0.5rem;
                }
                
                .titulo-destaque-container {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }
                
                .titulo-destaque {
                    font-size: 3rem;
                    margin: 0;
                    background: linear-gradient(90deg, #7b1a78, #8a1280);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 700;
                }
                
                .titulo-complemento {
                    font-size: 2.5rem;
                    color: #e2e8f0;
                    font-weight: 400;
                }
                
                .comentarios-descricao {
                    text-align: ${isMobile ? 'center' : 'left'};
                }
                
                .comentarios-descricao p {
                    font-size: 1.2rem;
                    line-height: 1.7;
                    color: #cbd5e0;
                    margin-bottom: 2rem;
                }
                
                .projeto-btn {
                    display: inline-block;
                    background: linear-gradient(90deg, #770a84, #b2388d);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(119, 10, 132, 0.4);
                    font-size: 1.1rem;
                }
                
                .projeto-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(119, 10, 132, 0.6);
                }
                
                .comentarios-stats {
                    display: flex;
                    justify-content: space-between;
                    gap: 2rem;
                    flex-wrap: wrap;
                }
                
                .stat-item {
                    text-align: center;
                    flex: 1;
                    min-width: 100px;
                }
                
                .stat-value {
                    font-size: 2.8rem;
                    font-weight: 800;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                }
                
                .stat-plus {
                    font-size: 1.8rem;
                    color: #8b125f;
                    margin-left: 2px;
                }
                
                .stat-label {
                    font-size: 1rem;
                    color: #cbd5e0;
                    margin-top: 0.5rem;
                    font-weight: 500;
                }
                
                @media (max-width: 968px) {
                    .comentarios-content {
                        gap: 3rem;
                    }
                    
                    .titulo-texto {
                        font-size: 1.8rem;
                    }
                    
                    .titulo-destaque {
                        font-size: 2.5rem;
                    }
                    
                    .titulo-complemento {
                        font-size: 2rem;
                    }
                    
                    .comentarios-descricao p {
                        font-size: 1.1rem;
                    }
                    
                    .stat-value {
                        font-size: 2.2rem;
                    }
                }
                
                @media (max-width: 768px) {
                    .comentarios-container {
                        padding: 3rem 1.5rem;
                    }
                    
                    .comentarios-content {
                        flex-direction: column;
                        gap: 2.5rem;
                    }
                    
                    .comentarios-carousel {
                        max-width: 100%;
                    }
                    
                    .comentarios-swiper-vertical {
                        height: 400px;
                    }
                    
                    .comentarios-info {
                        text-align: center;
                    }
                    
                    .titulo-destaque-container {
                        justify-content: center;
                    }
                    
                    .titulo-texto {
                        font-size: 1.6rem;
                    }
                    
                    .titulo-destaque {
                        font-size: 2.2rem;
                    }
                    
                    .titulo-complemento {
                        font-size: 1.8rem;
                    }
                    
                    .comentarios-stats {
                        justify-content: center;
                        gap: 1.5rem;
                    }
                    
                    .stat-item {
                        min-width: 80px;
                    }
                }
                
                @media (max-width: 480px) {
                    .comentarios-stats {
                        flex-direction: column;
                        gap: 2rem;
                    }
                    
                    .stat-value {
                        font-size: 2.5rem;
                    }
                    
                    .titulo-texto {
                        font-size: 1.4rem;
                    }
                    
                    .titulo-destaque {
                        font-size: 1.8rem;
                    }
                    
                    .titulo-complemento {
                        font-size: 1.5rem;
                    }
                }
            `}</style> */}
        </section>
    );
}