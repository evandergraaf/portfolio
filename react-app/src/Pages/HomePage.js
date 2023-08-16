
import React from 'react';
import SimpleAppBar from '../components/SimpleAppBar';
import SimpleLogo from '../components/SimpleLogo';
import {background, secondary} from '../components/colors';
import TitleContent from '../components/TitleContent';

const pageBackground = {
  backgroundColor: background, 
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer'
};

function HomePage() {
    return (
      <React.Fragment>
        <div style={pageBackground}>
          <SimpleAppBar />
          <TitleContent />
        </div>
      </React.Fragment>
    );
  }
  
  export default HomePage;
  