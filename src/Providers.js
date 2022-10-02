import { BrowserRouter as Router } from 'react-router-dom';
import GithubContextProvider from './contexts/GithubContext';

const Providers = ({ children }) => {
  //TODO: Add auth provider
  return (
    <GithubContextProvider>
      {/* <AuthProvider> */}
      <Router>{children}</Router>
      {/* </AuthProvider> */}
    </GithubContextProvider>
  );
};

export default Providers;
