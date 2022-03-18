import React, { useState, useCallback } from "react";

import { 
  Container,
  Form,
  SubmitButton,
} from './styles';

import { 
  FaGithub,
  FaPlus, 
} from 'react-icons/fa';

import api from '../../services/api';

function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    async function submit() {
      const response = await api.get(`repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      setRepositories([...repositories, data]);
      setNewRepo('');
    };

    submit();
  }, [newRepo, repositories]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  };

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorios
      </h1>

      <Form onSubmit={handleSubmit} >
        <input 
          type="text" 
          placeholder="Adicionar Repositorios"
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton>
          <FaPlus
            color="#ffffff"
            size={14}
          />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;