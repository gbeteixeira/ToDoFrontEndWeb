import React, { useState, useEffect } from 'react';
import { Container, FilterArea, Content, Title } from './style';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

interface ICard {
  type: Number,
  title: String,
  when: String,
}

export default function Home() {
  const [filterActived, setFilterActived] = useState("today");
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    await api.get(`task/filter/${filterActived}/11:11:11:11:11:11`)
      .then(response => {
        setTasks(response.data)
      })
  }

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterActived])

  return (
    <Container>
      <Header />
      <FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" active={filterActived === 'all'} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" active={filterActived === 'today'} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" active={filterActived === 'week'} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" active={filterActived === 'month'} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" active={filterActived === 'year'} />
        </button>
      </FilterArea>

      <Title>
        <h3>Tarefas</h3>
      </Title>

      <Content>
        {
          tasks.map((task: ICard, index: any) => (
            <TaskCard key={index} type={task.type} title={task.title} when={task.when} />
          ))
        }
      </Content>
      <Footer />
    </Container>
  );
}