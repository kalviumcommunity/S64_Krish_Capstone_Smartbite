import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import OTPAuth from '../../components/OTPAuth';
// inside JSX:
<OTPAuth />


// ✅ Import AI Search Box Component
import AISearchBox from '../../components/AISearchBox';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      
      {/* ✅ LangChain AI Autocomplete Suggestion Box */}
      <AISearchBox />

      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
