import { useGetPokemonAbility } from '@/query-hook/usePokemon';
import { Pokemon } from '@/types/pokemon';
import { titleCase } from '@/utils/formatter';

interface AbilitiesProps {
  pokemon: Pokemon;
}
const Abilities = ({ pokemon }: AbilitiesProps) => {
  const abilities = pokemon.abilities.map((ability) => {
    if (ability.ability) {
      return ability.ability.name;
    }
  });

  return (
    <section>
      {pokemon.abilities.map(({ ability }) => {
        const results = useGetPokemonAbility(ability?.name!);
        const ability_desc = results?.data?.data?.effect_entries.filter(
          (effect_entry) => effect_entry.language.name === 'en',
        )[0].effect;
        return (
          <div key={ability?.name} className="my-2">
            <p className="text-lg font-semibold">{titleCase(ability?.name!)}</p>
            <p className="mt-1 text-sm">{ability_desc}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Abilities;
