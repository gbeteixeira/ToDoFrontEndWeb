import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: ${theme.colors.background};
  border-top: 5px solid ${theme.colors.primary};

  position: fixed;
  bottom: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  span{
    color: ${theme.colors.text};
  }
`;