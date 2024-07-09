"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

import CartIcon from "@/assets/cart.svg";
import FavoritesIcon from "@/assets/favourite.svg";
import HomeIcon from "@/assets/home.svg";
import AccountIcon from "@/assets/user.svg";

export default function NavLinks() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCart =
    pathname.includes("/products") || pathname.includes("/checkout");
  const isAccount = pathname === "/account";
  const isNotification = pathname === "/notification";

  return (
    <>
      {/* mobile */}
      <div
        className={cn(
          "flex lg:hidden items-center fixed bottom-0 inset-x-0 h-[80px] bg-[#231F20] justify-evenly w-full text-[#4F4C4D] z-[9999]",
          {}
        )}
      >
        <Link href="/" className={cn({ "text-primary": isHome })}>
          <HomeIcon />
        </Link>

        <span className={cn({ "text-primary": isNotification })}>
          <FavoritesIcon />
        </span>

        <span className={cn({ "text-primary": isCart })}>
          <CartIcon />
        </span>

        <span className={cn({ "text-primary": isAccount })}>
          <AccountIcon />
        </span>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex items-center gap-12">
        <Link
          href="/"
          className={cn("text-[#9A9A9A]", {
            "text-[#231F20]": isHome,
          })}
        >
          Home{" "}
        </Link>

        <Link
          href="/"
          className={cn("text-[#9A9A9A]", {
            "text-[#231F20]": isCart,
          })}
        >
          Cart{" "}
        </Link>

        <Link
          href="/"
          className={cn("text-[#9A9A9A]", {
            "text-[#231F20]": isAccount,
          })}
        >
          Account{" "}
        </Link>

        <Link
          href="/"
          className={cn("text-[#9A9A9A]", {
            "text-[#231F20]": isNotification,
          })}
        >
          Notification{" "}
        </Link>
      </div>
    </>
  );
}
