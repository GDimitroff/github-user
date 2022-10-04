import { useGitHub } from '../context/GithubContext';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
  const { isLoading } = useGitHub();

  if (isLoading) {
    return (
      <main>
        <img src={loadingImage} alt="Loading" className="loading" />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
