import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5722',
    },
    secondary: {
      main: '#3f51b5',
    },
    // error: {
    //   main: '#98462e',
    // },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
  },
})

export default theme
