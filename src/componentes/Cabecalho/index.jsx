import React from "react";
import logo from "./logo.png";
import search from "./search.png";

export const Cabecalho = () => {
  return (
    <header>
      <img src={logo} alt="Logo do Alura Space" />
      <div>
        <input type="text" placeholder="O que ovocê procura?" />
        <img src={search} alt="Ícone de lupa" />
      </div>
    </header>
  );
};
