import { formatCurrency } from "@/lib/helpers";
import { Link } from "next-view-transitions";
import Image from "next/image";

const ProductCardTitle = ({
  children,
  id,
  type,
}: {
  children: React.ReactNode;
  id: string | number;
  type: string | undefined;
}) => {
  return (
    <Link href={`/products/${id}?type=${type}`} className="lg:text-xl">
      {children}
    </Link>
  );
};

const ProductCardPrice = ({
  discount,
  value,
}: {
  value: number;
  discount: number;
}) => {
  return (
    <div className="flex items-center justify-between">
      <p className="textsm lg:text-xl font-semibold flex-1 truncate">
        {formatCurrency(value)}
      </p>
      <p className="text-xs lg:text-sm font-bold line-through text-[#9A9A9A] flex-1 truncate text-right">
        {formatCurrency(discount)}
      </p>
    </div>
  );
};

const ProductCardDiscount = ({ value }: { value?: number }) => {
  return (
    <div className="absolute top-0 right-0 bg-white rounded-bl-xl z-10 py-3 px-4">
      <p className="text-sm lg:text-lg">{value ?? 0}% off</p>
    </div>
  );
};

const ProductCardRating = ({ value }: { value?: string | number }) => {
  return (
    <div className="absolute top-0 inset-x-0 flex items-center justify-end bg-gradient-to-b from-black/50 to-black/0">
      <p className="flex items-center gap-2 text-xs lg:text-sm font-bold p-4 text-white">
        <Image src="/star.svg" alt="star" width={16} height={16} />
        {value ?? 0}
      </p>
    </div>
  );
};

const ProductCardImage = ({
  image,
  children,
  id,
  type,
}: {
  image?: string;
  id?: string | number;
  children: React.ReactNode;
  type: string | undefined;
}) => {
  return (
    <Link
      href={`/products/${id}?type=${type}`}
      className="bg-stone-200 rounded-lg overflow-hidden h-[180px] lg:h-[300px] relative isolate block"
    >
      {image ? (
        <Image
          src={image}
          alt="product"
          className="object-cover z-10"
          style={{
            viewTransitionName: `product-${type}-${id}`,
          }}
          fill
        />
      ) : null}

      {children}
    </Link>
  );
};

const ProductCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-w-full space-y-4">{children}</div>;
};

export {
  ProductCard,
  ProductCardDiscount,
  ProductCardImage,
  ProductCardPrice,
  ProductCardRating,
  ProductCardTitle,
};
