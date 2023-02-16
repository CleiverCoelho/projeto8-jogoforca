export default function Letras(props){

    const arrayLetras = props.letras;
    const palavraSorteada = props.palavraSorteada;
    const [underline, setUnderline] = props.underline;
    const [qtdErros, setQtdErros] = props.erros;


    function escolherLetra(letra){
        if(palavraSorteada.includes(letra)){
            const novoUnderline = underline.map( (caractere, index) => palavraSorteada[index] == letra ? " " + letra : caractere);
            setUnderline(novoUnderline);
        }else{
            setQtdErros(qtdErros + 1);
        }
    }

  
    return (
      <div className="letras">
        {arrayLetras.map( (letra, index) => {
          return (
            <button onClick={ () => escolherLetra(letra) } disabled={palavraSorteada.length > 0 ? false : true} key={index}>{letra}</button>
          ) 
        })}
      </div>
    )
  }