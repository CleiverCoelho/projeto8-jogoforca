import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";


import React from "react";
import listaPalavras from "./palavras";

import Jogo from "./components/Jogo"
import Letras from "./components/Letras"


export default function App() {

  const stateForca = React.useState([forca0, forca1, forca2, forca3, forca4, forca5, forca6]);
  const stateErros = React.useState(0);
  const statePalavraSorteada = React.useState([]);
  const stateUnderline = React.useState([]);
  const stateTentativas = React.useState([]);
  const stateFimJogo = React.useState([]);

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const [palavraSorteada, setPalavra] = statePalavraSorteada;
  const [forcas, setForcas] = stateForca;
  const [qtdErros, setQtdErros] = stateErros;
  const [underline, setUnderline] = stateUnderline;
  const [tentativas, setTentativas] = stateTentativas;

  // console.log(palavraSorteada);

  function fimDoJogo(underline){
    const novoLetrasFaltam = underline.map( caractere => caractere === "_" ? true : false );
    for(let i in novoLetrasFaltam){
      if(novoLetrasFaltam[i]){
        return false;
      }
    }
    return true;
  }

  return (
    <div className="App">
      <Jogo 
        imagem={forcas[qtdErros]} 
        forcas={stateForca} 
        qtdErros={stateErros}
        palavras={listaPalavras}
        escolhaPalavra={statePalavraSorteada}
        underline = {stateUnderline}
        tentativas={stateTentativas}
        fimJogo={fimDoJogo}
      ></Jogo>
      <Letras 
        letras={alfabeto}
        palavraSorteada={palavraSorteada}
        underline={stateUnderline}
        erros={stateErros}
        tentativas={stateTentativas}
        fimJogo={fimDoJogo}
        ></Letras>
    </div>
  );
}

