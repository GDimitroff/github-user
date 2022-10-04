import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

import mockUser from '../mockData/mockUser';
import mockRepos from '../mockData/mockRepos';
import mockFollowers from '../mockData/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubContextProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  // TODO: think about initial state
  console.log(user);

  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);

    try {
      const userResponse = await axios.get(`${rootUrl}/users/${user}`);
      setGithubUser(userResponse.data);

      const { repos_url, followers_url } = userResponse.data;
      const [reposResponse, followerResponse] = await Promise.allSettled([
        axios.get(`${repos_url}?per_page=100`),
        axios.get(`${followers_url}?per_page=100`),
      ]);

      if (reposResponse.status === 'fulfilled') {
        setRepos(reposResponse.value.data);
      }

      if (followerResponse.status === 'fulfilled') {
        setFollowers(followerResponse.value.data);
      }

      checkRequests();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toggleError(true, error.response?.data?.message || error.message);
      setIsLoading(false);
    }
  };

  const checkRequests = useCallback(async () => {
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
  }, []);

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  useEffect(() => {
    checkRequests();
  }, [checkRequests]);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGitHub = () => {
  return useContext(GithubContext);
};

export default GithubContextProvider;
