"use client";
import { useConfig } from "./Configuracao";
import { Textos } from "../Components/Textos";
import { useEffect, useState } from "react";
import "../Components.css/Contato.css"
import Image from "next/image";
import Link from "next/link";

export function Formulario() {
    const [mensagem, setMensagem] = useState(null);
    const { config } = useConfig();
    const [t, setT] = useState(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (config?.idioma) {
            setT(Textos[config.idioma]?.contato);
        }
    }, [config?.idioma]);

    useEffect(() => {
        const handleStorage = () => {
            const configSalva = JSON.parse(localStorage.getItem('configuracoes'));
            if (configSalva?.idioma) {
                setT(Textos[configSalva.idioma]?.contato);
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setIsInView(true), 300);
        return () => clearTimeout(timer);
    }, []);

    if (!t) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formsubmit.co/ajax/webcode.empresa@gmail.com", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            setMensagem(res.ok ? "sucesso" : "erro");
            if (res.ok) form.reset();
        } catch (error) {
            console.error(error);
            setMensagem("erro");
        }
    };

    return (
        <div>
            <div className="form-container">
                <form
                    onSubmit={handleSubmit}
                    className={`contact-form ${isInView ? 'in-view' : ''}`}
                >
                    <h2 className="form-title">{t.formulario.titulo}</h2>
                    <div className="title-underline"></div>

                    {t.formulario.campos.map((campo, index) => (
                        <div key={index} className="form-group">
                            <label htmlFor={campo.nome.toLowerCase().replace(/\s+/g, '-')} className="form-label">
                                {campo.nome}
                            </label>
                            {campo.tipo === 'textarea' ? (
                                <textarea
                                    id={campo.nome.toLowerCase().replace(/\s+/g, '-')}
                                    name={campo.nome.toLowerCase().replace(/\s+/g, '-')}
                                    rows="5"
                                    className="form-textarea"
                                    required={campo.obrigatorio}
                                    placeholder={campo.placeholder || ''}
                                ></textarea>
                            ) : (
                                <input
                                    type={campo.tipo}
                                    id={campo.nome.toLowerCase().replace(/\s+/g, '-')}
                                    name={campo.nome.toLowerCase().replace(/\s+/g, '-')}
                                    className="form-input"
                                    required={campo.obrigatorio}
                                    placeholder={campo.placeholder || ''}
                                />
                            )}
                        </div>
                    ))}

                    {/* Campos ocultos */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="Nova mensagem do site WebCode!" />
                    <input
                        type="hidden"
                        name="_autoresponse"
                        value="Olá! Recebi sua mensagem e em breve te responderei. Obrigado pelo contato! - WebCode"
                    />

                    <button type="submit" className="form-submit">
                        {t.formulario.botao}
                    </button>
                </form>
            </div>

            {/* Popup de confirmação */}
            {mensagem && (
                <div className="overlay" style={{ zIndex: "9999" }}>
                    <div className="config-card">
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <Image
                                src="/LogoNav.png"
                                alt="Logo WebCode"
                                width={50}
                                height={50}
                                className="logo-imagem"
                            />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "16px"
                            }}>
                                {mensagem === "sucesso" ? (
                                    <>
                                        <h3 className="text-xl font-bold text-green-600"
                                            style={{
                                                fontWeight: "600",
                                                color: "#ffffff",
                                                marginTop: "10px"
                                            }}>
                                            {t.formulario.sucesso || "Mensagem enviada!"}
                                        </h3>
                                        <p className="mt-2"
                                            style={{
                                                fontWeight: "500",
                                                color: "#fffffff",
                                                fontSize: "14px"
                                            }}>
                                            {t.formulario.sucessoDescricao || "Obrigado pelo contato. Responderei em breve!"}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h3
                                            style={{
                                                fontWeight: "600",
                                                color: "#4A2495",
                                                marginTop: "10px"
                                            }}>
                                            {t.formulario.erro || "Erro ao enviar"}
                                        </h3>
                                        <p
                                            className="mt-2"
                                            style={{
                                                fontWeight: "500",
                                                color: "#4A2495",
                                                fontSize: "14px"
                                            }}>
                                            {t.formulario.erroDescricao || "Tente novamente ou entre em contato por outro meio."}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "end",
                            marginRight: "20px"
                        }}>
                            <button
                                onClick={() => setMensagem(null)}
                                style={{
                                    marginTop: "30px",
                                    display: "flex",
                                    borderColor: "#4A2495",
                                    backgroundColor: "#4A2495",
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 18px",
                                    borderRadius: "20px",
                                    boxShadow: "0 0 0 1px v#4A2495, 0 0 4px 1px #4A2495"
                                }}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}