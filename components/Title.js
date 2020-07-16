import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const theme = createMuiTheme()

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}

function Title(props) {
  const { h1, h2 } = props
  return (
    <div className="center">
      <a href="/">
        <ThemeProvider theme={theme}>
          <Typography component="h1" variant="h1">
            {h1 ? h1 : 'mystery phone'}
          </Typography>
        </ThemeProvider>
      </a>
      {h2 ? <h2>{h2}</h2> : ''}
      <style jsx>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  )
}
export default Title
