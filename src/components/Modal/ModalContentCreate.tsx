import { useForm } from 'react-hook-form';
import FormInputText from '../Form/FormInputText';
import useModal from '@/hooks/useModal';

export default function ModalContentCreate() {
  const { register, handleSubmit, reset, control, setValue } = useForm();
  const { toggle } = useModal();

  const btnStyle =
    'text-orange-900 hover:bg-orange-700/20 rounded py-1 px-2 text-sm';

  return (
    <form className="flex flex-col gap-4">
      <FormInputText
        name="createWishlist"
        control={control}
        label="Wishlist name"
      />
      <div className="flex justify-end gap-1">
        <button
          type="button"
          className={`${btnStyle}`}
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`${btnStyle}`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Create
        </button>
      </div>
    </form>
  );
}
