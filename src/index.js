import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import GlobalStyles from './styles/GlobalStyles';

import 'rc-pagination/assets/index.css';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Routes />
  </>,
  document.getElementById('root')
);
