import React from 'react';
import Header from '../components/Header.tsx';
import Sidebar from '../components/Sidebar.tsx';
import SuggestedFriends from '../components/SuggestedFriends.tsx';
import './Home.css'
import UserProfiles from '../components/UserProfile.tsx';
import SearchInput from '../components/Search.tsx';
// import MainContent from '../components/MainContent';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <Sidebar />
        
          {/* <Header/> */}
          <div className='main-content'>
            {/* <SearchInput/> */}
            <UserProfiles/>
          <SuggestedFriends/>
          
          </div>
        {/* <MainContent /> */}
      </div>
    </div>
  );
};

export default Home;
