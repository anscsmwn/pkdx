import Layout from '@/components/Layout';
import PokemonList from '@/components/PokemonList/PokemonList';
import { useGetPokemonList } from '@/query-hook/usePokemon';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const { data, fetchNextPage, hasNextPage } = useGetPokemonList();
  return (
    <Layout title="Home">
      {data && hasNextPage && (
        <InfiniteScroll
          dataLength={data?.pages.length}
          next={() => {
            fetchNextPage();
          }}
          hasMore={hasNextPage}
          loader={<p className="text-center text-white">Loading...</p>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {data?.pages.map((page, idx) => (
            <PokemonList results={page.data} key={idx} />
          ))}
        </InfiniteScroll>
      )}
    </Layout>
  );
};

export default Home;
