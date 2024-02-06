import { FieldValues, useForm } from 'react-hook-form';
import FormInputText from '../Form/FormInputText';
import useModal from '@/hooks/useModal';
import { useCreateWishlistMutation } from '@/lib/api/endpointsWishlist';

export default function ModalContentCreate() {
  const { handleSubmit, control } = useForm();
  const { toggle } = useModal();

  const [createWishlist] = useCreateWishlistMutation();

  const btnStyle =
    'text-orange-900 hover:bg-orange-700/20 rounded py-1 px-2 text-sm';

  function onSubmit(data: FieldValues) {
    // TODO: change user_id
    createWishlist({ title: data.createWishlist, user_id: 3 }).then(() =>
      toggle(),
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit" className={`${btnStyle}`}>
          Create
        </button>
      </div>
    </form>
  );
}
