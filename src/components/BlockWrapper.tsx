interface BlockWrapperProps {
  children: React.ReactNode;
}

export default function BlockWrapper(props: BlockWrapperProps) {
  const { children } = props;

  return <section className={`flex px-4 pt-1 pb-2 grow`}>{children}</section>;
}
