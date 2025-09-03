import Link from "next/link";

export const Textos = {
    pt: {
        nav: {
            // imagem: "/logo.png",
            nome: "WebCode",
            links: {
                inicio: "Início",
                sobre: "Sobre",
                servicos: "Serviços",
                projetos: "Projetos",
                contato: "Contato"
            }
        },
        hero: {
            fraseP1: "Conectamos sua ",
            fraseP2: " ideia ao ",
            fraseP3: " mundo digital ",
            descricao: "Com soluções acessíveis, personalizadas e pensadas para fazer sua marca crescer com impacto, estratégia e presença online de verdade.",
            orcamento: "Solicite um orçamento",
            trabalhos: "Veja nosso trabalho"
        },
        sobre: {
            titulo1: "O que a",
            titulo2: " webcode",
            titulo3: " pode",
            titulo4: " te proporcionar?",
            descricao1: "A Webcode pode proporcionar a você soluções tecnológicas rápidas, seguras e personalizadas, garantindo que seu negócio esteja sempre online e funcionando no melhor desempenho.",
            descricao2: "Com um atendimento próximo e suporte especializado, cuidamos de cada detalhe para que você tenha mais tempo para focar no que realmente importa: o crescimento do seu projeto.",
            qualificacao: {
                Suporte: "Suporte rápido e eficaz",
                Soluções: "Soluções sob medida",
                Segurança: "Segurança e estabilidade",
                Atendimento: "Atendimento humanizado",
                Desempenho: "Desempenho otimizado",
                Acompanhamento: "Acompanhamento ao cliente",
                Profissionais: "Profissionais qualificados",
                Tecnologia: "Tecnologia de ponta"
            }
        },
        servicos: {
            titulo: "Serviços Prestados",
            saibaMais: "Saiba mais",
            cards: [
                {
                    titulo: "Formatação de Dispositivos",
                    descricao: "Realizamos a formatação completa de computadores, notebooks e outros dispositivos, garantindo um sistema limpo, rápido e seguro. Incluímos instalação de drivers, configurações personalizadas e otimização do desempenho.",
                    imagem: "/Formatação.png"
                },
                {
                    titulo: "Desenvolvimento Web",
                    descricao: "Criamos sites modernos, responsivos e otimizados para oferecer a melhor experiência ao usuário. Trabalhamos desde landing pages até sistemas completos, alinhados à identidade visual da sua marca e com foco em performance.",
                    imagem: "/web.png"
                },
                {
                    titulo: "Suporte Técnico",
                    descricao: "Atendimento rápido e especializado para resolver problemas técnicos em computadores, redes e sistemas. Nossa equipe garante que sua infraestrutura funcione sem interrupções.",
                    imagem: "/Suporte.png"
                },
                {
                    titulo: "Consultoria de TI",
                    descricao: "Analisamos e planejamos soluções personalizadas para otimizar os processos tecnológicos da sua empresa. Ajudamos na escolha de softwares, melhorias em infraestrutura e aumento da segurança digital.",
                    imagem: "/Consutoria.png"
                },
                {
                    titulo: "Automação de Processos",
                    descricao: "Desenvolvemos sistemas e scripts que automatizam tarefas repetitivas, reduzindo custos e aumentando a produtividade. Ideal para empresas que buscam eficiência e agilidade.",
                    imagem: "/automação.png"
                },
                {
                    titulo: "Desenvolvimento Mobile",
                    descricao: "Criamos aplicativos funcionais e intuitivos para Android e iOS, seja para uso interno da sua empresa ou para o público em geral. Sempre com foco em design moderno e performance.",
                    imagem: "/Mobile.png"
                },
                {
                    titulo: "Gerenciamento de Banco de Dados",
                    descricao: "Oferecemos configuração, manutenção e otimização de bancos de dados, garantindo integridade, segurança e alto desempenho no armazenamento de informações críticas para o seu negócio.",
                    imagem: "/dados.png"
                },
                {
                    titulo: "Criação de Identidade Visual",
                    descricao: "Auxiliamos na construção ou renovação da identidade visual da sua empresa, desenvolvendo logotipos, paletas de cores e elementos gráficos que reforçam a credibilidade e destacam sua marca no mercado.",
                    imagem: "/Visual.png"
                },
                {
                    titulo: "Manutenção Preventiva",
                    descricao: "Fazemos manutenções regulares em equipamentos e sistemas para evitar falhas, prolongar a vida útil dos dispositivos e garantir maior estabilidade e segurança no dia a dia da sua empresa.",
                    imagem: "/Manutenção.png"
                },
                {
                    titulo: "Edição e Produção de Vídeos",
                    descricao: "Produzimos e editamos vídeos institucionais, comerciais e promocionais de alta qualidade, ajudando sua empresa a se comunicar de forma profissional e atrativa nas redes sociais e campanhas de marketing.",
                    imagem: "/Videos.png"
                }
            ]
        },

        perguntasFrequentes: {
            titulo: "Ficou com alguma dúvida?",
            perguntas: [
                {
                    pergunta: "Como funciona o processo de desenvolvimento?",
                    resposta: "Nosso processo é ágil e colaborativo, envolvendo você em cada etapa para garantir que o resultado final atenda às suas expectativas."
                },
                {
                    pergunta: "Quais tecnologias vocês utilizam?",
                    resposta: "Utilizamos as tecnologias mais recentes e adequadas ao seu projeto, garantindo qualidade e performance."
                },
                {
                    pergunta: "Vocês oferecem suporte técnico?",
                    resposta: "Sim, oferecemos suporte técnico contínuo para garantir que seu site ou sistema funcione perfeitamente."
                }
            ],
            botao: "Ainda tenho dúvidas?"
        },


        projetos: {
            titulo: "Alguns Projetos WebCode",
            filtros: ["Todos", "Web", "Mobile", "Outros"],
            lista: [
                {
                    nome: "Multimídia Conecta+",
                    descricao: "Controla empréstimos, devoluções e histórico de alunos, evitando perdas de livros. Em reformulação com novo design, análise de dados e perfis de usuários.",
                    status: "Equipe, sendo refeito Individualmente",
                    categoria: "Web",
                    imagem: "/Multimeios.png",
                    tecnologias: ["Node.js", "Express", "React", "Vite", "ThunderClient", "MySQL", "phpMyAdmin", "Bootstrap", "Devicon"],
                    links: [
                        {
                            nome: "Repositório",
                            url: "https://github.com/Ramon-24/Epgwa.Biblioteca",
                            svg:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/1zVI0wTpIatPfchkodyjRM/Multimeios-Conecta-?node-id=1-2&p=f&t=oQayHBR88UqNfUAw-0",
                            svg:
                                <i className="devicon-figma-plain" />
                        }
                    ]
                },
                {
                    nome: "Gamefic",
                    descricao: "Landing page de uma startup educacional que une gamificação, leitura infantil e tecnologia, com kits físicos e histórias interativas para aproximar crianças dos livros e dos pais.",
                    status: "Equipe",
                    categoria: "Web",
                    imagem: "/Gamefic4.png", // Atualize para o caminho real da imagem
                    tecnologias: ["Next.js", "Vercel", "Bootstrap", "Devicon", "NPM", "i18next"],
                    links: [
                        {
                            nome: "Repositório",
                            url: "https://github.com/Ramon-24/Gamefic",
                            svg:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
                {
                    nome: "Automação com Gestos",
                    descricao: "Projeto de automação com visão computacional que reconhece gestos das mãos via webcam para controlar o computador. Apresentado na Semana da TI como forma interativa de ensinar automação, sem uso de slides.",
                    status: "Equipe",
                    categoria: "Outros",
                    imagem: "/projetos/automacao-gestos.jpg", // Você pode substituir por uma imagem simbólica, como uma ilustração de gestos ou automação
                    tecnologias: ["Python", "OpenCV", "PyAutoGUI", "Mediapipe"],
                    links: [
                        {
                            nome: "Repositório",
                            url: "https://github.com/Ramon-24/robo",
                            svg:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        }
                    ]
                },
                {
                    nome: "Random Questy",
                    descricao: "Aplicativo que possui um sorteio, um contador, um jogo de adivinha números, além de cadastro, login e histórico. Está sendo refeito por mim para melhorar o design, garantir responsividade real e aprofundar o uso da plataforma, incluindo lógica customizada com código.",
                    status: "Equipe, melhorias individualmente",
                    categoria: "Mobile",
                    imagem: "/Random.png", // Substitua por uma imagem ou mockup atualizado
                    tecnologias: ["FlutterFlow", "SupaBase"],
                    links: [
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-flutter-plain" />
                        }
                    ]
                },
                {
                    nome: "Portfólio Pessoal",
                    descricao: "Focado em performance, acessibilidade e design responsivo. Inclui multi-idiomas, modo claro/escuro, animações e formulário de contato. Em constante atualização.",
                    status: "Em desenvolvimento contínuo",
                    categoria: "Web",
                    imagem: "/Portifolio.png",
                    tecnologias: [
                        "Next.js", "Vercel", "i18next", "Framer_Motion", "EmailJS", "Bootstrap", "Devicon",
                    ],
                    links: [
                        {
                            nome: "Repositório",
                            url: "https://github.com/Ramon-24/Ramon_brandao",
                            svg:
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/qI6Kpt6wHTyVFNQOZKOF74/Portifolio?node-id=0-1&p=f&t=fjzYlHexB8Cgn9YT-0",
                            svg:
                                <i className="devicon-figma-plain" />
                        },
                        {
                            nome: "Demo",
                            url: "https://ramon-brandao.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
            ]
        },
        comentarios: {
            comentarios: [
                {
                    img: "/camila-torres.jpg",
                    nome: "Camila Torres",
                    data: "Dia 18 de Agosto",
                    descricao: "O diferencial da WebCode é a proximidade e o cuidado. Sempre prontos para ouvir minhas ideias e transformar em algo ainda melhor. Hoje recebo elogios diários pelo meu site e pela experiência que proporciona aos meus clientes. A equipe foi extremamente atenciosa em cada detalhe, desde o design até a implementação das funcionalidades."
                },
                {
                    img: "/mariana-souza.jpg",
                    nome: "Mariana Souza",
                    data: "Dia 18 de Agosto",
                    descricao: "A WebCode transformou a presença digital do meu negócio! O site ficou moderno, rápido e fácil de usar. O atendimento foi impecável do início ao fim, sempre com atenção aos detalhes e soluções personalizadas para as minhas necessidades. Agora consigo atingir muito mais clientes e as vendas aumentaram significativamente desde o lançamento do novo site."
                },
                {
                    img: "/carlos-rodrigues.jpg",
                    nome: "Carlos Rodrigues",
                    data: "Dia 10 de Setembro",
                    descricao: "Incrível como a WebCode entendeu exatamente o que eu precisava para meu e-commerce. Desenvolveram uma plataforma completa, segura e com ótimo desempenho. O processo de pagamento é fluido e não tive nenhuma reclamação dos clientes. Super recomendo!"
                },
                {
                    img: "/patricia-almeida.jpg",
                    nome: "Patrícia Almeida",
                    data: "Dia 5 de Outubro",
                    descricao: "Como profissional liberal, precisava de um site que transmitisse credibilidade e profissionalismo. A WebCode não apenas entregou isso, como superou todas as expectativas. Agora meus clientes encontram meu trabalho facilmente e meu portfólio online faz toda a diferença."
                }
            ],
            titulo1: "Os resultados da",
            titulo2: "WebCode",
            titulo3: "falam por si.",
            descricao: "Histórias reais de clientes que confiaram na WebCode para criar soluções modernas, profissionais e prontas para gerar resultados.",
            botao: "Quero meu projeto online",
            lista: [
                {
                    valor: "650",
                    mais: "+",
                    ponto: "Projetos feitos"
                },
                {
                    valor: "600",
                    mais: "+",
                    ponto: "Clientes satisfeitos"
                },
                {
                    valor: "2",
                    mais: "+",
                    ponto: "Anos de experiência"
                }
            ]
        },

        contato: {
            titulo: "Vamos Conversar?",
            subtitulo: "Informações de Contato",
            descricao: "Estou disponível para oportunidades, projetos freelancer ou colaborações. Sinta-se à vontade para entrar em contato através dos canais abaixo ou pelo formulário.",
            contatos: [
                {
                    tipo: "WhatsApp",
                    valor: "(88) 9 9378-6475",
                    icone: "whatsapp"
                },
                {
                    tipo: "Email",
                    valor: "webcode.empresa@gmail.com",
                    icone: "email"
                },
                {
                    tipo: "LinkedIn",
                    valor: "linkedin.com/in/webcode",
                    icone: "linkedin"
                },
                {
                    tipo: "Github",
                    valor: "github.com/webcode",
                    icone: "github"
                }
            ],
            formulario: {
                titulo: "Envie uma mensagem",
                campos: [
                    {
                        nome: "Nome Completo",
                        tipo: "text",
                        obrigatorio: true
                    },
                    {
                        nome: "E-mail",
                        tipo: "email",
                        obrigatorio: true
                    },
                    {
                        nome: "Assunto",
                        tipo: "text",
                        obrigatorio: true
                    },
                    {
                        nome: "Mensagem",
                        tipo: "textarea",
                        obrigatorio: true
                    }
                ],
                botao: "Enviar Mensagem"
            },
        },
        rodape: {
            titulo: "WebCode",
            descricao: "Conectamos sua ideia ao mundo digital.",

            Links: "Links Rápidos",
            Linkitens: ["Início", "Sobre", "Serviços", "Projetos", "Contato"],

            servicos: "Serviços",
            Servicoitens: ["Sites", "Aplicativos", "Landing Pages", "Marketing Digital", "Identidade Visual"],


            Contatos: "Contatos",
            Email: "webcode.empresa@gmail.com",
            Telefone: "(88) 9 9378-6475",
            Localidade: "Ceará, Brasil",


            direitos: "© 2024 WebCode. Todos os direitos reservados.",
            politica: "Política de Privacidade",
            termos: "Termos de Uso",
            aviso: "Aviso Legal"
        }
    },









    en: {
        nav: {
            nome: "WebCode",
            links: {
                inicio: "Home",
                sobre: "About",
                servicos: "Services",
                projetos: "Projects",
                contato: "Contact"
            }
        },
        hero: {
            fraseP1: "We connect your ",
            fraseP2: " idea to the ",
            fraseP3: " digital world ",
            descricao: "With affordable, personalized solutions designed to make your brand grow with impact, strategy, and a true online presence.",
            orcamento: "Request a quote",
            trabalhos: "See our work"
        },
        sobre: {
            titulo1: "What can",
            titulo2: " webcode",
            titulo3: " provide",
            titulo4: " you?",
            descricao1: "Webcode can provide you with fast, secure, and personalized technological solutions, ensuring that your business is always online and performing at its best.",
            descricao2: "With close service and specialized support, we take care of every detail so you have more time to focus on what really matters: the growth of your project.",
            qualificacao: {
                Suporte: "Fast and effective support",
                Soluções: "Tailored solutions",
                Segurança: "Security and stability",
                Atendimento: "Humanized service",
                Desempenho: "Optimized performance",
                Acompanhamento: "Customer follow-up",
                Profissionais: "Qualified professionals",
                Tecnologia: "Cutting-edge technology"
            }
        },
        servicos: {
            titulo: "Services Provided",
            saibaMais: "Learn more",
            cards: [
                {
                    titulo: "Device Formatting",
                    descricao: "We perform complete formatting of computers, notebooks and other devices, ensuring a clean, fast and secure system. We include driver installation, custom settings and performance optimization.",
                    imagem: "/Formatação.png"
                },
                {
                    titulo: "Web Development",
                    descricao: "We create modern, responsive and optimized websites to offer the best user experience. We work from landing pages to complete systems, aligned with your brand's visual identity and focused on performance.",
                    imagem: "/web.png"
                },
                {
                    titulo: "Technical Support",
                    descricao: "Quick and specialized service to solve technical problems in computers, networks and systems. Our team ensures that your infrastructure works without interruptions.",
                    imagem: "/Suporte.png"
                },
                {
                    titulo: "IT Consulting",
                    descricao: "We analyze and plan customized solutions to optimize your company's technological processes. We help in choosing software, infrastructure improvements and increasing digital security.",
                    imagem: "/Consutoria.png"
                },
                {
                    titulo: "Process Automation",
                    descricao: "We develop systems and scripts that automate repetitive tasks, reducing costs and increasing productivity. Ideal for companies looking for efficiency and agility.",
                    imagem: "/automação.png"
                },
                {
                    titulo: "Mobile Development",
                    descricao: "We create functional and intuitive applications for Android and iOS, whether for internal use in your company or for the general public. Always focusing on modern design and performance.",
                    imagem: "/Mobile.png"
                },
                {
                    titulo: "Database Management",
                    descricao: "We offer configuration, maintenance and optimization of databases, ensuring integrity, security and high performance in storing critical information for your business.",
                    imagem: "/dados.png"
                },
                {
                    titulo: "Visual Identity Creation",
                    descricao: "We assist in building or renewing your company's visual identity, developing logos, color palettes and graphic elements that reinforce credibility and highlight your brand in the market.",
                    imagem: "/Visual.png"
                },
                {
                    titulo: "Preventive Maintenance",
                    descricao: "We perform regular maintenance on equipment and systems to prevent failures, extend the life of devices and ensure greater stability and security in your company's daily operations.",
                    imagem: "/Manutenção.png"
                },
                {
                    titulo: "Video Editing and Production",
                    descricao: "We produce and edit high-quality institutional, commercial and promotional videos, helping your company communicate professionally and attractively on social media and marketing campaigns.",
                    imagem: "/Videos.png"
                }
            ]
        },
        perguntasFrequentes: {
            titulo: "Have any questions?",
            perguntas: [
                {
                    pergunta: "How does the development process work?",
                    resposta: "Our process is agile and collaborative, involving you in every step to ensure the final result meets your expectations."
                },
                {
                    pergunta: "What technologies do you use?",
                    resposta: "We use the latest and most appropriate technologies for your project, ensuring quality and performance."
                },
                {
                    pergunta: "Do you offer technical support?",
                    resposta: "Yes, we offer continuous technical support to ensure your website or system works perfectly."
                }
            ],
            botao: "I still have questions"
        },
        projetos: {
            titulo: "Some WebCode Projects",
            filtros: ["All", "Web", "Mobile", "Others"],
            lista: [
                {
                    nome: "Multimedia Conecta+",
                    descricao: "Controls loans, returns and student history, preventing book losses. Under renovation with new design, data analysis and user profiles.",
                    status: "Team, being redone individually",
                    categoria: "Web",
                    imagem: "/Multimeios.png",
                    tecnologias: ["Node.js", "Express", "React", "Vite", "ThunderClient", "MySQL", "phpMyAdmin", "Bootstrap", "Devicon"],
                    links: [
                        {
                            nome: "Repository",
                            url: "https://github.com/Ramon-24/Epgwa.Biblioteca",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/1zVI0wTpIatPfchkodyjRM/Multimeios-Conecta-?node-id=1-2&p=f&t=oQayHBR88UqNfUAw-0",
                            svg: <i className="devicon-figma-plain" />
                        }
                    ]
                },
                {
                    nome: "Gamefic",
                    descricao: "Landing page of an educational startup that combines gamification, children's reading and technology, with physical kits and interactive stories to bring children closer to books and parents.",
                    status: "Team",
                    categoria: "Web",
                    imagem: "/Gamefic4.png",
                    tecnologias: ["Next.js", "Vercel", "Bootstrap", "Devicon", "NPM", "i18next"],
                    links: [
                        {
                            nome: "Repository",
                            url: "https://github.com/Ramon-24/Gamefic",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                        },
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
                {
                    nome: "Automation with Gestures",
                    descricao: "Automation project with computer vision that recognizes hand gestures via webcam to control the computer. Presented at IT Week as an interactive way to teach automation, without using slides.",
                    status: "Team",
                    categoria: "Others",
                    imagem: "/projetos/automacao-gestos.jpg",
                    tecnologias: ["Python", "OpenCV", "PyAutoGUI", "Mediapipe"],
                    links: [
                        {
                            nome: "Repository",
                            url: "https://github.com/Ramon-24/robo",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                        }
                    ]
                },
                {
                    nome: "Random Questy",
                    descricao: "Application that has a raffle, a counter, a number guessing game, in addition to registration, login and history. It is being redone by me to improve the design, ensure real responsiveness and deepen the use of the platform, including custom logic with code.",
                    status: "Team, individual improvements",
                    categoria: "Mobile",
                    imagem: "/Random.png",
                    tecnologias: ["FlutterFlow", "SupaBase"],
                    links: [
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-flutter-plain" />
                        }
                    ]
                },
                {
                    nome: "Personal Portfolio",
                    descricao: "Focused on performance, accessibility and responsive design. Includes multi-language, light/dark mode, animations and contact form. In constant update.",
                    status: "In continuous development",
                    categoria: "Web",
                    imagem: "/Portifolio.png",
                    tecnologias: ["Next.js", "Vercel", "i18next", "Framer_Motion", "EmailJS", "Bootstrap", "Devicon"],
                    links: [
                        {
                            nome: "Repository",
                            url: "https://github.com/Ramon-24/Ramon_brandao",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/qI6Kpt6wHTyVFNQOZKOF74/Portifolio?node-id=0-1&p=f&t=fjzYlHexB8Cgn9YT-0",
                            svg: <i className="devicon-figma-plain" />
                        },
                        {
                            nome: "Demo",
                            url: "https://ramon-brandao.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
            ]
        },
        comentarios: {
            comentarios: [
                {
                    img: "/camila-torres.jpg",
                    nome: "Camila Torres",
                    data: "August 18th",
                    descricao: "The differential of WebCode is the proximity and care. Always ready to listen to my ideas and turn them into something even better. Today I receive daily compliments about my website and the experience it provides to my customers. The team was extremely attentive to every detail, from design to implementation of features."
                },
                {
                    img: "/mariana-souza.jpg",
                    nome: "Mariana Souza",
                    data: "August 18th",
                    descricao: "WebCode transformed my business's digital presence! The website became modern, fast and easy to use. The service was impeccable from start to finish, always with attention to detail and personalized solutions for my needs. Now I can reach many more customers and sales have increased significantly since the new website was launched."
                },
                {
                    img: "/carlos-rodrigues.jpg",
                    nome: "Carlos Rodrigues",
                    data: "September 10th",
                    descricao: "Amazing how WebCode understood exactly what I needed for my e-commerce. They developed a complete, secure platform with great performance. The payment process is fluid and I haven't had any complaints from customers. Highly recommend!"
                },
                {
                    img: "/patricia-almeida.jpg",
                    nome: "Patricia Almeida",
                    data: "October 5th",
                    descricao: "As a liberal professional, I needed a website that conveyed credibility and professionalism. WebCode not only delivered that, but exceeded all expectations. Now my clients find my work easily and my online portfolio makes all the difference."
                }
            ],
            titulo1: "The results of",
            titulo2: "WebCode",
            titulo3: "speak for themselves.",
            descricao: "Real stories from clients who trusted WebCode to create modern, professional solutions ready to generate results.",
            botao: "I want my project online",
            lista: [
                {
                    valor: "650",
                    mais: "+",
                    ponto: "Projects done"
                },
                {
                    valor: "600",
                    mais: "+",
                    ponto: "Satisfied customers"
                },
                {
                    valor: "2",
                    mais: "+",
                    ponto: "Years of experience"
                }
            ]
        },
        contato: {
            titulo: "Let's Talk?",
            subtitulo: "Contact Information",
            descricao: "I am available for opportunities, freelance projects or collaborations. Feel free to contact me through the channels below or through the form.",
            contatos: [
                {
                    tipo: "WhatsApp",
                    valor: "(88) 9 9378-6475",
                    icone: "whatsapp"
                },
                {
                    tipo: "Email",
                    valor: "webcode.empresa@gmail.com",
                    icone: "email"
                },
                {
                    tipo: "LinkedIn",
                    valor: "linkedin.com/in/webcode",
                    icone: "linkedin"
                },
                {
                    tipo: "Github",
                    valor: "github.com/webcode",
                    icone: "github"
                }
            ],
            formulario: {
                titulo: "Send a message",
                campos: [
                    {
                        nome: "Full Name",
                        tipo: "text",
                        obrigatorio: true
                    },
                    {
                        nome: "E-mail",
                        tipo: "email",
                        obrigatorio: true
                    },
                    {
                        nome: "Subject",
                        tipo: "text",
                        obrigatorio: true
                    },
                    {
                        nome: "Message",
                        tipo: "textarea",
                        obrigatorio: true
                    }
                ],
                botao: "Send Message"
            },
        },
        rodape: {
            titulo: "WebCode",
            descricao: "We connect your idea to the digital world.",
            Links: "Quick Links",
            Linkitens: ["Home", "About", "Services", "Projects", "Contact"],
            servicos: "Services",
            Servicoitens: ["Websites", "Applications", "Landing Pages", "Digital Marketing", "Visual Identity"],
            Contatos: "Contacts",
            Email: "webcode.empresa@gmail.com",
            Telefone: "(88) 9 9378-6475",
            Localidade: "Ceará, Brazil",
            direitos: "© 2024 WebCode. All rights reserved.",
            politica: "Privacy Policy",
            termos: "Terms of Use",
            aviso: "Legal Notice"
        }
    },


























    

    es: {
        nav: {
            nome: "WebCode",
            links: {
                inicio: "Inicio",
                sobre: "Sobre",
                servicos: "Servicios",
                projetos: "Proyectos",
                contato: "Contacto"
            }
        },
        hero: {
            fraseP1: "Conectamos tu ",
            fraseP2: " idea al ",
            fraseP3: " mundo digital ",
            descricao: "Con soluciones accesibles, personalizadas y pensadas para hacer crecer tu marca con impacto, estrategia y presencia online de verdad.",
            orcamento: "Solicita un presupuesto",
            trabalhos: "Ver nuestro trabajo"
        },
        sobre: {
            titulo1: "¿Qué puede",
            titulo2: " webcode",
            titulo3: " ofrecerte?",
            titulo4: "",
            descricao1: "Webcode puede ofrecerte soluciones tecnológicas rápidas, seguras y personalizadas, garantizando que tu negocio esté siempre en línea y funcionando con el mejor rendimiento.",
            descricao2: "Con un servicio cercano y soporte especializado, cuidamos cada detalle para que tengas más tiempo para enfocarte en lo que realmente importa: el crecimiento de tu proyecto.",
            qualificacao: {
                Suporte: "Soporte rápido y eficaz",
                Soluções: "Soluciones a medida",
                Segurança: "Seguridad y estabilidad",
                Atendimento: "Atención humanizada",
                Desempenho: "Rendimiento optimizado",
                Acompanhamento: "Seguimiento al cliente",
                Profissionais: "Profesionales cualificados",
                Tecnologia: "Tecnología de vanguardia"
            }
        },
        servicos: {
            titulo: "Servicios Prestados",
            saibaMais: "Saber más",
            cards: [
                {
                    titulo: "Formateo de Dispositivos",
                    descricao: "Realizamos el formateo completo de computadoras, portátiles y otros dispositivos, garantizando un sistema limpio, rápido y seguro. Incluimos instalación de controladores, configuraciones personalizadas y optimización del rendimiento.",
                    imagem: "/Formatação.png"
                },
                {
                    titulo: "Desarrollo Web",
                    descricao: "Creamos sitios modernos, responsivos y optimizados para ofrecer la mejor experiencia al usuario. Trabajamos desde páginas de aterrizaje hasta sistemas completos, alineados con la identidad visual de tu marca y enfocados en el rendimiento.",
                    imagem: "/web.png"
                },
                {
                    titulo: "Soporte Técnico",
                    descricao: "Atención rápida y especializada para resolver problemas técnicos en computadoras, redes y sistemas. Nuestro equipo garantiza que tu infraestructura funcione sin interrupciones.",
                    imagem: "/Suporte.png"
                },
                {
                    titulo: "Consultoría de TI",
                    descricao: "Analizamos y planificamos soluciones personalizadas para optimizar los procesos tecnológicos de tu empresa. Ayudamos en la elección de software, mejoras en la infraestructura y aumento de la seguridad digital.",
                    imagem: "/Consutoria.png"
                },
                {
                    titulo: "Automatización de Procesos",
                    descricao: "Desarrollamos sistemas y scripts que automatizan tareas repetitivas, reduciendo costos y aumentando la productividad. Ideal para empresas que buscan eficiencia y agilidad.",
                    imagem: "/automação.png"
                },
                {
                    titulo: "Desarrollo Móvil",
                    descricao: "Creamos aplicaciones funcionales e intuitivas para Android e iOS, ya sea para uso interno de tu empresa o para el público en general. Siempre con un enfoque en diseño moderno y rendimiento.",
                    imagem: "/Mobile.png"
                },
                {
                    titulo: "Gestión de Base de Datos",
                    descricao: "Ofrecemos configuración, mantenimiento y optimización de bases de datos, garantizando integridad, seguridad y alto rendimiento en el almacenamiento de información crítica para tu negocio.",
                    imagem: "/dados.png"
                },
                {
                    titulo: "Creación de Identidad Visual",
                    descricao: "Ayudamos en la construcción o renovación de la identidad visual de tu empresa, desarrollando logotipos, paletas de colores y elementos gráficos que refuercen la credibilidad y destaquen tu marca en el mercado.",
                    imagem: "/Visual.png"
                },
                {
                    titulo: "Mantenimiento Preventivo",
                    descricao: "Realizamos mantenimientos regulares en equipos y sistemas para evitar fallos, prolongar la vida útil de los dispositivos y garantizar mayor estabilidad y seguridad en el día a día de tu empresa.",
                    imagem: "/Manutenção.png"
                },
                {
                    titulo: "Edición y Producción de Videos",
                    descricao: "Producimos y editamos videos institucionales, comerciales y promocionales de alta calidad, ayudando a tu empresa a comunicarse de manera profesional y atractiva en las redes sociales y campañas de marketing.",
                    imagem: "/Videos.png"
                }
            ]
        },
        perguntasFrequentes: {
            titulo: "¿Tienes alguna duda?",
            perguntas: [
                {
                    pergunta: "¿Cómo funciona el proceso de desarrollo?",
                    resposta: "Nuestro proceso es ágil y colaborativo, involucrándote en cada etapa para garantizar que el resultado final cumpla con tus expectativas."
                },
                {
                    pergunta: "¿Qué tecnologías utilizan?",
                    resposta: "Utilizamos las tecnologías más recientes y adecuadas para tu proyecto, asegurando calidad y rendimiento."
                },
                {
                    pergunta: "¿Ofrecen soporte técnico?",
                    resposta: "Sí, ofrecemos soporte técnico continuo para garantizar que tu sitio o sistema funcione perfectamente."
                }
            ],
            botao: "Aún tengo dudas"
        },
        projetos: {
            titulo: "Algunos Proyectos WebCode",
            filtros: ["Todos", "Web", "Móvil", "Otros"],
            lista: [
                {
                    nome: "Multimedia Conecta+",
                    descricao: "Controla préstamos, devoluciones e historial de alumnos, evitando pérdidas de libros. En reformulación con nuevo diseño, análisis de datos y perfiles de usuarios.",
                    status: "Equipo, siendo rehecho individualmente",
                    categoria: "Web",
                    imagem: "/Multimeios.png",
                    tecnologias: ["Node.js", "Express", "React", "Vite", "ThunderClient", "MySQL", "phpMyAdmin", "Bootstrap", "Devicon"],
                    links: [
                        {
                            nome: "Repositorio",
                            url: "https://github.com/Ramon-24/Epgwa.Biblioteca",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/1zVI0wTpIatPfchkodyjRM/Multimeios-Conecta-?node-id=1-2&p=f&t=oQayHBR88UqNfUAw-0",
                            svg: <i className="devicon-figma-plain" />
                        }
                    ]
                },
                {
                    nome: "Gamefic",
                    descricao: "Landing page de una startup educativa que une gamificación, lectura infantil y tecnología, con kits físicos e historias interactivas para acercar a los niños a los libros y a los padres.",
                    status: "Equipo",
                    categoria: "Web",
                    imagem: "/Gamefic4.png",
                    tecnologias: ["Next.js", "Vercel", "Bootstrap", "Devicon", "NPM", "i18next"],
                    links: [
                        {
                            nome: "Repositorio",
                            url: "https://github.com/Ramon-24/Gamefic",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                        },
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
                {
                    nome: "Automatización con Gestos",
                    descricao: "Proyecto de automatización con visión por computadora que reconoce gestos de las manos a través de la cámara web para controlar la computadora. Presentado en la Semana de TI como forma interactiva de enseñar automatización, sin uso de diapositivas.",
                    status: "Equipo",
                    categoria: "Otros",
                    imagem: "/projetos/automacao-gestos.jpg",
                    tecnologias: ["Python", "OpenCV", "PyAutoGUI", "Mediapipe"],
                    links: [
                        {
                            nome: "Repositorio",
                            url: "https://github.com/Ramon-24/robo",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                        }
                    ]
                },
                {
                    nome: "Random Questy",
                    descricao: "Aplicación que tiene un sorteo, un contador, un juego de adivinar números, además de registro, inicio de sesión e historial. Está siendo rehecha por mí para mejorar el diseño, garantizar una respuesta real y profundizar en el uso de la plataforma, incluyendo lógica personalizada con código.",
                    status: "Equipo, mejoras individuales",
                    categoria: "Móvil",
                    imagem: "/Random.png",
                    tecnologias: ["FlutterFlow", "SupaBase"],
                    links: [
                        {
                            nome: "Demo",
                            url: "https://gamefic.vercel.app",
                            svg: <i className="devicon-flutter-plain" />
                        }
                    ]
                },
                {
                    nome: "Portafolio Personal",
                    descricao: "Centrado en el rendimiento, la accesibilidad y el diseño responsivo. Incluye multidioma, modo claro/oscuro, animaciones y formulario de contacto. En constante actualización.",
                    status: "En desarrollo continuo",
                    categoria: "Web",
                    imagem: "/Portifolio.png",
                    tecnologias: ["Next.js", "Vercel", "i18next", "Framer_Motion", "EmailJS", "Bootstrap", "Devicon"],
                    links: [
                        {
                            nome: "Repositorio",
                            url: "https://github.com/Ramon-24/Ramon_brandao",
                            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                        },
                        {
                            nome: "Figma",
                            url: "https://www.figma.com/design/qI6Kpt6wHTyVFNQOZKOF74/Portifolio?node-id=0-1&p=f&t=fjzYlHexB8Cgn9YT-0",
                            svg: <i className="devicon-figma-plain" />
                        },
                        {
                            nome: "Demo",
                            url: "https://ramon-brandao.vercel.app",
                            svg: <i className="devicon-nextjs-original" />
                        }
                    ]
                },
            ]
        },
        comentarios: {
            comentarios: [
                {
                    img: "/camila-torres.jpg",
                    nome: "Camila Torres",
                    data: "18 de Agosto",
                    descricao: "El diferencial de WebCode es la proximidad y el cuidado. Siempre listos para escuchar mis ideas y transformarlas en algo aún mejor. Hoy recibo elogios diarios por mi sitio web y por la experiencia que brinda a mis clientes. El equipo fue extremadamente atento en cada detalle, desde el diseño hasta la implementación de las funcionalidades."
                },
                {
                    img: "/mariana-souza.jpg",
                    nome: "Mariana Souza",
                    data: "18 de Agosto",
                    descricao: "¡WebCode transformó la presencia digital de mi negocio! El sitio web se volvió moderno, rápido y fácil de usar. El servicio fue impecable de principio a fin, siempre con atención a los detalles y soluciones personalizadas para mis necesidades. Ahora puedo llegar a muchos más clientes y las ventas aumentaron significativamente desde el lanzamiento del nuevo sitio web."
                },
                {
                    img: "/carlos-rodrigues.jpg",
                    nome: "Carlos Rodrigues",
                    data: "10 de Septiembre",
                    descricao: "Increíble cómo WebCode entendió exactamente lo que necesitaba para mi e-commerce. Desarrollaron una plataforma completa, segura y con un rendimiento excelente. El proceso de pago es fluido y no he tenido quejas de los clientes. ¡Super recomiendo!"
                },
                {
                    img: "/patricia-almeida.jpg",
                    nome: "Patricia Almeida",
                    data: "5 de Octubre",
                    descricao: "Como profesional liberal, necesitaba un sitio web que transmitiera credibilidad y profesionalismo. WebCode no solo entregó eso, sino que superó todas las expectativas. Ahora mis clientes encuentran mi trabajo fácilmente y mi portafolio en línea hace toda la diferencia."
                }
            ],
            titulo1: "Los resultados de",
            titulo2: "WebCode",
            titulo3: "hablan por sí mismos.",
            descricao: "Historias reales de clientes que confiaron en WebCode para crear soluciones modernas, profesionales y listas para generar resultados.",
            botao: "Quiero mi proyecto online",
            lista: [
                {
                    valor: "650",
                    mais: "+",
                    ponto: "Proyectos realizados"
                },
                {
                    valor: "600",
                    mais: "+",
                    ponto: "Clientes satisfechos"
                },
                {
                    valor: "2",
                    mais: "+",
                    ponto: "Años de experiencia"
                }
            ]
        },
        contato: {
            titulo: "¿Vamos a Conversar?",
            subtitulo: "Información de Contacto",
            descricao: "Estoy disponible para oportunidades, proyectos freelance o colaboraciones. Siéntete libre de contactarme a través de los canales below o por el formulario.",
            contatos: [
                {
                    tipo: "WhatsApp",
                    valor: "(88) 9 9378-6475",
                    icone: "whatsapp"
                },
                {
                    tipo: "Email",
                    valor: "webcode.empresa@gmail.com",
                    icone: "email"
                },
                {
                    tipo: "LinkedIn",
                    valor: "linkedin.com/in/webcode",
                    icone: "linkedin"
                },
                {
                    tipo: "Github",
                    valor: "github.com/webcode",
                    icone: "github"
                }
            ],
            formulario: {
                titulo: "Envía un mensaje",
                campos: [
                    {
                        nome: "Nombre Completo",
                        tipo: "text",
                        obligatorio: true
                    },
                    {
                        nome: "E-mail",
                        tipo: "email",
                        obligatorio: true
                    },
                    {
                        nome: "Asunto",
                        tipo: "text",
                        obligatorio: true
                    },
                    {
                        nome: "Mensaje",
                        tipo: "textarea",
                        obligatorio: true
                    }
                ],
                botao: "Enviar Mensaje"
            },
        },
        rodape: {
            titulo: "WebCode",
            descricao: "Conectamos tu idea al mundo digital.",
            Links: "Enlaces Rápidos",
            Linkitens: ["Inicio", "Sobre", "Servicios", "Proyectos", "Contacto"],
            servicos: "Servicios",
            Servicoitens: ["Sitios Web", "Aplicaciones", "Landing Pages", "Marketing Digital", "Identidad Visual"],
            Contatos: "Contactos",
            Email: "webcode.empresa@gmail.com",
            Telefone: "(88) 9 9378-6475",
            Localidade: "Ceará, Brasil",
            derechos: "© 2024 WebCode. Todos los derechos reservados.",
            politica: "Política de Privacidad",
            terminos: "Términos de Uso",
            aviso: "Aviso Legal"
        }
    }
};