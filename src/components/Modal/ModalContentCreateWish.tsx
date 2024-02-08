import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import FormInputText from '../Form/FormInputText';
import useModal from '@/hooks/useModal';
import { useCreateWishMutation } from '@/lib/api/endpointsWish';
import { useEffect } from 'react';

interface ModalContentCreateWishProps {
  wishlist_id: number | undefined;
}

export default function ModalContentCreateWish(
  props: ModalContentCreateWishProps,
) {
  const { wishlist_id } = props;

  const { handleSubmit, control } = useForm();
  const { fields: linksFields, append: appendLink } = useFieldArray({
    control,
    name: 'wishLinks',
  });

  const { fields: photosFields, append: appendPhoto } = useFieldArray({
    control,
    name: 'wishPhotos',
  });

  useEffect(() => {
    appendLink('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { toggle } = useModal();

  const [createWish] = useCreateWishMutation();

  const btnStyle =
    'text-orange-900 hover:bg-orange-700/20 rounded py-1 px-2 text-sm';

  function onSubmit(data: FieldValues) {
    const { wishName, wishDescription, wishLinks, wishPhotos } = data;

    if (wishlist_id) {
      createWish({
        wishlist_id,
        name: wishName,
        description: wishDescription,
        links: wishLinks,
        photos: wishPhotos,
      }).then(() => toggle());
    } else {
      throw new Error(
        'Error: something went wrong with wishlist_id:' + wishlist_id,
      );
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormInputText name="wishName" control={control} label="Wish name" />
      <FormInputText
        name="wishDescription"
        control={control}
        label="Wish description*"
      />
      {...linksFields.map((field, index) => (
        <FormInputText
          name={`wishLinks.${index}`}
          control={control}
          label="Wish link*"
          key={field.id}
        />
      ))}
      <button
        type="button"
        className="text-sm rounded-md text-orange-200 hover:text-orange-100 bg-orange-500/60 hover:bg-orange-500 p-2"
        onClick={() => appendLink('')}
      >
        Add a link to a photo or website
      </button>
      <span className="text-xs opacity-45">* - optional</span>
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
