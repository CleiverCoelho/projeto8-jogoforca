export default function Letras(props){

    const arrayLetras = props.letras;
    const palavraSorteada = props.palavraSorteada;
    const [underline, setUnderline] = props.underline;
    const [qtdErros, setQtdErros] = props.erros;
    const [tentativas, setTentativas] = props.tentativas;

    // console.log("Declarado fim do jogo: " + props.fimJogo(underline));
    function escolherLetra(letra){
        if(palavraSorteada.includes(letra)){
            // modifica o array underline para mostra a letra acertada
            const novoUnderline = underline.map( (caractere, index) => palavraSorteada[index] === letra ? " " + letra : caractere);
            setUnderline(novoUnderline);
        }else{
            setQtdErros(qtdErros + 1);
        }
        const novaTentivas = [...tentativas, letra];
        setTentativas(novaTentivas);
    }

    function checkEnable(letra){

      if(tentativas.includes(letra)){
        return true;
      }else{
        if(qtdErros === 0){
          return false;
        }
      }
      return false;
    }

    function checkSentence(letra){
      const inicioJogo = palavraSorteada.length === 0;
      const perdeuJogo = qtdErros === 6;
      const fimDoJogo = props.fimJogo(underline);

      if(inicioJogo || perdeuJogo || fimDoJogo){
        return true;
      }
      return false;
    }

    // botao desabilitado no inicio e fim do jogo, muda de estado enquanto o jogo nao termina 
    return (
      <div className="letras">
        {arrayLetras.map( (letra, index) => {
          return (
            <button data-test="letter" onClick={ () => escolherLetra(letra) } disabled={checkSentence() ? true : checkEnable(letra)} key={index}>{letra}</button>
          ) 
        })}
      </div>
    )
  }
  