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
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const searchGithubUser = async (user) => {
    toggleError();
    // setLoading

    try {
      const response = await axios.get(`${rootUrl}/users/${user}`);
      setGithubUser(response.data);
      // more logic here
    } catch (error) {
      toggleError(true, 'There is no user with that username!');
      console.log(error);
    }
  };

  const checkRequests = async () => {
    try {
      const { data } = await axios.get(`${rootUrl}/rate_limit`);
      let {
        rate: { remaining },
      } = data;

      setRequests(remaining);

      if (remaining === 0) {
        toggleError(true, 'Sorry, you have exceeded your hourly rate limit!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGitHub = () => {
  return useContext(GithubContext);
};

export default GithubContextProvider;
