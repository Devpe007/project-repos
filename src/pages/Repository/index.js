import React, { useEffect, useState } from "react";

import { 
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  PageActions,
  FilterList,
} from './styles';

import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';

function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [filterList, setFilterList] = useState([
    { state: 'all', label: 'Todas', active: true },
    { state: 'open', label: 'Abertas', active: false },
    { state: 'closed', label: 'Fechadas', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    async function load() {
      const nameRepo = decodeURIComponent(match.params.repository);

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${nameRepo}`),
        api.get(`/repos/${nameRepo}/issues`, {
          params: {
            state: filterList.find(f => f.active).state,
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

  useEffect(() => {
    async function loadIssue() {
      const nameRepo = decodeURIComponent(match.params.repository);

      const response = await api.get(`/repos/${nameRepo}/issues`, {
        params: {
          state: filterList[filterIndex].state,
          page,
          per_page: 5,
        },
      });

      setIssues(response.data);
    };

    loadIssue();
  }, [filterList, filterIndex, match.params.repository, page]);

  function handlePage(action) {
    setPage(action === 'back' ? page -1 : page + 1);
  };

  function handleFilter(index) {
    setFilterIndex(index);
  };

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

      <FilterList active={filterIndex} >
        {filterList.map((filter, index) => (
          <button
            type="button"
            key={filter.label}
            onClick={() => handleFilter(index)}
          >
            {filter.label}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map((issues) => (
          <li key={String(issues.id)} >
            <img src={issues.user.avatar_url} alt={issues.user.login} />

            <div>
              <strong>
                <a href={issues.html_url}>{issues.title}</a>
                {issues.labels.map(label => (
                  <span key={String(label.id)} >
                    {label.name}
                  </span>
                ))}
              </strong>
              <p>{issues.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button type="button" onClick={() => handlePage('back')} disabled={page < 2} >
          Voltar
        </button>
        <button type="button" onClick={() => handlePage('next')} >
          Proxima
        </button>
      </PageActions>
    </Container>
  );
};

export default Repository;