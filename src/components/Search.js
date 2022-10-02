import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const Search = () => {
  return <h2>search component</h2>;
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;

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
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;

    input {
      border-color: transparent;
      outline-color: var(--color-grey-10);
      letter-spacing: var(--spacing);
      color: var(--color-grey-3);
      padding: 0.25rem 0.5rem;
    }

    input::placeholder {
      color: var(--color-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }

    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
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
      font-size: 1.3rem;
    }

    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }

  h3 {
    margin-bottom: 0;
    color: var(--color-grey-5);
    font-weight: 400;
  }
`;

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;

  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;

export default Search;