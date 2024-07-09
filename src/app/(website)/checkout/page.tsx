import Goback from "@/components/shared/go-back";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="mb-28 lg:mb-16">
      <div className="container">
        <Goback label="Checkout" />
      </div>

      <div className="w-full mx-auto mt-10 flex flex-col">
        <CheckoutItem
          label="Payment"
          icon="/card-icon"
          placeholder="Choose a Payment Method"
        />
        <CheckoutItem
          label="Personal Information"
          icon="/contact-icon"
          placeholder="Contact"
        />
        <CheckoutItem
          label="Delivery Details"
          icon="/trolley-icon"
          placeholder="Delovery Address"
        />
      </div>

      <div className="flex justify-center mt-10">
        <Button className="w-full max-w-[500px]">Place Order</Button>
      </div>
    </div>
  );
}

const CheckoutItem = ({
  icon,
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
  icon?: string;
}) => {
  return (
    <div className="">
      <p className="bg-[#EFEFEF] py-5 w-full container">{label}</p>
      <div className="container flex items-center gap-2 lg:gap-4 py-3">
        <div className="size-14 grid place-items-center rounded-xl border shrink-0">
          {icon && (
            <Image
              src={`${icon}.svg`}
              alt="card-icon"
              width={48}
              height={40}
              className="size-8"
            />
          )}
        </div>

        <div className="flex-1 border border-[#D1D1D1] bg-[#FCFCFC] rounded-xl px-4 min-h-full items-center flex self-stretch">
          <span className="text-[#9A9A9A]">{placeholder}</span>
        </div>
      </div>
    </div>
  );
};
