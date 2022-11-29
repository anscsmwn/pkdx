import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout title="About">
      <div className="flex min-h-screen items-center justify-center text-quill-grey">
        <div>
          <img
            className="mx-auto w-36"
            width={200}
            height={200}
            src="/icon.png"
            alt="logo"
          />
          <div className="relative bottom-2 space-y-2 p-7 text-center">
            <p>
              A simple pokedex web app built with react.js & typescript made by{' '}
              <a
                target={'_blank'}
                className="font-semibold"
                href="https://anscsmwn-dev.vercel.app"
              >
                Anca
              </a>
              .
            </p>
            <p>
              This app is open source, you can see the{' '}
              <a
                target={'_blank'}
                className="font-semibold"
                href="https://github.com/aancaa/pkdx"
              >
                source code here
              </a>
              .
            </p>
            <p>
              Pokémon © 2002-2021 Pokémon. © 1995-2021 Nintendo/Creatures
              Inc./GAME FREAK inc. TM, ® and Pokémon character names are
              trademarks of Nintendo.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
