import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import CardReceita from './components/CardReceita'

function App() {
  const [receitas, setReceitas] = useState([])

  useEffect(() => {
    async function buscarReceitas() {
      try {
        const resposta = await fetch("http://localhost:3000/receitas")
        if (!resposta.ok) throw new Error("Erro ao consultar as Receitas")
        const dados = await resposta.json()
        setReceitas(dados.reverse())
      } catch (erro) {
        console.log("Erro: ", erro.message)
      }
    }
    buscarReceitas()
  }, [])

  const listaReceitas = receitas.map(receita => (
    <CardReceita key={receita.id} receita={receita} setReceitas={setReceitas} />
  ))

  return (
    <>
      <Titulo />
      <h1 style={{ 'margin-top': 0 }}>Lista de Receitas Cadastradas</h1>
      <section className='grid-receitas'>
        {listaReceitas}
      </section>
    </>
  )
}

export default App
