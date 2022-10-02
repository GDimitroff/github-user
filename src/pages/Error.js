import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry, the page you are looking for cannot be found.</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--color-primary-10);
  text-align: center;

  h1 {
    font-size: 16rem;
  }

  h3 {
    color: var(--color-grey-3);
    margin-bottom: 3.6rem;
  }
`;

export default Error;
