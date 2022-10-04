import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import loginImg from '../images/login-img.svg';
import loadingImage from '../images/preloader.gif';

const Login = () => {
  const { user, loading, signInWithGoogle } = useAuth();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

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
        <button className="btn" onClick={handleLogin}>
          Login
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
