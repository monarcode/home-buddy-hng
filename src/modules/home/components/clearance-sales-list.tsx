import {
  ProductCard,
  ProductCardDiscount,
  ProductCardImage,
  ProductCardPrice,
  ProductCardTitle,
} from "@/components/shared/product-card";
import { CLEARANCE_SALES } from "@/constants/clearance";

export default function ClearanceSalesList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
      {CLEARANCE_SALES.map((item) => (
        <ProductCard key={item.id}>
          <ProductCardImage
            id={item.id}
            image={`/clearance-sales/${item.image}.png`}
            type={item.type}
          >
            <ProductCardDiscount value={item.discount} />
          </ProductCardImage>

          <div className="">
            <ProductCardPrice discount={item.oldPrice} value={item.price} />
            <ProductCardTitle type={item.type} id={item.id}>
              {item.name}
            </ProductCardTitle>
          </div>
        </ProductCard>
      ))}
    </div>
  );
}
