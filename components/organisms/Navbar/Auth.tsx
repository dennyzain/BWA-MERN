import Cookies from 'js-cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { playerCookie } from '../../../interfaces/SignInSections';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
  });
  useEffect(() => {
    const IMG = process.env.NEXT_PUBLIC_IMG;
    const token = Cookies.get('tkn');
    if (token) {
      const tknBase = atob(token);
      const JWTDecode:playerCookie = jwtDecode(tknBase);
      setUser({ avatar: `${IMG}/${JWTDecode.player.avatar}` });
      setIsLogin(true);
    }
  }, []);

  const handleLogOut = () => {
    Cookies.remove('tkn');
    setIsLogin(false);
  };

  return (
    !isLogin ? (
      <li className="nav-item my-auto">
        <Link href="/sign-in">
          <a
            className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </li>
    ) : (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2" href="#">My Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/transactions">
                <a className="dropdown-item text-lg color-palette-2" href="#">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2" href="#">Account Settings</a>
              </Link>
            </li>
            <li>
              <button onClick={handleLogOut} type="button" className="dropdown-item text-lg color-palette-2">Log Out</button>
            </li>
          </ul>
        </div>
      </li>
    ));
}
