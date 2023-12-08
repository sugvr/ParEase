import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { NAV_LINKS } from "@/Constants"
import menu from "../public/menu-svgrepo-com.svg"

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <h1 className="text-5xl py-2 text-teal-500 font-bold">ParkEase</h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src={menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar