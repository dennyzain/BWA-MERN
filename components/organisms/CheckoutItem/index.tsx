import { useEffect, useState } from 'react';
import { IMG } from '../../../services/dataPlayer';

export default function CheckoutItem() {
  const [dataGame, setDataGame] = useState({
    category: {
      name: '',
    },
    name: '',
    thumbnail: '',
  });
  useEffect(() => {
    const local = localStorage.getItem('data-item')!;
    const localData = JSON.parse(local);
    localData.dataItem.thumbnail = `${IMG}/${localData.dataItem.thumbnail}`;
    setDataGame(localData.dataItem);
  }, []);
  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img src={dataGame.thumbnail} className="img-fluid" alt="" />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {dataGame.name}
        </p>
        <p className="color-palette-2 m-0">
          Category:
          {' '}
          {dataGame.category.name}
        </p>
      </div>
    </div>
  );
}
