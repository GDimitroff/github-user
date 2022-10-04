import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

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
        <button className="btn" onClick={() => signInWithGithub()}>
          Sign in with Github
        </button>
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
    margin-bottom: 2rem;
  }
`;

export default Login;
