import { TopUpItemProps } from '../../../interfaces/TopUpSections';
import { IMG } from '../../../services/dataPlayer';

export default function TopUpItem({ type, data }: TopUpItemProps) {
  return type === 'desktop' ? (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <img
          src={`${IMG}/${data.thumbnail}`}
          width="280"
          height="380"
          className="img-fluid inline-block"
          alt=""
        />
      </div>
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {data.name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">
          Category:
          {' '}
          {data.category.name}
        </p>
      </div>
    </div>
  ) : (
    <div className="col-md-12 col-8 d-md-none d-block">
      <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
        {data.name}
      </h2>
      <p className="text-sm color-palette-2 text-start mb-0">
        Category:
        {' '}
        {data.category.name}
      </p>
    </div>
  );
}
