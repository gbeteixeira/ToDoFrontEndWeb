import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    color: ${theme.colors.primary};
  }

  p{
    color: ${theme.colors.background};
  }

`;

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  span{
    text-transform: uppercase;
    font-weight: bold;
  }

  input{
    font-size: 18px;
    padding: 10px;
    text-align: center;
  }

  button{
    font-weight: bold;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-size: 18px;
    padding: 10px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 10px;

    &:hover{
      background: ${theme.colors.background};
    }
  }
`;