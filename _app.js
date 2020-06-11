


export default function App() {
  return (
    <div>
      <style jsx global>{`

        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;800;900&display=swap');

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

        }

      `}</style>
    </div>
  )
}