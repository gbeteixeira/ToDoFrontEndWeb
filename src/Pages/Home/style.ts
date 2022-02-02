import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  width: 100%;
`;

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;

  button{
    border: none;
    background: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.colors.background};
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  h3{
    color: ${theme.colors.background};
    position: relative;
    top: 30px;
    background: ${theme.colors.text};
    padding: 0px 20px;
  }
`;