import React from 'react';
import { Container, } from './style';

import filter from '../../assets/filter.png';

interface Props {
  title: string,
  active?: boolean,
}

export default function FilterCard({ title, active = false }: Props) {
  return (
    <Container active={active}>
      <img src={filter} alt="Filtro" />
      <span>{title}</span>
    </Container>
  );
}