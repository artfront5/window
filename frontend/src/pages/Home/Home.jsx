import React from 'react';
import CompanyType from '../../components/CompanyType/CompanyType';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import Production from '../../components/Production/Production';
import StartSection from '../../components/StartSection/StartSection';
import StepWorks from '../../components/StepWorks/StepWorks';
import Main from '../../layout/main';

function Home(props) {
  return (
    <Main>
      <>
        <StartSection />
        <Production />
        <CompanyType />
        <StepWorks />
        <FeedbackForm />
      </>
    </Main>
  );
}

export default Home;
