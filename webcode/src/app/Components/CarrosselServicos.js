"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Components.css/carrossel.css";

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
                        depth: 800,
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

        </section>
    );
}