import "./globals.css";
import { ConfigProvider } from './Components/Configuracao';

export const metadata = {
  title: "WebCode",
  description: "A WebCode é uma empresa de tecnologia especializada em manutenção de computadores, design, marketing, produção de vídeos, gerenciamento de redes sociais desenvolvimento web, oferecendo soluções inovadoras e personalizadas para atender às necessidades dos nossos clientes.",
  keywords: "WebCode, tecnologia, manutenção de computadores, design, marketing, produção de vídeos, gerenciamento de redes sociais, desenvolvimento web",
  icons: {
    // icon: "logo_webcode.jpeg",
    icon: "/LogoNav.png",
  },
  authors: [
    { name: "Ramon Brandão", url: "https://ramon-brandao.vercel.app/" },
    { name: " Pedro Ryan", url: "https://pedroryan.vercel.app" }
  ],
  publisher: "WebCode",

  openGraph: {
    title: "WebCode",
    description: "A WebCode é uma empresa de tecnologia especializada em manutenção de computadores, design, marketing, produção de vídeos, gerenciamento de redes sociais desenvolvimento web, oferecendo soluções inovadoras e personalizadas para atender às necessidades dos nossos clientes.",
    url: "https://webcode-tech.vercel.app/",
    siteName: "WebCode",
    images: [
      {
        url: "logo_webcode.jpeg",
        width: 1200,
        height: 630,
        alt: "WebCode Logo",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/svg+xml" href="logo_webcode.jpeg" />
      </head>
      <body>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
