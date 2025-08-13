"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
// import ConfiguracaoLogo from "../../../public/LogoNav.png";
import "../Components.css/Configuracao.css";

// Contexto de configuração
const ConfigContext = createContext();

export function ConfigProvider({ children }) {
    const [config, setConfig] = useState({
        tema: "light",
        idioma: "pt"
    });

    // Carrega a configuração do localStorage
    useEffect(() => {
        const configSalva = localStorage.getItem("configuracoes");
        if (configSalva) {
            setConfig(JSON.parse(configSalva));
        }
    }, []);

    // Aplica o tema quando a configuração muda
    useEffect(() => {
        if (config) {
            document.body.classList.toggle('dark-mode', config.tema === 'dark');
            localStorage.setItem("configuracoes", JSON.stringify(config));
        }
    }, [config]);

    const atualizarConfig = (novaConfig) => {
        setConfig(novaConfig);
    };

    return (
        <ConfigContext.Provider value={{ config, atualizarConfig }}>
            {children}
        </ConfigContext.Provider>
    );
}

export function useConfig() {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error("useConfig deve ser usado dentro de um ConfigProvider");
    }
    return context;
}

export function Configuracao() {
    const { config, atualizarConfig } = useConfig();
    const [mostrarConfig, setMostrarConfig] = useState(false);

    const traducoes = {
        pt: {
            configuracoes: "Configurações",
            tema: "Tema",
            claro: "Claro",
            escuro: "Escuro",
            idioma: "Idioma",
            portugues: "Português",
            ingles: "English",
            espanhol: "Español"
        },
        en: {
            configuracoes: "Settings",
            tema: "Theme",
            claro: "Light",
            escuro: "Dark",
            idioma: "Language",
            portugues: "Portuguese",
            ingles: "English",
            espanhol: "Spanish"
        },
        es: {
            configuracoes: "Configuración",
            tema: "Tema",
            claro: "Claro",
            escuro: "Oscuro",
            idioma: "Idioma",
            portugues: "Portugués",
            ingles: "Inglés",
            espanhol: "Español"
        }
    };

    const mudarIdioma = (novoIdioma) => {
        atualizarConfig({ ...config, idioma: novoIdioma });
    };

    const mudarTema = (novoTema) => {
        atualizarConfig({ ...config, tema: novoTema });
    };

    if (!config) return null;

    return (
        <>
            <div className="botao-container">
                <button
                    onClick={() => setMostrarConfig(true)}
                    aria-label={traducoes[config.idioma].configuracoes}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" style={{ cursor: "pointer",}} fill="currentColor" className="bi bi-nut" viewBox="0 0 16 16">
                        <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1z" />
                        <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33m-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
                    </svg>
                </button>
            </div>

            {mostrarConfig && (
                <div className="overlay">
                    <div className="config-card">
                        <div>
                            <h1>{traducoes[config.idioma].configuracoes}</h1>
                            <button
                                className="botao-fechar"
                                onClick={() => setMostrarConfig(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <h2>{traducoes[config.idioma].tema}</h2>
                            <div>
                                <button
                                    className={`opcao-botao ${config.tema === 'light' ? 'ativo' : ''}`}
                                    onClick={() => mudarTema('light')}
                                >
                                    {traducoes[config.idioma].claro}
                                </button>
                                <button
                                    className={`opcao-botao ${config.tema === 'dark' ? 'ativo' : ''}`}
                                    onClick={() => mudarTema('dark')}
                                >
                                    {traducoes[config.idioma].escuro}
                                </button>
                            </div>
                        </div>

                        <div>
                            <h2>{traducoes[config.idioma].idioma}</h2>
                            <div>
                                <button
                                    className={`opcao-botao ${config.idioma === 'pt' ? 'ativo' : ''}`}
                                    onClick={() => mudarIdioma('pt')}
                                >
                                    {traducoes[config.idioma].portugues}
                                </button>
                                <button
                                    className={`opcao-botao ${config.idioma === 'en' ? 'ativo' : ''}`}
                                    onClick={() => mudarIdioma('en')}
                                >
                                    {traducoes[config.idioma].ingles}
                                </button>
                                <button
                                    className={`opcao-botao ${config.idioma === 'es' ? 'ativo' : ''}`}
                                    onClick={() => mudarIdioma('es')}
                                >
                                    {traducoes[config.idioma].espanhol}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}