import React, { useState, useEffect, useContext } from 'react';

import mockUser from '../mockData/mockUser';
import mockRepos from '../mockData/mockRepos';
import mockFollowers from '../mockData/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubContextProvider = ({ children }) => {
  return (
    <GithubContext.Provider value="hello from context">
      {children}
    </GithubContext.Provider>
  );
};

export const useGitHub = () => {
  return useContext(GithubContext);
};

export default GithubContextProvider;
