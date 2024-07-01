import { useAppSelector } from '@/lib/hooks';

interface BlockWrapperProps {
  children: React.ReactNode;
}

export default function BlockWrapper(props: BlockWrapperProps) {
  const { children } = props;
  const isOpen = useAppSelector((state) => state.IsOpenModal.value);

  return (
    <section
      className={`flex h-full grow px-4 pb-2 pt-1 ${isOpen && 'blur-sm'}`}
    >
      {children}
    </section>
  );
}
