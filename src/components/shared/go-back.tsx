"use client";

import Arrow from "@/assets/arrow-left.svg";
import { useRouter } from "next/navigation";

export default function Goback({ label }: { label: string }) {
  const router = useRouter();

  return (
    <div
      role="button"
      onClick={() => router.back()}
      className="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-300"
    >
      <Arrow />

      <span className="text-black lg:text-2xl font-medium">{label}</span>
    </div>
  );
}
