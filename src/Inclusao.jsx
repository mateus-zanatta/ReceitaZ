import { useForm } from "react-hook-form"
import './Inclusao.css'
import Titulo from './components/Titulo'
import { useEffect } from "react"

function Inclusao() {
  const { register, handleSubmit, reset, setFocus } = useForm()

  async function cadastraReceita(data) {
    const titulo = data.titulo
    const tipo = data.tipo
    const porcoes = data.porcoes
    const tempo_preparo_min = data.tempo_preparo_min
    const ingredientes = data.ingredientes
    const modo_preparo = data.modo_preparo
    const imagem = data.imagem


    try {
      const resposta = await fetch("http://localhost:3000/receitas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo, tipo, porcoes, tempo_preparo_min, ingredientes, modo_preparo, imagem,
          comentarios: [], notas: []
        })
      })
      if (!resposta.ok) throw new Error("Erro ao incluir a receita")
      const novaReceita = await resposta.json()
      alert(`Ok! Receita cadastrada com o código: ${novaReceita.id}`)
    } catch (erro) {
      console.log(`Erro: ${erro.message}`)
    }
    reset()
  }

  useEffect(() => {
    setFocus("titulo")
  }, [])

  return (
    <>
      <Titulo />
      <div className='margem-esq'>
        <h1 style={{ 'margin-top': 0 }}>Inclusão de Receitas</h1>
        <form onSubmit={handleSubmit(cadastraReceita)}>
          <p>
            <label htmlFor="titulo">Título da Receita:</label>
            <input type="text" id="titulo" required
              className='campos larguraG'
              {...register("titulo")} />
          </p>
          <div className='duas-colunas'>
            <p>
              <label htmlFor="tipo">Tipo (ex: Sobremesa):</label>Rótulo**
              <input type="text" id="tipo" required
                className='campos larguraM'
                {...register("tipo")} />
            </p>
            <p>
              <label htmlFor="porcoes" className='margem-esq'>Porções:</label>
              <input type="number" id="porcoes" required
                className='campos larguraP margem-esq'
                {...register("porcoes")} />
            </p>
          </div>
          <div className='duas-colunas'>
            <p>
              <label htmlFor="ingredientes">Ingredientes:</label>
              <textarea id="ingredientes" required rows={2}
                className='campos larguraM'
                {...register("ingredientes")}></textarea>
            </p>
            <p>
              <label htmlFor="tempo_preparo_min" className='margem-esq'>Tempo de Prep. (min):</label>
              <input type="number" id="tempo_preparo_min" required
                className='campos larguraP margem-esq'
                {...register("tempo_preparo_min")} />
            </p>
          </div>
          <p>
            <label htmlFor="modo_preparo">Modo de Preparo:</label>
            <textarea id="modo_preparo" required rows={4}
              className='campos larguraG'
              {...register("modo_preparo")}></textarea>
          </p>
          <p>
            <label htmlFor="imagem">URL da Imagem da Receita:</label>
            <input type="url" id="imagem" required
              className='campos larguraG'
              {...register("imagem")} />
          </p>
          <input type="submit" value="Cadastrar" className='btn submit' />
          <input type="reset" value="Limpar" className='btn reset margem-esq' />
        </form>
      </div>
    </>
  )
}

export default Inclusao