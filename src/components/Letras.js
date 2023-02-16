export default function Letras(props){

    const arrayLetras = props.letras;
    const palavraSorteada = props.palavraSorteada;
    const [underline, setUnderline] = props.underline;


    console.log(palavraSorteada);

    function escolherLetra(letra){
        const indexLetras = [];
        if(palavraSorteada.includes(letra)){
            for(let i in palavraSorteada){
                if(palavraSorteada[i] == letra) indexLetras.push(i);
            }

            const novoUnderline = underline.filter( (underline, index) => indexLetras[index] == index ? letra : underline );
            console.log(novoUnderline);
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