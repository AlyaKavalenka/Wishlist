export default function FormHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="self-center text-slate-400">{children}</h3>;
}
