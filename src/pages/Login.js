import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

import loginImg from '../images/login-img.svg';

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

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
