import Link from 'next/link';
import Image from 'next/image';
import { IMG } from '../../../services/dataPlayer';

interface FeatureGameProps {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
}

export default function FeatureGameItem({
  id, thumbnail, title, category,
}: FeatureGameProps) {
  return (
    <div className="featured-game-card position-relative">
      <Link href={`/detail/${id}`}>
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={`${IMG}/${thumbnail}`}
              width={205}
              height={270}
              alt={thumbnail}
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image src="/icon/gameicon-1.svg" width={54} height={36} alt="game-icon" />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
