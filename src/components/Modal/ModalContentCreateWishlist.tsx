import { FieldValues, useForm } from 'react-hook-form';
import FormInputText from '../Form/FormInputText';
import useModal from '@/hooks/useModal';
import {
  createWishlistBodyReq,
  useCreateWishlistMutation,
  useGetWishlistsQuery,
} from '@/lib/api/endpointsWishlist';
import FormInputDate from '../Form/FormInputDate';
import FormInputTime from '../Form/FormInputTime';
import BtnCancel from '../Btns/BtnCancel';
import BtnCreate from '../Btns/BtnCreate';
import { useState } from 'react';

export default function ModalContentCreate() {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();
  const { toggle } = useModal();
  const [image, setImage] = useState('');
  const [createWishlist] = useCreateWishlistMutation();
  const { data: wishlistsData } = useGetWishlistsQuery(null);

  function onSubmit(data: FieldValues) {
    const foundTitle = wishlistsData?.find(
      (wishlist: { title: string }) => wishlist.title === data.wishlistTitle,
    );
    if (!foundTitle) {
      const body: createWishlistBodyReq = {
        title: data.wishlistTitle,
      };
      if (!!image) body.wishlist_img = image;

      if (!!data.wishlistEventDate) {
        const newDate = new Date(data.wishlistEventDate);

        if (!!data.wishlistEventTime) {
          const [hours, minutes] = data.wishlistEventTime.split(':');
          newDate.setHours(hours, minutes);
        }

        body.event_date = newDate;
      }
      createWishlist(body).then(() => toggle());
    } else {
      setError('wishlistTitle', {
        message: 'Wishlist with this title already exist',
        type: 'setValueAs',
      });
    }
  }

  const OptionalHeader = (optionalHeaderProps: { headerText: string }) => (
    <div className="flex gap-1">
      <h4 className="text-stone-500 font-medium">
        {optionalHeaderProps.headerText}
      </h4>
      <span className="text-stone-400 font-extralight">(optional)</span>
    </div>
  );

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-slate-400 self-center">Create wish list</h3>
      <section className="flex flex-col gap-3">
        <FormInputText
          name="wishlistTitle"
          control={control}
          label="Title"
          required="Title is required"
        />
        <section className="flex flex-col gap-1">
          <OptionalHeader headerText="Event date" />
          <div className="flex gap-2">
            <FormInputDate name="wishlistEventDate" control={control} />
            <FormInputTime name="wishlistEventTime" control={control} />
          </div>
        </section>
        <section className="flex flex-col gap-1">
          <OptionalHeader headerText="Upload image" />
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
          <BtnCreate disabled={!!errors && !!Object.keys(errors).length} />
        </div>
      </section>
    </form>
  );
}
