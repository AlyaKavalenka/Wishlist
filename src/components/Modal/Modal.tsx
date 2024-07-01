import { ModalProps } from '../../types/types';

export default function Modal(props: ModalProps) {
  const { children, isOpen, toggle } = props;

  return (
    <>
      {isOpen && (
        <section
          className="absolute flex h-full w-full items-start justify-center bg-white/30 p-7"
          onClick={toggle}
          onKeyDown={() => {}}
          role="textbox"
          tabIndex={-1}
        >
          <section
            className="fixed w-5/6 rounded-lg rounded-b-xl bg-gradient-to-b from-white to-indigo-200 px-4 py-3 shadow-lg shadow-indigo-200"
            onClick={(e) => e.stopPropagation()}
            role="textbox"
            tabIndex={-1}
            onKeyUp={() => {}}
          >
            {children}
          </section>
        </section>
      )}
    </>
  );
}
