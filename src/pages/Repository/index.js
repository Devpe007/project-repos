import React, { useEffect, useState } from "react";

import { 
  Container,
  Owner,
  Loading,
  BackButton,
} from './styles';

import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';

function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const nameRepo = decodeURIComponent(match.params.repository);

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${nameRepo}`),
        api.get(`/repos/${nameRepo}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);

      setRepository(repositoryData.data);
      setIssues(issuesData.data);
      
      setLoading(false);
    };

    load();
  }, [match.params.repository]);

  if(loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  };

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft 
          color="#000000" 
          size={35}
        />
      </BackButton>

      <Owner>
        <img 
          src={repository.owner.avatar_url} 
          alt={repository.owner.login} 
        />

        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>
    </Container>
  );
};

export default Repository;