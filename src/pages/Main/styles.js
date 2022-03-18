import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  margin: 80px auto;

  max-width: 700px;

  border-radius: 4px;

  box-shadow: 0 0 20px rgba(0,0,0, 0.2);

  background: #ffffff;

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 20px;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  margin-top: 30px;

  input {
    padding: 10px 15px;

    flex: 1;

    border: 1px solid #dddddd;
    border-radius: 4px;

    font-size: 17px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 10px;
  padding: 0 15px;
  
  border: 0;
  border-radius: 4px;

  background: #0d2636;
`;