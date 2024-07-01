export default function FormHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="text-slate-400 self-center">{children}</h3>;
}
