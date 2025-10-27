import { useForm } from "react-hook-form"
import './Pesquisa.css'
import Titulo from './components/Titulo'
import { useState } from "react"
import CardReceita from "./components/CardReceita"

function Pesquisa() {
  const { register, handleSubmit } = useForm()
  const [receitas, setReceitas] = useState([])

  async function pesquisaReceitas(data) {
    try {
      const resposta = await fetch("http://localhost:3000/receitas")
      if (!resposta.ok) throw new Error("Erro ao consultar as receitas")
      const dados = await resposta.json()
      const dados2 = dados.filter(receita => (
        receita.titulo.toUpperCase().includes(data.pesquisa.toUpperCase()) ||
        receita.tipo.toUpperCase().includes(data.pesquisa.toUpperCase())
      ))
      if (dados2.length == 0) {
        alert("Não há receitas com a palavra-chave no título ou tipo")
      } else {
        setReceitas(dados2)
      }
    } catch (erro) {
      console.log("Erro: ", erro.message)
    }
  }

  const listaReceitas = receitas.map(receita => (
    <CardReceita key={receita.id} receita={receita} />
  ))

  return (
    <>
      <Titulo />
      <h1 style={{ 'margin-top': 0 }}>Pesquisa de Receitas</h1>
      <form className='form-pesquisa'
        onSubmit={handleSubmit(pesquisaReceitas)}>
        <input type="text" className='campo-pesquisa' required
          placeholder="Palavra chave do título ou tipo"
          {...register("pesquisa")} />
        <input type="submit" value="Pesquisar"
          className='btn-pesquisa' />
      </form>

      <section className='grid-receitas'>
        {listaReceitas}
      </section>
    </>
  )
}

export default Pesquisa