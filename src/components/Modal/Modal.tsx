import { ModalProps } from '../../types/types';

export default function Modal(props: ModalProps) {
  const { children, isOpen, toggle } = props;

  return (
    <>
      {isOpen && (
        <section
          className="absolute flex w-full justify-end h-full items-end bg-orange-950/50"
          onClick={toggle}
          onKeyDown={() => {}}
          role="textbox"
          tabIndex={-1}
        >
          <section
            className="bg-orange-200 mr-20 p-4 shadow-sm shadow-orange-200 bottom-20 fixed rounded-md 
            before:absolute before:bottom-0 before:h-full before:rounded-tr-xl  before:-right-3 before:w-6 before:bg-orange-200 before:shadow-orange-200 before:shadow-sm
            after:-right-[12.3917px] after:w-4 after:bg-orange-950/80 after:rounded-bl-3xl after:absolute after:bottom-0 after:h-full after:rounded-tr-2xl"
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
