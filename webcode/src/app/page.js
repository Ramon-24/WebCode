import Image from "next/image";
import { Configuracao } from "./Components/Configuracao";
import { Navegacao } from "./Components/Navegacao";
import { Hero } from "./Components/Hero";

export default function Home() {
  return (
    <>
    <Navegacao/>
    <Hero/>
    </>
  );
}
