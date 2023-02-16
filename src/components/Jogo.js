import palavras from "../palavras";

export default function Jogo({imagem, forcas : [forcas, setForcas], qtdErros: [erros, setQtdErros], palavras, escolhaPalavra: [palavraSorteada, setPalavra], underline: [underlineArray, setUnderline], tentativas: [tentativas, setTentativas]}){

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

    function comparador(){
        return Math.random() - 0.5;
      }

    // Jogo (imagem da forca, botão de iniciar, palavra do jogo)
    // underlineArray eh uma props que vem de um estado do App
    return (
        <div className="jogo">
          <img data-test="game-image" src={imagem}></img>
          <div className="config">
              <button data-test="choose-word" onClick={escolherPalavra}>Escolher Palavra</button>
              <div data-test="word" className={`underlines`}>
                {underlineArray}
              </div>
          </div>
        </div>
      )
  }


