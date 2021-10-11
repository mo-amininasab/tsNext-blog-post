import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {}

const Header: React.FC<Props> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = (e: React.MouseEvent<SVGElement>) => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <header className="bg-gray-900 text-gray-100 shadow w-full">
      <div className="container mx-auto flex p-5 justify-between flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 items-center md:justify-start">
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
            <span className="ml-3 text-xl sm:text-2xl text-gray-300">
              DevSpace
            </span>
          </a>
        </Link>

        <nav className="flex-wrap hidden md:flex md:w-4/5 items-center justify-end md:ml-auto">
          <Link href="/blogs">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              blog
            </a>
          </Link>

          <Link href="/about">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              About
            </a>
          </Link>
        </nav>
        <GiHamburgerMenu
          className="h-8 w-8 p-1 md:hidden cursor-pointer"
          onClick={toggleMenuHandler}
        />
      </div>

      {/* menu */}
      {toggleMenu && (
        <div className="container md:hidden pt-0 mx-auto flex flex-col space-y-2 p-5 justify-start">
          <Link href="/blogs">
            <a className="uppercase">blog</a>
          </Link>

          <Link href="/about">
            <a className="uppercase">about</a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
