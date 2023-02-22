import palavras from "../palavras";

export default function Jogo({imagem, forcas : [forcas, setForcas], 
  qtdErros: [erros, setQtdErros], palavras, escolhaPalavra: [palavraSorteada, setPalavra], 
  underline: [underlineArray, setUnderline], tentativas: [tentativas, setTentativas], fimJogo}){


    function escolherPalavra () {
        const palavraEscolhida = palavras.sort(comparador).pop();

        const arrayPalavra = [];
        const novoUnderline = [];

        // transformando string selecionada em um array para facilitar manipulacao
        for(let i = 0; i < palavraEscolhida.length; i++){
            arrayPalavra.push(palavraEscolhida[i]);
            novoUnderline.push(" _");
        }

        // mudando estado para exibir o underline na tela
        setUnderline(novoUnderline);
        setPalavra(arrayPalavra);
        setTentativas([]);
        setQtdErros(0);
    }

    function checaVitoria(){
      if(erros === 6){
        return "vermelho"
      }else{
        return null;
      }
    }

    function comparador(){
        return Math.random() - 0.5;
      }

    // Jogo (imagem da forca, botão de iniciar, palavra do jogo)
    // caso ele vença mostra o array underline com a palavra correta em verde
    // caso ele perca, revela a palavra sorteada no inicio em vermelho
    // underlineArray eh uma props que vem de um estado do App
    return (
        <div className="jogo">
          <img data-test="game-image" src={imagem}></img>
          <div className="config">
              <button data-test="choose-word" onClick={escolherPalavra}>Escolher Palavra</button>
              <div data-test="word" className={`underlines ${fimJogo(underlineArray) ? "verde" : checaVitoria()}`}>
                {erros === 6 ? palavraSorteada : underlineArray}
              </div>
          </div>
        </div>
      )
  }


