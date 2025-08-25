"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Components.css/carrossel.css";

import { useEffect, useState } from "react";
import { useConfig } from "./Configuracao";
import { Textos } from "../Components/Textos";
import { TituloSecao } from "./TituloSecao";
import Link from "next/link";

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
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={isMobile ? 1 : 3}
                    spaceBetween={isMobile ? 10 : 30}
                    initialSlide={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                    }}
                    mousewheel={{
                        forceToAxis: true,
                        invert: false,
                        sensitivity: 1,
                    }}
                    modules={[Navigation, Pagination, Mousewheel]}
                    className="custom-swiper"
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
                                    <h3 className="card-subtitle">{card.titulo}</h3>
                                    <p className="card-description">{card.descricao}</p>
                                    <Link href="/contato" className="card-button">
                                        <strong>{t.saibaMais} →</strong>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navegação */}
                <div className="navigation-container">
                    <div className="swiper-button-prev custom-nav">‹</div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next custom-nav">›</div>
                </div>
            </div>
        </section>
    );
}