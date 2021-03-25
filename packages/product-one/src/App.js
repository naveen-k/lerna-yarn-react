import React from 'react';
import './App.css';
import { Button } from 'ui-components';
import { formatDate } from 'common-utils';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Sample Application</h2>
				<div>
        <Button label="[ui-component] Button" />
        <div>	<span>
				 [common-utils] Today is: {formatDate(new Date())}
        </span>
				</div>
				</div>
      </div>
    </div>
  );
}

export default App;
