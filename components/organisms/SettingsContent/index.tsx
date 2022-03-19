import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { playerCookie } from '../../../interfaces/SignInSections';
import { setProfile } from '../../../services/dataMember';
import { IMG } from '../../../services/dataPlayer';
import Input from '../../atoms/Input';

interface settingContent{
  id:string;
  avatar:File|string|undefined |Blob;
  username:string;
  email:string;
}
export default function SettingsContent() {
  const router = useRouter();
  const [user, setUser] = useState<settingContent>({
    id: '', username: '', email: '', avatar: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  useEffect(() => {
    const cookies = Cookies.get('tkn');
    const atobTkn = atob(cookies!);
    const data :playerCookie = jwtDecode(atobTkn);
    setUser(data.player);
  }, []);

  const handleName = (e:ChangeEvent<HTMLInputElement>) => setUser((prev) => ({ ...prev, username: e.target.value }));
  const handleEmail = (e:ChangeEvent<HTMLInputElement>) => setUser((prev) => ({ ...prev, email: e.target.value }));
  const handleSubmit = async () => {
    const form = new FormData();
    form.append('_id', user.id);
    form.append('name', user.username);
    form.append('avatar', user.avatar!);
    form.append('email', user.email);
    const res = await setProfile(form);
    if (res.error) {
      toast.error(res.message, { theme: 'colored' });
    } else {
      toast.success(res.message, { theme: 'colored' });
      router.push('/member');
    }
  };
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
        <div className="bg-card pt-30 ps-30 pe-30 pb-30">
          <form action="">
            <div className="photo d-flex">
              <div className="position-relative me-20">
                <div className="avatar img-fluid">
                  {
                  !imagePreview ? <Image src={`${IMG}/${user.avatar}`} width="90" height="90" /> : <Image src={imagePreview} width="90" height="90" />
                }
                </div>
                <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 6H5H21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 11V17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 11V17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="image-upload">
                <label htmlFor="avatar">
                  <Image src="/icon/upload.svg" width="90" height="90" alt="upload.svg" />
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    accept="image/png,image/jpeg"
                    onChange={(e) => {
                      if (e.target.files !== null) {
                        setImagePreview(URL.createObjectURL(e.target.files[0]));
                        setUser({ ...user, avatar: e.target.files[0] });
                      } return null;
                    }}
                  />
                </label>
              </div>
            </div>
            <Input
              label="Full Name"
              type="text"
              id="name"
              name="name"
              aria-describedby="name"
              placeholder="Enter your name"
              value={user.username}
              onChange={handleName}
            />
            <Input
              label="Email Address"
              type="text"
              id="email"
              aria-describedby="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleEmail}
              disabled

            />
            <div className="button-group d-flex flex-column pt-50">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-save fw-medium text-lg text-white rounded-pill"
              >
                Save My Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
