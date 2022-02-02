import styled from 'styled-components';
import { theme } from '../../theme';

interface ContainerFilter {
  active: boolean
}

export const Container = styled.div`
  width: 260px;
  height: 60px;
  background: ${(props: ContainerFilter) => props.active ? `${theme.colors.primary}` : `${theme.colors.background}`};
  padding: 10px;
  cursor: pointer;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 25px;
    height: 25px;
  }

  span{
    color: ${theme.colors.text};
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover{
    background: ${theme.colors.primary};
  }
`;