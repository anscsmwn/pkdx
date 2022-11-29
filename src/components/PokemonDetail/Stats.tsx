import { Pokemon } from '~/../types/pokemon';
import { titleCase } from '@/utils/formatter';
import Bar from './Bar';
interface StatsProps {
  pokemon: Pokemon;
}
const Stats = ({ pokemon }: StatsProps) => {
  return (
    <section>
      {pokemon.stats.map(({ stat, base_stat }, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <p>{titleCase(stat?.name!)}</p>
          <div className="flex w-2/3 items-center justify-between">
            <p className="font-semibold">{base_stat}</p>
            <Bar base_stat={base_stat!} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
