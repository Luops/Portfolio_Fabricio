import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';


const CorpoContainer = styled.body`
  background-color: #1D1D1D;
  position: relative;
  padding: 0;
  box-sizing: border-box;
`


function App() {
  return (
    <CorpoContainer>
      <Header />
    </CorpoContainer>
  );
}

export default App;
