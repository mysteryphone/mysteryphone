import HamburgerMenu from './HamburgerMenu'
import Footer from './Footer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function Layout(props) {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="hamburgerMenu">
        <HamburgerMenu />
      </div>
      <div className="layoutStyle">
        <div className="main">{props.children}</div>
        <Footer blogName="Mystery Phone" instagram="mysteryphone" trademark website="https://mysteryphone.com" />
      </div>
      <style jsx global>{`
        .imgShadow {
          border-radius: 4px;
          box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
        }
        .layoutStyle {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          padding: 0 40px;
        }
        .main {
          flex-grow: 1;
        }
        footer {
          font-size: 0.75em;
          padding: 10px 0;
        }
        .hamburgerMenu {
          left: 10px;
          position: fixed;
          top: 10px;
        }
        .center {
          text-align: center;
        }
        @media (max-width: 628px) {
          .hamburgerMenu {
            left: 10px;
          }
        }
      `}</style>
    </ThemeProvider>
  )
}
