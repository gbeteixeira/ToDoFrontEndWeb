import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Container, FilterArea, Content, Title } from './style';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

interface ICard {
  id: String,
  type: Number,
  title: String,
  when: String,
  done: boolean,
}

export default function Home() {
  const [filterActived, setFilterActived] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTasks() {
    await api.get(`task/filter/${filterActived}/${isConnected}`)
      .then(response => {
        setTasks(response.data)
      })
  }



  useEffect(() => {
    loadTasks();

    if (!isConnected)
      setRedirect(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterActived]);

  function Notification() {
    setFilterActived("late");
  }

  return (
    <Container>
      {redirect && <Navigate to="/qrcode" />}
      <Header clickNotification={Notification} />

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
        <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </Title>

      <Content>
        {
          tasks.map((task: ICard, index: any) => (
            <Link to={`/task/${task.id}`}><TaskCard key={index} type={task.type} title={task.title} when={task.when} done={task.done} /></Link>
          ))
        }
      </Content>
      <Footer />
    </Container>
  );
}