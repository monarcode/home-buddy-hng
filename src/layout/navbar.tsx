import NavLinks from "@/modules/home/components/nav-links";
import SearchInput from "@/modules/home/components/search-input";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="container flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="logo"
          className="w-36 lg:w-48"
          width={200}
          height={80}
        />
        <SearchInput />
      </div>

      <NavLinks />
    </div>
  );
}
