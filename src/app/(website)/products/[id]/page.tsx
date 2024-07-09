"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/constants/clearance";
import { formatCurrency } from "@/lib/helpers";
import { TProduct } from "@/types/shared";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const store = DATA[type as keyof typeof DATA] as TProduct[] | undefined;
  const product = store?.find((item) => item.id === id);

  const urlPrefix = () => {
    if (type === "clearance") return "/clearance-sales";
    if (type === "nordic") return "/nordic";
    if (type === "sofas") return "/sofas";
    if (type === "vases") return "/vases";
    return "/store";
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col px-6 lg: mb-28 lg:mb-16">
      <div className="h-[412px] rounded-xl bg-stone-200 relative isolate overflow-hidden">
        <Image
          src={`${urlPrefix()}/${product?.image}.png`}
          alt="product"
          className="object-cover z-0"
          style={{
            viewTransitionName: `product-${type}-${id}`,
          }}
          fill
          quality={100}
        />
        <div className="h-9 absolute top-0"></div>
      </div>

      <div className="flex flex-col mt-4 mb-12 w-full">
        <div className="flex items-center justify-between gap-4">
          <p className="text-3xl font-semibold flex-1 truncate">
            {formatCurrency(product?.price ?? 0, undefined, "NGN", 2, 2)}
          </p>
          <p className="text-xl line-through text-[#9A9A9A] flex-1 truncate text-right">
            {formatCurrency(product?.oldPrice ?? 0)}
          </p>
        </div>
        <h3 className="text-3xl mt-1 mb-6">{product?.name}</h3>
        <p>
          Free Delivery from the 1-30th of September on all goods worth over
          N60,000.{" "}
        </p>
      </div>

      <Button asChild>
        <Link href="/checkout">Proceed to Checkout</Link>
      </Button>
    </div>
  );
}
