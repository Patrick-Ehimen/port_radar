"use client";

import Image from "next/image";
import Link from "next/link";

import { Menu, Logo } from "../../public";

const links = [
  { id: 1, name: "Trade", href: "#" },
  { id: 2, name: "Earn", href: "#" },
  { id: 3, name: "Game", href: "#" },
  { id: 4, name: "NFTs", href: "#" },
];

export default function NavLinks() {
  return (
    <nav className="flex items-center justify-between pt-[50px]">
      <Link href="/">
        <div className="flex items-center m-[20px] justify-between ml-[150px]">
          <Image src={Logo} alt="logoimg" />
          <h3>PortRadar</h3>
        </div>
      </Link>

      <div className="items-center justify-center flex">
        <ul className="flex">
          {links.map((link) => (
            <li key={link.id} className="flex mx-[20px]">
              <Link href="link.href">
                <div className="flex">
                  <div>{link.name}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
