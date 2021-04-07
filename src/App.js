import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Dropdown from "./components/dropdown";
import ButtonStyled from "./components/customButton";
import SimplePaper from "./components/paper";

import "fontsource-roboto";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: "#fff",
    },
  },
});

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            color="secondary"
            onChange={(e) => setChecked(e.target.checked)} //////////// to ask about
            inputProps={{
              "aria-label": "secondary checkbox", //////////// to ask about
            }}
          />
        }
        label="Testing Checkbox"
      />
    </ThemeProvider>
  );
}

function App(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: 110,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SimplePaper />
      </div>

      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Dropdown />
            <ButtonStyled title={"Styled-Button"} />
            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Email"
              placeholder="test@testmail.com"
            />
            <CheckBoxExample />
            <ButtonGroup color="primary">
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
          </header>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
