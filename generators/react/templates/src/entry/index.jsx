import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import Main from '../modules/main/Main';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(<ErrorBoundary><Main /></ErrorBoundary>, document.getElementById('root'));
