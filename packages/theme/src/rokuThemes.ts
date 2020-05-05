import { createTheme } from 'baseTheme';
import { deepPurple, yellow } from '@material-ui/core/colors';

export const rokuLightTheme = createTheme({
  type: 'light',
  background: {
    default: '#F8F8F8',
  },
  status: {
    ok: '#1db855',
    warning: '#f49b20',
    error: '#CA001B',
    running: '#BEBEBE',
    pending: '#5BC0DE',
    background: '#F8F8F8',
  },
  bursts: {
    fontColor: '#FEFEFE',
    slackChannelText: '#ddd',
    backgroundColor: {
      default: '#7C3699',
    },
  },
  primary: {
    main: deepPurple[500],
  },
  border: '#E6E6E6',
  textContrast: '#000000',
  textVerySubtle: '#DDD',
  textSubtle: '#6E6E6E',
  highlight: '#FFFBCC',
  errorBackground: '#FFEBEE',
  warningBackground: '#F59B23',
  infoBackground: '#ebf5ff',
  errorText: '#CA001B',
  infoText: '#004e8a',
  warningText: '#FEFEFE',
  linkHover: '#2196F3',
  link: '#0A6EBE',
  gold: yellow.A700,
  sidebar: '#171717',
});

export const rokuDarkTheme = createTheme({
  type: 'dark',
  background: {
    default: 'rgb(38, 36, 38)',
  },
  status: {
    ok: '#1db855',
    warning: '#f49b20',
    error: '#CA001B',
    running: '#BEBEBE',
    pending: '#5BC0DE',
    background: 'rgb(38, 36, 38)',
  },
  bursts: {
    fontColor: '#FEFEFE',
    slackChannelText: '#ddd',
    backgroundColor: {
      default: '#7C3699',
    },
  },
  primary: {
    main: deepPurple[500],
  },
  border: '#E6E6E6',
  textContrast: '#FFFFFF',
  textVerySubtle: '#DDD',
  textSubtle: '#6E6E6E',
  highlight: '#FFFBCC',
  errorBackground: '#FFEBEE',
  warningBackground: '#F59B23',
  infoBackground: '#ebf5ff',
  errorText: '#CA001B',
  infoText: '#004e8a',
  warningText: '#FEFEFE',
  linkHover: '#2196F3',
  link: '#0A6EBE',
  gold: yellow.A700,
  sidebar: '#424242',
});
