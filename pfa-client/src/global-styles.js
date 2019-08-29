import { createGlobalStyle } from 'styled-components';
import colors from './colors';

/* eslint no-unused-expressions: 0 */
const GlobalStyle = createGlobalStyle`
  // Reset
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  // Reset end

  html,
  body {
    //height: 100%;
    width: 100%;
    min-height: 100%;
    background-color: ${colors.grey};
  }

  body {
    font-family: Arial, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${colors.grey};
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Arial, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
    margin: 0;
  }
  
  *,
  *::before,
  *::after,
  hr,
  input[type="search"] {
    box-sizing: border-box;
  }
  
  ul,
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  fieldset {
    border: none;
  }
  
  input {
    font-family: Arial, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-style: none;
    font-weight: initial;
  }

  @keyframes loading {
    0% {
      opacity: 0.7;
    }
    
    33% {
      opacity: 0.8;
    }
    
    66% {
      opacity: 1;
    }
  
    100% {
      opacity: 0.7;
    }
  }
`;

export default GlobalStyle;

