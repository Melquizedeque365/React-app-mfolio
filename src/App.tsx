import { useState } from "react";
import { SlMenu, SlPhone } from "react-icons/sl";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiWordpress,
  SiReact,
  SiMysql,
  SiFirebase,
  SiNodedotjs,
  SiGmail,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import "./App.css";

function Nav() {
  var [openMenu, toggleMenu] = useState(false);
  function handleClick() {
    toggleMenu(!openMenu);
  }
  return (
    <header>
      <div className="interface">
        <a href="#">
          <img src="./assets/photo-p.jpg" alt="logo" />
        </a>
        <nav className="navbar">
          <a href="#home">Inicio</a>
          <a href="#about">Sobre</a>
          <a href="#technologics">Tecnologias</a>
          <a href="#projects">Projectos</a>
          <a href="#contact">Contacto</a>
        </nav>
        <div className="mobile-icon" onClick={handleClick}>
          <div>
            <SlMenu className="icon" />
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="mobile-navbar" style={{ display: "block" }}>
          <nav className="mobile-navbar-items">
            <a href="#home">Inicio</a>
            <a href="#about">Sobre</a>
            <a href="#technologics">Tecnologias</a>
            <a href="#projects">Projectos</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Main() {
  return (
    <main>
      <section id="home">
        <div className="interface">
          <div className="text-home">
            <h1>
              Seja <span>Bem-Vindo.</span>
            </h1>
            <p>
              Eu sou o Melquizedeque Manuel António, e neste guia você saberá um
              pouco mais sobre mim, as minhas habilidades, as tecnologias que
              uso, os projectos que desenvolvi, bem como os que participei.
            </p>
            <a
              href="https://ao.linkedin.com/in/melquizedeque-ant%C3%B3nio-394537268"
              className="btn"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <h2 className="title">
          Sobre <span>Mim.</span>
        </h2>
        <div className="interface">
          <div className="photo-about">
            <img src="./assets/photo-p.jpg" alt="photo-about" />
          </div>
          <div className="text-about">
            <p>
              Sou Licenciado, no curso de Ensino de Electrônica e
              Telecomunicações pela Universade Agostinho Neto.
            </p>
            <p>
              Desenvolvedor web, fiz o curso de Progração Web no CFITEL em 2023,
              e até o momento tenho trabalhado no desenvolvimento de Aplicações
              Web Front-end e Back-end.
            </p>
            <p>
              Designer Gráfico, em 2022 participei no treinamento de Design
              Gráfico e Multimédia, gosto, e tem sido gratificante até agora dar
              vida a projectos gráficas.
            </p>
            <a
              href="https://ao.linkedin.com/in/melquizedeque-ant%C3%B3nio-394537268"
              className="btn"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
      <section id="technologics">
        <h2 className="title">
          Tecnologias<span>.</span>
        </h2>
        <div className="interface">
          <div className="tech-box">
            <div className="text-technologics">
              <SiHtml5 className="icon" />
              <h2>Html</h2>
              <p>
                Uso para estruturar o conteúdo dos sites, e aplicações web que
                desenvolvo.
              </p>
            </div>
          </div>
          <div className="tech-box">
            <div className="text-technologics">
              <SiCss3 className="icon" />
              <h2>Css</h2>
              <p>
                Uso para estilizar elementos HTML de um site, melhorando assim
                toda a sua estética.
              </p>
            </div>
          </div>
          <div className="tech-box">
            <div className="text-technologics">
              <SiJavascript className="icon" />
              <h2>Javascript</h2>
              <p>
                Uso para deixar os sites que desenvolvo dinâmicos e interativos.
              </p>
            </div>
          </div>
          <div className="tech-box">
            <div className="text-technologics">
              <SiBootstrap className="icon" />
              <h2>Bootstrap</h2>
              <p>
                É uma framework CSS que tenho usado para organizar e gerenciar o
                layout de alguns Sites e Aplicações Web que desenvolvo.
              </p>
            </div>
          </div>
          <div className="tech-box">
            <div className="text-technologics">
              <SiWordpress className="icon" />
              <h2>Wordpress</h2>
              <p>É uma plataforma que utilizo para desenvolver sites.</p>
            </div>
          </div>
          <div className="tech-box">
            <div className="text-technologics">
              <SiReact className="icon" />
              <h2>React</h2>
              <p>
                É uma biblioteca que tenho usado para criar interfaces de
                usuário apartir de componentes.
              </p>
            </div>
          </div>
          <div className="tech-box">
            <div className="text-technologics">
              <SiMysql className="icon" />
              <h2>mysql</h2>
              <p>
                Uso como banco de dados local para as aplicações web que
                desenvolvo.
              </p>
            </div>
          </div>
          <div className="tech-box">
            <div className="text-technologics">
              <SiFirebase className="icon" />
              <h2>Firebase</h2>
              <p>
                Uso como banco de dados remoto para as aplicações web que
                desenvolvo.
              </p>
            </div>
          </div>
          <div className="tech-box">
            <div className="text-technologics">
              <SiNodedotjs className="icon" />
              <h2>NodeJS</h2>
              <p>
                Uso para desenvolver aplicações web mais robustas que necessitam
                de um servidor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2 className="title">
          Projectos<span>.</span>
        </h2>
        <div className="interface>
          <div className="project">
            <div className="photo-project">
              <img src="./assets/project-II.png" alt="photo-project" />
            </div>
            <div className="text-project">
              <h3>Portfolio.</h3>
              <p>
                É um Portfolio desenvolvido com Html, Css, Javascript. Foi
                criado com objectivo de atender a necessidade que os
                profisionais tem de se apresentarem aos clientes e empresas.
              </p>
              <a href="https://foliom.netlify.app/" className="btn">
                Visualizar
              </a>
            </div>
          </div>
          <div className="project">
            <div className="photo-project">
              <img src="./assets/project-III.png" alt="photo-project" />
            </div>
            <div className="text-project">
              <h3>Msimple.</h3>
              <p>
                É um projecto desenvolvido com Wordpress, que faz uma descrição
                da empresa modelo Msimple.
              </p>
              <a href="https://projectapp08.wordpress.com/" className="btn">
                Visualizar
              </a>
            </div>
          </div>
          <div className="project">
            <div className="photo-project">
              <img src="./assets/logo-s.jpg" alt="photo-project" />
            </div>
            <div className="text-project">
              <h3>Otechnology.</h3>
              <p>
                É um modelo de logo para uma empresa de tecnologia que deseja se
                distacar bem como diferenciar no mercado.
              </p>
              <a
                href="https://www.linkedin.com/services/page/a80a20331571134685"
                className="btn"
              >
                Visualizar
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2 className="title">
          Contacto<span>.</span>
        </h2>
        <div className="interface">
          <div className="text-info-contact">
            <h2>Entre em contacto</h2>
            <p>Para adquirir os meus serviços, e obter mais informações.</p>
          </div>
          <div className="text-contact">
            <span>
              <SiGmail className="icon" />
              <p>melquizedequemanuel@gmail.com</p>
            </span>
            <span>
              <SlPhone className="icon" />
              <p>932665520 | 958365840</p>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <section className="interface">
        <a
          href="https://www.facebook.com/melquisedequemanuel.antoniovava"
          style={{ margin: "0 3px" }}
        >
          <SiFacebook className="icon" />
        </a>
        <a
          href="https://www.instagram.com/melquizedeque.ma"
          style={{ margin: "0 3px" }}
        >
          <SiInstagram className="icon" />
        </a>
        <a
          href="https://ao.linkedin.com/in/melquizedeque-ant%C3%B3nio-394537268"
          style={{ margin: "0 3px" }}
        >
          <SiLinkedin className="icon" />
        </a>
      </section>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
