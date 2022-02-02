import FeatureGameItem from './FeatureGameItem';

export default function index() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeatureGameItem thumbnail="Thumbnail-1" title="Super Mechs" category="Mobile" />
          <FeatureGameItem thumbnail="Thumbnail-2" title="Call of Duty: Modern" category="Mobile" />
          <FeatureGameItem thumbnail="Thumbnail-3" title="Mobile Legends" category="Mobile" />
          <FeatureGameItem thumbnail="Thumbnail-4" title="Clash of Clans" category="Mobile" />
          <FeatureGameItem thumbnail="Thumbnail-5" title="Valorant" category="Desktop" />
        </div>
      </div>
    </section>
  );
}
