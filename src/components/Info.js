import styled from 'styled-components';
import axios from 'axios';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

import { useGitHub } from '../contexts/GithubContext';

const UserInfo = () => {
  const { githubUser } = useGitHub();
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'Repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: 'Followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: 'Following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: 'Gists',
      value: public_gists,
      color: 'yellow',
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem 3rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .item {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 4rem;
    padding: 2rem 3rem;
    border-radius: var(--radius);
    background: var(--color-white);

    span {
      width: 5rem;
      height: 5rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }

    .icon {
      font-size: 2.4rem;
    }

    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }

    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }

    .green {
      background: var(--color-primary-10);
      color: var(--color-primary-5);
    }

    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }

    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
