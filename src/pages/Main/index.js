import React, { useState, useCallback } from "react";

import { 
  Container,
  Form,
  SubmitButton,
  List,
  DeleteButton,
} from './styles';

import { 
  FaGithub,
  FaPlus,
  FaSpinner,
  FaBars,
  FaTrash,
} from 'react-icons/fa';

import api from '../../services/api';

function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    async function submit() {
      setLoading(true);

      try {
        const response = await api.get(`repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        };
  
        setRepositories([...repositories, data]);
        setNewRepo('');
      } catch(error) {
        console.log(error);
      } finally {
        setLoading(false);
      };
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

        <SubmitButton loading={loading ? 1 : 0} >
          {loading ? (
            <FaSpinner 
              color="#ffffff"
              size={14} 
            />
          ) : (
            <FaPlus
              color="#ffffff"
              size={14}
            />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map(repo => (
          <li key={repo.name} >
            <span>
              <DeleteButton onClick={() => {}}>
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>

            <a href="">
              <FaBars 
                size={20}
              />
            </a>
          </li>
        ))}
      </List>

    </Container>
  );
};

export default Main;