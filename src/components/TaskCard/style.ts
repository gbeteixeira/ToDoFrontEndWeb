import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  width: 300px;
  height: 220px;
  box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover{
    opacity: 0.5;
  }
  
`;

export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 20px;
  }
`;

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  strong{
    color: ${theme.colors.primary};
    font-weight: bold;
  }

  span{
    color: ${theme.colors.note};
  }
`;