export default function Letras(props){

    const arrayLetras = props.letras;
    const palavraSorteada = props.palavraSorteada;
    const [underline, setUnderline] = props.underline;
    const [qtdErros, setQtdErros] = props.erros;
    const [tentativas, setTentativas] = props.tentativas;


    function escolherLetra(letra){
        if(palavraSorteada.includes(letra)){
            const novoUnderline = underline.map( (caractere, index) => palavraSorteada[index] == letra ? " " + letra : caractere);
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
        }

        return false;
    }

    return (
      <div className="letras">
        {arrayLetras.map( (letra, index) => {
          return (
            <button onClick={ () => escolherLetra(letra) } disabled={palavraSorteada.length == 0 ? true : checkEnable(letra)} key={index}>{letra}</button>
          ) 
        })}
      </div>
    )
  }
  