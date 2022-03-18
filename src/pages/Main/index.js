import React from "react";

import { 
  Container,
  Form,
  SubmitButton,
} from './styles';

import { 
  FaGithub,
  FaPlus, 
} from 'react-icons/fa';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorios
      </h1>

      <Form onSubmit={() => {}} >
        <input type="text" placeholder="Adicionar Repositorios" />

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