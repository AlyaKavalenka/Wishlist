import { ModalProps } from '../../types/types';

export default function Modal(props: ModalProps) {
  const { children, isOpen, toggle } = props;

  return (
    <>
      {isOpen && (
        <section
          className="absolute flex w-full justify-center h-full items-center bg-white/30"
          onClick={toggle}
          onKeyDown={() => {}}
          role="textbox"
          tabIndex={-1}
        >
          <section
            className="bg-gradient-to-b from-white to-indigo-200 rounded-b-xl px-4 py-3 shadow-lg shadow-indigo-200 fixed rounded-lg w-5/6"
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
