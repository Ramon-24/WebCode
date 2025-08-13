import "../Components.css/Navegacao.css"
import { Navegacao } from "./Navegacao";
import { Hero } from "./Hero";

export function Fundo() {
    return (
        <section
            className="fundo">
            <Navegacao />
            <Hero />
        </section>
    );
}