import NavBar from "@/layout/navbar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-h-dvh flex flex-col pt-6 lg:pt-16">
      <NavBar />
      <main className="pt-6 lg:pt-[56px] flex flex-col">{children}</main>
    </div>
  );
}
