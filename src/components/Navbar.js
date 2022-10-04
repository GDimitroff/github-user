import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <Wrapper>
      <div className="left">
        <img src={user.photoURL} alt="Profile" referrerPolicy="no-referrer" />
        <h4>
          Welcome, <strong>{user.displayName.toUpperCase()}</strong>
        </h4>
      </div>
      <button onClick={handleLogout}>logout</button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 2rem 3rem;
  margin-bottom: 5rem;
  background: var(--color-white);
  display: grid;
  grid-template-columns: auto 100px;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

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
