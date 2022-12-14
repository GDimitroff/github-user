import { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useGitHub } from '../context/GithubContext';

const Search = () => {
  const { requests, error, searchGithubUser } = useGitHub();
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      searchGithubUser(user);
    }
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="Search for GitHub user..."
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <h3>Requests: {60 - requests} / 60</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;

    h3 {
      padding: 0 0.5rem;
    }
  }

  .form-control {
    background: var(--color-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.8rem;
    border-radius: 6px;
    padding: 0.8rem;

    input {
      font-family: inherit;
      border-color: transparent;
      outline-color: var(--color-grey-10);
      letter-spacing: var(--spacing);
      color: var(--color-grey-3);
      padding: 0.4rem 0.8rem;
    }

    input::placeholder {
      font-family: inherit;
      color: var(--color-grey-3);
      letter-spacing: var(--spacing);
    }

    button {
      border-radius: 6px;
      border-color: transparent;
      padding: 0.4rem 0.8rem;
      letter-spacing: var(--spacing);
      background: var(--color-primary-5);
      color: var(--color-white);
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        background: var(--color-primary-8);
        color: var(--color-primary-1);
      }
    }

    svg {
      color: var(--color-grey-5);
    }

    input,
    button,
    svg {
      font-size: 1.4rem;
    }

    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 1.2rem;
      }
    }
  }

  h3 {
    font-weight: 400;
    margin-bottom: 0;
    color: var(--color-grey-5);
  }
`;

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: -25px;
  left: 0;

  p {
    font-size: 1.2rem;
    color: red;
    letter-spacing: var(--spacing);
  }
`;

export default Search;
