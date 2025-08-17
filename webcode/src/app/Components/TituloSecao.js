"use client";
import React from "react";
import "../Components.css/TituloSecao.css";

export function TituloSecao({ texto }) {
    const palavras = texto.split(" ");
    const primeira = palavras.slice(0, -1).join(" "); // tudo menos a última
    const ultima = palavras[palavras.length - 1];     // última palavra

    return (
        <div className="titulo-secao">
            <h2>
                <span className="texto-normal">{primeira}</span>{" "}
                <span className="texto-destaque">{ultima}</span>
            </h2>
            <div className="linha-embaixo"></div>
        </div>
    );
}


