import React from "react";
import { Cabecalho } from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import banner from "./banner.png";
import styles from "./paginaInicial.module.scss";

export const PaginaInicial = () => {
  return (
    <div>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
      </main>
    </div>
  );
};
