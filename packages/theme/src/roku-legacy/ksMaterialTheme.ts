import { createMuiTheme } from '@material-ui/core/styles';
import { rokupurple, rokulight } from './material-theme';

export const ksMaterialTheme = createMuiTheme({
  typography: {
    fontSize: 22,
    fontFamily: 'GothamLight, GothamBook',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Gotham Bold',
    },
    h2: {
      fontFamily: 'Gotham Bold',
    },
    h3: {
      fontFamily: 'Gotham Bold',
    },
    h4: {
      fontFamily: 'GothamBook',
    },
    body2: {
      fontFamily: 'GothamBook',
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: rokupurple.palette.primary,
      dark: rokupurple.palette.primaryDark,
      light: rokupurple.palette.primaryLight,
      contrastText: rokupurple.palette.onPrimary,
    },
    secondary: {
      main: rokupurple.palette.secondary,
      dark: rokupurple.palette.secondaryDark,
      light: rokupurple.palette.secondaryLight,
      contrastText: rokupurple.palette.onSecondary,
    },
    background: {
      paper: rokupurple.palette.surface,
      contrastText: rokupurple.palette.onSurface,
    },
    contrastText: rokupurple.palette.onSurface,
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 16,
      },
    },
  },
});
export const ksLightMaterialTheme = createMuiTheme({
  typography: {
    fontSize: 22,
    fontFamily: 'GothamLight, GothamBook',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Gotham Bold',
    },
    h2: {
      fontFamily: 'Gotham Bold',
    },
    h3: {
      fontFamily: 'Gotham Bold',
    },
    h4: {
      fontFamily: 'GothamBook',
    },
    body2: {
      fontFamily: 'GothamBook',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: rokulight.palette.primary,
      dark: rokulight.palette.primaryDark,
      light: rokulight.palette.primaryLight,
      contrastText: rokulight.palette.onPrimary,
    },
    secondary: {
      main: rokulight.palette.secondary,
      dark: rokulight.palette.secondaryDark,
      light: rokulight.palette.secondaryLight,
      contrastText: rokulight.palette.onSecondary,
    },
    background: {
      paper: rokulight.palette.surface,
      contrastText: rokulight.palette.onSurface,
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 16,
      },
    },
  },
});
