import styled from 'styled-components';
import { useGitHub } from '../context/GithubContext';

const Followers = () => {
  const { followers } = useGitHub();

  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--color-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: ' followers';
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

  .followers {
    height: 240px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.2rem;
    padding: 2rem;
    overflow-y: scroll;
  }

  article {
    transition: var(--transition);
    padding: 0.4rem 0.8rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;

    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }

    h4 {
      margin-bottom: 0;
    }

    a {
      color: var(--color-grey-5);
      font-size: 1.4rem;
    }
  }
`;

export default Followers;
