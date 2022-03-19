import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  ChangeEventHandler, useCallback, useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';

import { getCategoryItem } from '../interfaces/GetGameSections';
import { actionSignUp } from '../services/dataMember';
import { getGameCategory } from '../services/dataPlayer';

export default function SignUpPhoto() {
  const router = useRouter();
  const [favorite, setFavorite] = useState('');
  const [image, setImage] = useState<File|string>('');
  const [imagePreview, setImagePreview] = useState('');
  const [local, setLocal] = useState({
    name: '',
    email: '',
  });
  const [gameCategory, setGameCategory] = useState([{
    _id: '',
    name: '',
    __v: 0,
  }]);

  const getCategory = useCallback(async () => {
    const data = await getGameCategory();
    setGameCategory(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem('user-form')!;
    const user = JSON.parse(localData);
    setLocal(user);
  }, []);

  const handleSubmit = async () => {
    const localForm = localStorage.getItem('user-form')!;
    const localData = JSON.parse(localForm);
    const userData = new FormData();
    userData.append('email', localData.email);
    userData.append('name', localData.name);
    userData.append('username', localData.name);
    userData.append('password', localData.password);
    userData.append('image', image);
    userData.append('role', 'user');
    userData.append('status', 'Y');
    userData.append('phoneNumber', '0721470921');
    userData.append('favorite', favorite);
    const resp = await actionSignUp(userData);
    if (resp.error) {
      toast.error(resp.message, { theme: 'colored' });
    } else {
      toast.success(resp.message, { theme: 'colored' });
      localStorage.removeItem('user-form');
      router.push('/sign-up-success');
    }
  };

  const handleFavorite:ChangeEventHandler<HTMLSelectElement> = (e) => setFavorite(e.target.value);

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {image
                      ? <img src={imagePreview} className="img-upload" alt="upload.svg" />
                      : <Image src="/icon/upload.svg" width={120} height={120} alt="upload.svg" />}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      if (e.target.files !== null) {
                        setImagePreview(URL.createObjectURL(e.target.files[0]));
                        setImage(e.target.files[0]);
                      } else {
                        setImage('');
                      }
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{local.name}</h2>
              <p className="text-lg text-center color-palette-1 m-0">{local.email}</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite
                  Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={handleFavorite}
                >
                  {
                    gameCategory.map((item:getCategoryItem) => <option key={item._id} value={item._id}>{item.name}</option>)
                  }
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms &
                Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
