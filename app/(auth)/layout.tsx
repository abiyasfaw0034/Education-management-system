import NavBar from "@/components/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main>
        <div className="h-screen flex flex-col items-center justify-center">
          {children}
        </div>
      </main>
    </>
  );
}
