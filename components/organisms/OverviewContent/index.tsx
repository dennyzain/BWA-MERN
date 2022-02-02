import ListTransactions from './ListTransaction';
import CategoriesItem from './CategoriesItem';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <CategoriesItem icon="desktop-overview" totalCost={18000000}>
                Game
                <br />
                Desktop
              </CategoriesItem>
              <CategoriesItem icon="mobile-overview" totalCost={4555000}>
                Game
                <br />
                Mobile
              </CategoriesItem>
              <CategoriesItem icon="other-overview" totalCost={100000}>
                Other
                <br />
                Games
              </CategoriesItem>
            </div>
          </div>
        </div>
        <ListTransactions />
      </div>
    </main>
  );
}
