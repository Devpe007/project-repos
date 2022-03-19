import React, { useEffect, useState } from "react";

import { Container } from './styles';

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
  }, []);

  return (
    <Container>

    </Container>
  );
};

export default Repository;