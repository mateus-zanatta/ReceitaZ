import Swal from 'sweetalert2'
import './CardReceita.css'

function CardReceita({ receita, setReceitas }) {

  function avaliarReceita() {
    //alert("Vamos Avaliar...")
    Swal.fire({
      title: `<spam style="font-family: 'Arial'">
        Receita: ${receita.titulo}
        </spam>`,
      html: `
      <input type="text" class="swal2-input" placeholder="Seu nome"
             style="width: 300px">
      <input type="text" class="swal2-input" placeholder="Seu comentário"
             style="width: 300px">
      <input type="text" class="swal2-input" placeholder="Seu nota"
             style="width: 300px">
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }

  return (
    <div className='cards'>
      <img src={receita.imagem} alt={`Capa da Receita: ${receita.titulo}`} />
      <div>
        <h3>{receita.titulo}</h3>
        <h4>{receita.tipo} - {receita.tempo_preparo_min} min.</h4>
        <h4>Serve: {receita.porcoes} porções</h4>
        <p className="p-sinopse">{receita.modo_preparo.substring(0, 100)}...</p>
        <button className='btn-avaliar' onClick={avaliarReceita}>
          Avaliar
        </button>
        {receita.notas.length == 0 &&
          <img src="new.png" alt="Novo" className="new" />
        }
      </div>
    </div>
  )
}

export default CardReceita