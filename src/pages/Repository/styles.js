import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  color: #ffffff;
`;

export const Container = styled.div`
  padding: 30px;
  margin: 80px auto;

  max-width: 700px;

  border-radius: 4px;

  box-shadow: 0 0 20px rgba(0,0,0, 0.2);

  background: #ffffff;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 20px 0;

    width: 150px;

    border-radius: 20%;
  }

  h1 {
    font-size: 30px;

    color: #0d2636;
  }

  p {
    margin-top: 5px;

    max-width: 400px;

    font-size: 14px;

    color: #000000;

    text-align: center;
    line-height: 1.4;
  }
`;

export const BackButton = styled(Link)`
  border: 0;

  outline: 0;

  background: transparent;
`;