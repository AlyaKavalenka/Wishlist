import {
  FieldValues,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import FormInputText from '../Form/FormInputText';
import useModal from '@/hooks/useModal';
import { useCreateWishMutation } from '@/lib/api/endpointsWish';
import { useEffect } from 'react';
import Image from 'next/image';
import FormMultiSelect from '../Form/FormMultiSelect';
import FormHeader from '../Form/FormHeader';
import FormFieldWrapper from '../Form/FormFieldWrapper';
import BtnsUploadImages from '../Btns/BtnsUploadImages';
import BtnsCancelNCreate from '../Btns/BtnsCancelNCreate';

interface ModalContentCreateWishProps {}

export default function ModalContentCreateWish(
  props: ModalContentCreateWishProps,
) {
  const {} = props;

  const methods = useForm();
  const { control, handleSubmit, getValues, register } = methods;

  const {
    fields: linksFields,
    append: appendLink,
    remove: removeLink,
  } = useFieldArray({
    control,
    name: 'wishLinks',
  });

  const {
    fields: photosFields,
    append: appendPhoto,
    remove: removePhoto,
  } = useFieldArray({
    control,
    name: 'wishPhotos',
  });

  useEffect(() => {
    appendLink('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { toggle } = useModal();

  const [createWish] = useCreateWishMutation();

  function onSubmit(data: FieldValues) {
    const { wishName, wishDescription, wishLinks, wishPhotos, wishlists } =
      data;

    // if (wishlist_id) {
    //   createWish({
    //     wishlist_id,
    //     name: wishName,
    //     description: wishDescription,
    //     links: wishLinks,
    //     photos: wishPhotos,
    //   }).then(() => toggle());
    // } else {
    //   throw new Error(
    //     'Error: something went wrong with wishlist_id:' + wishlist_id,
    //   );
    // }
  }

  useEffect(() => {
    const linksFieldsValues: string[] = getValues('wishLinks');
    linksFieldsValues.map(async (link, index) => {
      if (!!link) {
        const isImage = await fetch(link, { method: 'HEAD' })
          .then((response) =>
            response.headers.get('Content-Type')?.startsWith('image'),
          )
          .catch((error) => {
            console.error(
              'Custom Error: not image or not supposed to determinate image. ',
              'Error message: ',
              error.message,
            );
          });
        if (isImage) {
          appendPhoto(link);
          removeLink(index);
        }
      }
    });
  }, [appendPhoto, getValues, linksFields, removeLink]);

  return (
    <FormProvider {...methods}>
      <form
        className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto overscroll-none scroll-smooth p-2 scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-400"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="flex justify-between gap-1">
          <FormHeader>Create wish</FormHeader>
          <FormMultiSelect name="wishlists" control={control} />
        </section>

        <section className="flex flex-col gap-3">
          <FormFieldWrapper headerText="Name" isOptional={false}>
            <FormInputText
              name="wishName"
              control={control}
              required={false}
              placeholder="Type wish name"
            />
          </FormFieldWrapper>

          <FormFieldWrapper headerText="Description" isOptional={true}>
            <FormInputText
              name="wishDescription"
              control={control}
              required={false}
              placeholder="Type wish description"
            />
          </FormFieldWrapper>

          <FormFieldWrapper headerText="Links" isOptional={true}>
            {...linksFields.map((field, index) => (
              <FormInputText
                name={`wishLinks.${index}`}
                control={control}
                key={field.id}
                required={false}
                placeholder="Past link to a photo or website"
              />
            ))}
          </FormFieldWrapper>

          <button
            type="button"
            className="flex items-start rounded-lg bg-violet-400/30 px-3 py-2 font-semibold text-white shadow-md shadow-violet-400/70"
            onClick={() => appendLink('')}
          >
            + Add link
          </button>
          <BtnsUploadImages />
          <section className="flex flex-wrap gap-2">
            {...photosFields.map((filed, index) => (
              <Image
                src={getValues(`wishPhotos.${index}`)}
                {...register(`wishPhotos.${index}`)}
                width={70}
                height={70}
                unoptimized
                key={filed.id}
                alt={getValues(`wishPhotos.${index}`)}
                className="rounded-md shadow"
              />
            ))}
          </section>
          <BtnsCancelNCreate errors={methods.formState.errors} />
        </section>
      </form>
    </FormProvider>
  );
}
