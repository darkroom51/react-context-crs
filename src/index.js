import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { RoomProvider } from "./context";

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';


ReactDOM.render(
  <RoomProvider>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </RoomProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
