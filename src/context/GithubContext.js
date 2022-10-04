import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubContextProvider = ({ children }) => {
  const [user] = useAuthState(auth);

  const [githubUser, setGithubUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });

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

  const searchGithubUser = useCallback(
    async (user) => {
      toggleError();
      setIsLoading(true);

      try {
        const response = await axios.get(`${rootUrl}/users/${user}`);
        setGithubUser(response.data);

        const { repos_url, followers_url } = response.data;
        const [repos, followers] = await Promise.allSettled([
          axios.get(`${repos_url}?per_page=100`),
          axios.get(`${followers_url}?per_page=100`),
        ]);

        if (repos.status === 'fulfilled') {
          setRepos(repos.value.data);
        }

        if (followers.status === 'fulfilled') {
          setFollowers(followers.value.data);
        }

        checkRequests();
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        toggleError(true, error.response?.data?.message || error.message);
        setIsLoading(false);
      }
    },
    [checkRequests]
  );

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  useEffect(() => {
    if (!user) return;

    searchGithubUser(user?.reloadUserInfo?.screenName);
  }, [user, searchGithubUser]);

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
