import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import mockUser from '../mockData/mockUser';
import mockRepos from '../mockData/mockRepos';
import mockFollowers from '../mockData/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubContextProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGitHub = () => {
  return useContext(GithubContext);
};

export default GithubContextProvider;
