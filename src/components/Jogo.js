import palavras from "../palavras";

export default function Jogo({imagem, forcas : [forcas, setForcas], qtdErros: [erros, setQtdErros], palavras, escolhaPalavra: [palavraSorteada, setPalavra], underline: [underlineArray, setUnderline]}){



    function escolherPalavra () {
        const palavraEscolhida = palavras.sort(comparador).pop();

        const arrayPalavra = [];
        const novoUnderline = [];

        for(let i = 0; i < palavraEscolhida.length; i++){
            arrayPalavra.push(palavraEscolhida[i]);
            novoUnderline.push("_ ");
        }

        setUnderline(novoUnderline);
        setPalavra(arrayPalavra);
        setQtdErros(0)
    }



    function comparador(){
        return Math.random() - 0.5;
      }

    // Jogo (imagem da forca, botão de iniciar, palavra do jogo)
    return (
        <div className="jogo">
          <img src={imagem}></img>
          <div className="config">
              <button onClick={escolherPalavra}>Escolher Palavra</button>
              <div className="underlines">
                {underlineArray}
              </div>
          </div>
        </div>
      )
  }


