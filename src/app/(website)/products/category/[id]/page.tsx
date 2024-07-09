"use client";

import Goback from "@/components/shared/go-back";
import {
  ProductCard,
  ProductCardImage,
  ProductCardPrice,
  ProductCardRating,
  ProductCardTitle,
} from "@/components/shared/product-card";
import { DATA } from "@/constants/clearance";
import { TProduct } from "@/types/shared";
import { useParams, useSearchParams } from "next/navigation";

export default function ProductsByCategoryPage() {
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
    <div className="container space-y-5 lg:space-y-8">
      <Goback label="Nordic Tables" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <ProductCard>
          <ProductCardImage
            type={product?.type}
            id={product?.id}
            image={`${urlPrefix()}/${product?.image}.png`}
          >
            <ProductCardRating value={product?.rating ?? 0} />
          </ProductCardImage>

          <div className="">
            <ProductCardPrice
              discount={product?.oldPrice ?? 0}
              value={product?.price ?? 0}
            />
            <ProductCardTitle type={product?.type} id={product?.id ?? ""}>
              {product?.name}
            </ProductCardTitle>
          </div>
        </ProductCard>
      </div>
    </div>
  );
}
