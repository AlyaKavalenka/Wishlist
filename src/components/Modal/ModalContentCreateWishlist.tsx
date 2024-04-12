import { FieldValues, useForm } from 'react-hook-form';
import FormInputText from '../Form/FormInputText';
import useModal from '@/hooks/useModal';
import { useCreateWishlistMutation } from '@/lib/api/endpointsWishlist';
import FormInputDate from '../Form/FormInputDate';
import FormInputTime from '../Form/FormInputTime';
import BtnCancel from '../Btns/BtnCancel';
import BtnCreate from '../Btns/BtnCreate';

export default function ModalContentCreate() {
  const { handleSubmit, control } = useForm();
  const { toggle } = useModal();

  const [createWishlist] = useCreateWishlistMutation();

  function onSubmit(data: FieldValues) {
    // TODO: change user_id
    createWishlist({ title: data.createWishlist, user_id: 3 }).then(() =>
      toggle(),
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-slate-400 self-center">Create wish list</h3>
      <section className="flex flex-col gap-3">
        <FormInputText name="wishlistTitle" control={control} label="Title" />
        <section className="flex flex-col gap-1">
          <h4 className="text-stone-500 font-medium">Event date & time</h4>
          <div className="flex gap-2">
            <FormInputDate name="wishlistEventDate" control={control} />
            <FormInputTime name="wishlistEventTime" control={control} />
          </div>
        </section>
        <section className="flex flex-col gap-1">
          <h4 className="text-stone-500 font-medium">Upload image</h4>
          <div className="grid grid-cols-2 gap-[1px]">
            <button
              type="button"
              className="bg-indigo-400/70 rounded-s-lg py-3 font-semibold text-white"
            >
              by link
            </button>
            <button
              type="button"
              className="bg-violet-400/70 rounded-e-lg py-3 font-semibold text-white"
            >
              from device
            </button>
          </div>
        </section>
        <div className="flex justify-end gap-1 pt-2">
          <BtnCancel
            handleClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          />
          <BtnCreate />
        </div>
      </section>
    </form>
  );
}
