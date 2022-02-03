import styled from 'styled-components';
import { theme } from '../../theme'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${theme.colors.background};
  border-bottom: 5px solid ${theme.colors.primary};

  display: flex;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img{
    width: 100px;
    height: 40px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a, button{
    color: ${theme.colors.text};
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover{
      color: ${theme.colors.primary};
    }
  }

  #notification{
    cursor: pointer;
    background: none;
    border: none;

    img{
      width: 25px;
      height: 30px;
    }
    span{
      background: ${theme.colors.text};
      color: ${theme.colors.primary};
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover{
      opacity: 0.5;
    }
  }

  .dividir::after{
     content: "|";
     margin: 0 10px;
     color: ${theme.colors.text};
  }

  button{
    font-size: 16px;
    background: none;
    border: none;
  }
`;