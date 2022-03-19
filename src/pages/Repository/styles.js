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

export const FilterList = styled.div`
  margin: 15px 0;

  button {
    padding: 8px;
    margin: 0 3px;

    outline: 0;

    border: 0;
    border-radius: 4px;

    &:nth-child(${props => props.active + 1}) {
      background: #0071db;
      color: #ffffff;
    }
  }
`;

export const BackButton = styled(Link)`
  border: 0;

  outline: 0;

  background: transparent;
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;

  border-top: 1px solid #eeeeee;

  list-style: none;

  li {
    display: flex;

    padding: 15px 10px;

    & + li {
      margin-top: 12px;
    }

    img {
      width: 36px;
      height: 36px;

      border-radius: 50%;
      border: 2px solid #0d2636;
    }

    div {
      margin-left: 12px;

      flex: 1;

      p {
        margin-top: 10px;

        font-size: 12px;

        color: #000000;
      }
    }

    strong {
      font-size: 15px;

      a {
        text-decoration: none;

        color: #222222;

        transform: 0.3s;

        &:hover {
          color: #0071db;
        }
      }

      span {
        padding: 5px 7px;
        margin-left: 10px;

        background: #222222;
        color: #ffffff;

        border-radius: 4px;

        font-size: 12px;
        font-weight: 600;
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 5px 10px;

    outline: 0;

    border: 0;
    border-radius: 4px;

    background: #222222;
    color: #ffffff;

    &:disabled {
      cursor: not-allowed;

      opacity: 0.5;
    }
  }
`;