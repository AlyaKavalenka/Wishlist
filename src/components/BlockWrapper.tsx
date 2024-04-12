import { useAppSelector } from '@/lib/hooks';

interface BlockWrapperProps {
  children: React.ReactNode;
}

export default function BlockWrapper(props: BlockWrapperProps) {
  const { children } = props;
  const isOpen = useAppSelector((state) => state.IsOpenModal.value);

  return (
    <section className={`flex px-4 pt-1 pb-2 grow ${isOpen && 'blur-sm'}`}>
      {children}
    </section>
  );
}
