import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  width: 50%;
  margin-bottom: 70px;
`;

export const IconsType = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative{
    opacity: 0.5;
  }

  button{
    background: none;
    border: none;
  }
  
  img{
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: ${theme.colors.shape};
    margin: 5px 0;
  }

  input{
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid ${theme.colors.primary};
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    color: transparent;
    background: none;
    z-index: 1;
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
    color: transparent;
    background: none;
    z-index: 1;
  }

  img{
    width: 20px;
    height: 20px;
    position: relative;
    left: 95%;
    bottom: 30px;
  }
`;

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: ${theme.colors.shape};
    margin: 5px 0;
  }

  textarea{
    font-size: 16px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 10px;
  }

`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};
    font-weight: bold;
    font-size: 18px;
  }

  button{
    color: ${theme.colors.background};
    font-weight: bold;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`;

export const Save = styled.div`
  width: 100%;
  margin-top: 20px;

  button{
    width: 100%;
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
    border: none;
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
    border-radius: 30px;
    cursor: pointer;
    
    &:hover{
      opacity: 0.7;
    }
  }
`;