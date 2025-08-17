"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import { useConfig } from "./Configuracao";
import { Textos } from "../Components/Textos";
import { TituloSecao } from "./TituloSecao";

export function CarrosselServicos() {
    const { config } = useConfig();
    const [t, setT] = useState(Textos.pt.servicos);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.servicos || Textos.pt.servicos);
        }
    }, [config?.idioma]);

    if (!t) return null;

    return (
        <section className="servicos-section">
            <TituloSecao texto={t.titulo} />

            <div className="carrossel-container">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={isMobile ? 1 : 3}
                    initialSlide={1} // Começa com o slide central ativo
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 900,
                        modifier: 1,
                        slideShadows: false,
                        scale: isMobile ? 1 : 0.8, // Cards laterais menores
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet"></span>`;
                        },
                    }}
                    mousewheel={{
                        forceToAxis: true,
                        invert: false,
                        sensitivity: 1,
                    }}
                    modules={[EffectCoverflow, Navigation, Pagination, Mousewheel]}
                    className="coverflow-swiper"
                >
                    {t.cards.map((card, index) => (
                        <SwiperSlide key={index} className="swiper-slide-custom">
                            <div className="card-container">
                                <img
                                    src={card.imagem}
                                    alt={card.titulo}
                                    className="card-image"
                                />
                                <div className="card-content">
                                    <h3 className="card-title">{card.titulo}</h3>
                                    <p className="card-description">{card.descricao}</p>
                                    <button className="card-button">
                                        {t.saibaMais} →
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navegação personalizada */}
                <div className="navigation-container">
                    <div className="swiper-button-prev custom-nav"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next custom-nav"></div>
                </div>
            </div>

            <style jsx global>{`
                .servicos-section {
                    padding: 20px 10px;
                }
                    
                .carrossel-container {
                    position: relative;
                    max-width: 100%;
                    margin: 0 auto;  
                }
                        
                .coverflow-swiper {
                    padding: 70px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .swiper-slide-custom {
                    transition: all 0.4s ease;
                    filter: blur(3px);
                    opacity: 1;
                    transform: scale(1.6);
                }
                
                .swiper-slide-active {
                    filter: blur(0);
                    opacity: 1;
                    transform: scale(1.2) !important;
                    z-index: 10;
                }
                
                .card-container {
                    position: relative;
                    width: 600px;
                    height: 360px;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }
                
                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.9);
                }
                
                .card-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 30px;
                    color: white;
                    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
                }
                
                .card-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                
                .card-description {
                    font-size: 1rem;
                    margin-bottom: 20px;
                }
                
                .card-button {
                    background-color: #8F5BF7;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-weight: bold;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .card-button:hover {
                    background-color: #7a4ad6;
                }
                
                .navigation-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 20px;
                    gap: 10%;
                }
                
                .custom-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(143, 91, 247, 0.5);
                    border-radius: 50%;
                    margin: 0 6px !important;
                    transition: all 0.3s ease;
                }
                
                .custom-bullet.swiper-pagination-bullet-active {
                    background: #8F5BF7;
                    border: 3px solid white;
                    transform: scale(1.2);
                }
                
                .custom-nav {
                    color: #8F5BF7;
                    font-weight: bold;
                    font-size: 18px;
                    cursor: pointer;
                    width: auto;
                    height: auto;
                    position: static;
                    margin-top: 0;
                    transition: all 0.3s ease;
                }
                
                .custom-nav:hover {
                    color: #6e3fd3;
                }
                
                .custom-nav::after {
                    font-size: 18px;
                    font-weight: bold;
                }
                
                @media (max-width: 768px) {
                    .card-container {
                        height: 350px;
                    }
                    
                    .swiper-slide-custom {
                        filter: blur(0);
                        opacity: 1;
                    }
                    
                    .coverflowEffect {
                        scale: 1 !important;
                    }
                }
            `}</style>
        </section>
    );
}