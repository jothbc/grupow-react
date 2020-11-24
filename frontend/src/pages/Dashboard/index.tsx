import React from 'react';
import { FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import { Container, NewPost, Post } from './styles';

import ImgTemp from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <NewPost>
          <h2>No que você esta pensando?</h2>
          <div>
            <textarea placeholder="Digite sua mensagem..." />
            <span />
          </div>
        </NewPost>

        <Post>
          <img src={ImgTemp} alt="" />
          <div>
            <h4>Jonathan CR</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              asperiores minima accusamus cumque ut culpa, corrupti mollitia
              saepe facere doloremque iste expedita unde accusantium quibusdam
              odio et. Aperiam, id itaque!
            </p>
            <span>
              <FiClock color="#ff9000" />
              08:00
            </span>
          </div>
        </Post>

        <Post>
          <img src={ImgTemp} alt="" />
          <div>
            <h4>Jonathan CR</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              asperiores minima accusamus cumque ut culpa, corrupti mollitia
              saepe facere doloremque iste expedita unde accusantium quibusdam
              odio et. Aperiam, id itaque!
            </p>
            <span>
              <FiClock color="#ff9000" />
              08:00
            </span>
          </div>
        </Post>

        <Post>
          <img src={ImgTemp} alt="" />
          <div>
            <h4>Jonathan CR</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              asperiores minima accusamus cumque ut culpa, corrupti mollitia
              saepe facere doloremque iste expedita unde accusantium quibusdam
              odio et. Aperiam, id itaque!
            </p>
            <span>
              <FiClock color="#ff9000" />
              08:00
            </span>
          </div>
        </Post>
      </Container>
    </>
  );
};

export default Dashboard;
