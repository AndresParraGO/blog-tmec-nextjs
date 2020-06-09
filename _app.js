


export default function App() {
  return (
    <div>
      <style jsx global>{`

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

          --fzDefault: 14px;
        }

        *,
        *::after,
        *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }


        body {
          font-family: 'Inter', sans-serif, verdana;
          font-size: var(--fzDefault);
          color: var(--firstTextColor);
        }


        a {
          text-decoration: none;
        }

        li {
          list-style: none;
        }




        main {
          margin: 2em 0;
        }

      `}</style>
    </div>
  )
}
