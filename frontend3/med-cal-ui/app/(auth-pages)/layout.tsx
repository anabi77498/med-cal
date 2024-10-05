export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen flex flex-col gap-12 items-start items-center py-20">{children}</div>
  );
}
