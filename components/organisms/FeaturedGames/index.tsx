import FeatureGameItem from './FeatureGameItem';
import { getAllGamesProps, getItemGame } from '../../../interfaces/GetGameSections';

export default function FeaturedGames({ getItems }:getAllGamesProps) {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {getItems.map((item: getItemGame) => (
            <FeatureGameItem
              key={item._id}
              id={item._id}
              thumbnail={item.thumbnail}
              title={item.name}
              category={item.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
