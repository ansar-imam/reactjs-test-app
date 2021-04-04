import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "fontsource-roboto";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <Checkbox
        checked={checked}
        color="secondary"
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxExample />
        <ButtonGroup color="default">
          <Button
            //onClick={() => alert("hello")}
            //href="#"
            startIcon={<SaveIcon />}
            style={{ fontSize: 14 }}
            variant="contained"
            //color="secondary"
            //size="small"
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            style={{ fontSize: 14 }}
            variant="contained"
            //color="secondary"
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
