import { BrowserRouter as Router } from 'react-router-dom';
import GithubContextProvider from './context/GithubContext';

const Providers = ({ children }) => {
  return (
    <GithubContextProvider>
      <Router>{children}</Router>
    </GithubContextProvider>
  );
};

export default Providers;
