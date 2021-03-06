import * as React from "react";
import { Helmet } from "react-helmet";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  typography: {
    fontFamily: `"VT323", "Helvetica", "Arial", monospace`
   },
   card: {
     backgroundColor: '#c5ccb6 !important'
  }
  });

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href={`${withPrefix("/")}img/favicon.ico`}/>
        <link href="https://fonts.googleapis.com/css?family=VT323:200,400,600,800" rel="stylesheet"/>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#212121"/>
        <meta name="msapplication-navbutton-color" content="#212121"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#212121"/>
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.png`}
        />
      </Helmet>
      <Navbar />
      <ThemeProvider theme={theme}>
      <div>{children}</div>
      </ThemeProvider>
      {/* <Footer /> */}
    </div>
  );
};

export default TemplateWrapper;
