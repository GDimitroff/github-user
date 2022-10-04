import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/login', { replace: true });
  };

  return (
    <nav className="nav">
      <Wrapper className="section section-center">
        <div className="left">
          <img src={user.photoURL} alt="Profile" referrerPolicy="no-referrer" />
          <h4>
            Welcome, <strong>{user.displayName.toUpperCase()}</strong>
          </h4>
        </div>
        <button onClick={logout}>logout</button>
      </Wrapper>
    </nav>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .left {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0;
  }

  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    background: transparent;
    border: transparent;
    font-size: 1.4rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--color-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
