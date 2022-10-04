import { BrowserRouter as Router } from 'react-router-dom';
import GithubContextProvider from './context/GithubContext';
import AuthContextProvider from './context/AuthContext';

const Providers = ({ children }) => {
  return (
    <AuthContextProvider>
      <GithubContextProvider>
        <Router>{children}</Router>
      </GithubContextProvider>
    </AuthContextProvider>
  );
};

export default Providers;
