"use client";

import { useState } from "react";
import { useConfig } from "./Configuracao";
import { Textos } from "../Components/Textos";
import { TituloSecao } from "./TituloSecao";
import { CardProjeto } from "./Card_Projeto";
import { Barras } from "./Barra";
import Link from "next/link";
import "../Components.css/Projetos.css";

export function Projetos() {
    const { config } = useConfig();
    const t = Textos[config.idioma]?.projetos;
    const [filtro, setFiltro] = useState("Todos");

    const projetosFiltrados = t.lista.filter((projeto) =>
        filtro === "Todos" ? true : projeto.categoria === filtro
    );

    return (
        <section className="Projetos-scroll" id="projetos" style={{paddingTop: "100px"}}>
            <TituloSecao texto={t.titulo} />

            <div
                className="filtros-container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0.6rem 1.5rem",
                    border: "none",
                    outline: "none",
                    gap: "12px",
                    borderRadius: "20px"
                }}>
                {t.filtros.map((botao) => (
                    <button
                        key={botao}
                        onClick={() => setFiltro(botao)}
                        className={`filtro-btn ${filtro === botao ? "ativo" : ""}`}
                    >
                        {botao}
                    </button>
                ))}
            </div>

            <div className="projeto-scroll">
                {projetosFiltrados.map((projeto, index) => (
                    <CardProjeto
                        key={index}
                        nome={projeto.nome}
                        descricao={projeto.descricao}
                        status={projeto.status}
                        imagem={projeto.imagem}
                        tecnologiasBarra={
                            <div className="barras-container">
                                {projeto.tecnologias.map((tech, i) => (
                                    <Barras key={i} texto={tech} />
                                ))}
                            </div>
                        }
                        links={projeto.links}
                    />
                ))}
            </div>
        </section>
    );
}