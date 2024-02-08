interface BlockWrapperProps {
  children: React.ReactNode;
  isGrow: boolean;
}

export default function BlockWrapper(props: BlockWrapperProps) {
  const { children, isGrow } = props;

  return (
    <section
      className={`flex flex-col m-8 bg-orange-900/40 text-orange-50 shadow-md shadow-orange-900/30 rounded-md p-4 ${isGrow && 'grow'}`}
    >
      {children}
    </section>
  );
}
