import Layout from '@/components/Layout';
import React from 'react';
import { Link } from 'react-router-dom';

const MyPokemon = () => {
  return (
    <Layout title="My Pokemon">
      <div className="flex flex-col items-center justify-center pt-20 text-quill-grey">
        <img
          width={200}
          height={300}
          src="/snorlax-sleep.gif"
          alt="empty-pokemon"
        />
        <p className="my-2 max-w-xs text-center font-semibold">
          You don't have any pokemon yet. Go catch some pokemon and come back
          here.
        </p>
        <Link
          to="/"
          className="rounded-full bg-[#355382] px-3 py-2 text-sm font-semibold text-white"
        >
          Go catch them all.
        </Link>
      </div>
    </Layout>
  );
};

export default MyPokemon;
