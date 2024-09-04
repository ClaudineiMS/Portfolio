import React from "react";
import '../css/About.css';

export const AboutContent = () => {
    return (
        <div className="overlay-content">
            <div className="Title">Sobre mim</div>
            <div className="about">
                <p>
                    Sou desenvolvedor fullstack com sólida experiência em tecnologias modernas como ReactJS, Django, HTML, CSS, JavaScript, e bancos de dados SQL/NoSQL. Atuo no desenvolvimento de aplicações tanto no front-end quanto no back-end, utilizando React com Redux e Hooks para interfaces dinâmicas e Django REST Framework para criação de APIs robustas. Além disso, possuo conhecimentos em Docker, Git, CI/CD e trabalho em ambientes ágeis com metodologias como Scrum e Kanban.
                </p>
                <p>
                    Atualmente, sou Analista de Desenvolvimento Fullstack na Agência Zetta, onde desenvolvo soluções web de geoprocessamento voltadas para perícias de crimes ambientais, integrando tecnologias como Geonode, MapStore e Geoserver. Tenho experiência na supervisão de novos desenvolvedores e no desenvolvimento e manutenção de sistemas críticos.
                </p>
                <p>
                    Minha formação em Ciências da Computação pela Universidade Federal de Lavras (UFLA) e minha experiência prática me permitem enfrentar desafios de desenvolvimento com foco na eficiência e na inovação. Sou apaixonado por criar soluções tecnológicas escaláveis e de impacto, e estou sempre em busca de aprimorar minhas habilidades e expandir meus conhecimentos.
                </p>
            </div>
        </div> );
}