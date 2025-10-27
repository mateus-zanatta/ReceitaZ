import { Link } from 'react-router'
import './Titulo.css'

export default function Titulo() {
  return (
    <>
      <header>
        <img src="./logo.png" alt="Receitas" />
        <div>
          <h1>Controle de Receitas do Elinton e do Mateus</h1>
          <h2>Sugestões e Avaliações de Receitas</h2>
          <h1>Fique à vontade! Use, avalie e compartilhe...</h1>
        </div>
      </header>
      <nav>
        <Link to="/" className='links'>Home</Link>&nbsp;&nbsp;
        <Link to="/inclusao" className='links'>Inclusão</Link>&nbsp;&nbsp;
        <Link to="/pesquisa" className='links'>Pesquisa</Link>&nbsp;&nbsp;
      </nav>
    </>
  )
}