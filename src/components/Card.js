import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

import { useGitHub } from '../contexts/GithubContext';

const Card = () => {
  const { githubUser } = useGitHub();
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || 'john doe'}</p>
        </div>
        <a href={html_url}>Follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness />
          {company}
        </p>
        <p>
          <MdLocationOn />
          {location || 'Earth'}
        </p>
        <a href={`https://${blog}`}>
          <MdLink />
          {blog}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--color-white);
  padding: 2.4rem 3.2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--color-white);
    color: var(--color-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.6rem 1.2rem 0.2rem 1.2rem;
    letter-spacing: var(--spacing);
    font-size: 1.4rem;
  }

  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1.4rem;
    margin-bottom: 1.6rem;

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }

    h4 {
      margin-bottom: 0.25rem;
    }

    a {
      color: var(--color-primary-5);
      border: 1px solid var(--color-primary-5);
      padding: 0.4rem 1.4rem;
      margin-top: 1rem;
      border-radius: 2rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        background: var(--color-primary-5);
        color: var(--color-white);
      }
    }
  }

  @media (min-width: 440px) {
    header {
      grid-template-columns: auto 1fr auto;

      a {
        margin-top: 0;
      }
    }
  }

  .bio {
    color: var(--color-grey-3);
  }

  .links {
    p,
    a {
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.6rem;
        font-size: 1.6rem;
      }
    }

    a {
      color: var(--color-primary-5);
      transition: var(--transition);

      svg {
        color: var(--color-grey-5);
      }

      &:hover {
        color: var(--color-primary-3);
      }
    }
  }
`;

export default Card;
