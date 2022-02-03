import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { Container, TopCard, BottomCard } from './style';

import typeIcons from '../../utils/typeIcons';

interface ICard {
  type: Number,
  title: String,
  when: any,
  done: boolean
}

export default function TaskCard({ type, title, when, done }: ICard) {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hour = useMemo(() => format(new Date(when), 'HH:mm'), []);

  return (
    <Container done={done}>
      <TopCard>
        <img src={typeIcons[Number(type)]} alt={`Icone da Tarefa ${title}`} />
        <h1>{title}</h1>
      </TopCard>
      <BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </BottomCard>
    </Container>
  );
}