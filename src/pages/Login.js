import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { FiGithub } from 'react-icons/fi';

import loginImg from '../images/login-img.svg';
import loadingImage from '../images/preloader.gif';

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  if (loading) {
    return <img src={loadingImage} alt="Loading" className="loading" />;
  }

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>GitHub User</h1>
        <div className="action">
          <button onClick={() => signInWithGithub()} className="github-btn">
            <FiGithub className="icon" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }

  img {
    margin-bottom: 3rem;
  }

  h1 {
    margin-bottom: 3rem;
  }

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font-family: inherit;
    text-transform: uppercase;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 1rem 2rem;
    border: none;
    border-radius: var(--radius);
    background-color: var(--color-white);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    cursor: pointer;
  }

  button:hover,
  button:active {
    box-shadow: var(--dark-shadow);
    color: var(--color-white);
    background-color: var(--color-grey-4);
  }

  .icon {
    font-size: 1.8rem;
  }
`;

export default Login;
