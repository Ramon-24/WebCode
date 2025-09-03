import "../Components.css/Navegacao.css"
import { Navegacao } from "./Navegacao";
import { Hero } from "./Hero";
import { BarraGradent } from "./BarraGradent";
import { Sobre } from "./Sobre";
import { CarrosselServicos } from "./CarrosselServicos";
import { Textos } from "../Components/Textos";
import { Duvidas } from "./Duvidas";
import { Projetos } from "./Projetos";
import { Comentarios } from "./Comentarios";
import { Contato } from "./Contato";
import { Footer } from "./Footer";

export function Fundo() {
    return (
        <section
            className="fundo">
            <Navegacao />
            <Hero />
            <BarraGradent />
            <Sobre />
            <CarrosselServicos />
            <Duvidas />
            <Projetos/>
            <Comentarios/>
            <Contato/>
            <Footer/>

        </section>
    );
}