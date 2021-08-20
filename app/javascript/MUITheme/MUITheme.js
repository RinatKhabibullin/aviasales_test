import React from 'react';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const MUITheme = (props) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

export default MUITheme;
