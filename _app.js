


export default function App() {
  return (
    <div>
      <style jsx global>{`
        
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Raleway Light'), local('Raleway-Light'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqhPAMif.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Raleway Light'), local('Raleway-Light'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPAA.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIouWqhPAMif.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIouWqZPAA.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: local('Raleway Black'), local('Raleway-Black'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vWqhPAMif.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: local('Raleway Black'), local('Raleway-Black'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vWqZPAA.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        :root {
          --firstColor: #EF7731;
          --firstColorAlt: #EF5A31;
          --secondColor: #009688;
          --secondColorAlt: #008588;
          --borderColor: #E8E8E8;
          --firstTextColor: #212121;
          --secondTextColor: #757575;
          --textColorAlt: #fff;
          --bgBody: #fff;
          --bgFooter: #323232;

          --fzDefault: 16px;
        }

        *,
        *::after,
        *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }


        body {
          font-family: 'Raleway', sans-serif, verdana;
          font-size: var(--fzDefault);
          color: var(--firstTextColor);
        }


        a {
          text-decoration: none;
        }

        li {
          list-style: none;
        }

        
        .container {
          width: 90%;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn {
          display: inline-block;
          padding: 0 1em;
          border-radius: 3px;
          height: 35px;
          line-height: 35px;
          background-color: var(--firstColor);
          color: var(--textColorAlt);
        }

        .btn:hover {
          background-color: var(--firstColorAlt);
        }

        .center {
          text-align:center;
        }

        main {
          margin: 2em 0;
        }

        .page-post {
          border-top: 3px solid var(--firstColor);
          padding-top: 1em;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        video, img {
          width: 100%;
          display:block;
        }


        .page-post .h1{font-size: 3em;}
        .page-post .h2{font-size: 2.2em;}
        .page-post .h3{font-size: 1.5em;}
        .page-post .h4{font-size: 1.2em;}


        .page-post .mt{margin-top: 1em;}
        .page-post .mb{margin-bottom: 1em;}

        .page-post p {
          margin-bottom: .5em;
        }

        .page-post img {
          margin-bottom: 2em;
        }


        @media screen and (max-width: 650px) {

          .page-post .h1{font-size: 2em;}
          .page-post .h2{font-size: 1.8em;}
          .page-post .h3{font-size: 1.2em;}
          .page-post .h4{font-size: 1.1em;}

        }

      `}</style>
    </div>
  )
}