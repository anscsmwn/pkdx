import Layout from '@/components/Layout';
import DetailPokemonInfo from '@/components/PokemonDetail/DetailPokemonInfo';
import { useGetPokemon } from '@/query-hook/usePokemon';
import { titleCase } from '@/utils/formatter';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { name } = useParams();
  const { data: { data: pokemon } = {}, isLoading } = useGetPokemon(name!);
  return (
    <Layout title={titleCase(name!)}>
      {isLoading && <p className="text-center">Loading...</p>}
      {pokemon && <DetailPokemonInfo pokemon={pokemon} />}
    </Layout>
  );
};

export default PokemonDetail;
