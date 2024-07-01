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
import { useState } from 'react';
import FormHeader from '../Form/FormHeader';
import BtnsUploadImages from '../Btns/BtnsUploadImages';
import BtnsCancelNCreate from '../Btns/BtnsCancelNCreate';
import FormFieldWrapper from '../Form/FormFieldWrapper';

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
      <h4 className="font-medium text-stone-500">
        {optionalHeaderProps.headerText}
      </h4>
      <span className="font-extralight text-stone-400">(optional)</span>
    </div>
  );

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>Create wish list</FormHeader>
      <section className="flex flex-col gap-3">
        <FormFieldWrapper headerText="Title" isOptional={false}>
          <FormInputText
            name="wishlistTitle"
            control={control}
            placeholder="Type wishlist title"
            required="Title is required"
          />
        </FormFieldWrapper>
        <section className="flex flex-col gap-1">
          <OptionalHeader headerText="Event date" />
          <div className="flex gap-2">
            <FormInputDate name="wishlistEventDate" control={control} />
            <FormInputTime name="wishlistEventTime" control={control} />
          </div>
        </section>
        <BtnsUploadImages />
        <BtnsCancelNCreate errors={errors} />
      </section>
    </form>
  );
}
