import styled from 'styled-components';

import Card from './Card';
import Followers from './Followers';

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

export default User;
