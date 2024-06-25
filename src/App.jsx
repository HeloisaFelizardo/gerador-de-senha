import {useState} from 'react';
import {Container} from "react-bootstrap";


function App() {
  const [password, setPassword] = useState('');

  const validarNome = (nome) => {
    // Retorna true se o nome contiver pelo menos um espaço
    return nome.trim().includes(' ')

  }

  const obterSobrenome = (nome) => {
    // Divide o nome em partes e retorna o último nome em letras minúsculas
    const parts = nome.trim().split(' ')
    return parts[parts.length - 1].toLowerCase()
  }

  const contarVogais = (nome) => {
    // Conta o número de vogais no nome
    const vogais = nome.match(/[aeiouáéíóúãõâêîôûàèìòùäëïöü]/gi);
    const numVogais = vogais ? vogais.length : 0;
    return String(numVogais).padStart(2, '0');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    if (validarNome(nome)) {
      const sobreNome = obterSobrenome(nome)
      const numVogais = contarVogais(nome)
      setPassword(       `Senha Inicial: ${sobreNome + numVogais}`)
    } else {
      alert('Por favor, insire seu nome completo!')
    }

  }

  return (
    <Container className='app'>
      <h1>Gerador de Senha Inicial do Aluno</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" className="form-control" id="nome" required/>
        </div>
        <button type="submit" className="btn btn-primary">Gerar Senha</button>
      </form>
      <h2>{password}</h2>
    </Container>
  );
}

export default App;
