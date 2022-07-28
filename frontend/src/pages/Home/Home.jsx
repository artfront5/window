import React from 'react';
import Production from '../../components/Production/Production';
import StartSection from '../../components/StartSection/StartSection';
import Main from '../../layout/main';

function Home(props) {
  return (
    <Main>
      <>
      <StartSection />
      <Production />
      </>
    </Main>
  );
}

export default Home;
