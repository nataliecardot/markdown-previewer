import React, { useState } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

let marked = require('marked');

// Since v. 16.8, React supported hooks -- allows you to use state in a function component. Create React App has been using function component instead of class component to help ease the transition https://stackoverflow.com/questions/55889693/why-does-create-react-app-now-use-a-function-component-for-app
// Changed from function App() { } to arrow function component
// See https://www.robinwieruch.de/react-function-component
const App = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="App container">
      <h1 class="mt-4">Markdown Previewer</h1>
      <div class="row mt-5 justify-content-center">
        <div class="col-xl-11">
          <FormGroup controlId="formControlsTextarea">
            {/* Label is for CSS styling, not a Bootstrap class */}
            <FormLabel class="lead label">Markdown Input</FormLabel>
            <FormControl componentClass="textarea" style={{height: 200}} value={markdown} placeholder="Enter some markdown." />
          </FormGroup>
        </div>
      </div>

      <div class="row mt-4 justify-content-center">
        <div class="col-xl-11">
          <p class="lead label">Markdown Output</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default App;
