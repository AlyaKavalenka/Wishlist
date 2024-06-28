import {
  createWishlistBodyReq,
  useCreateWishlistMutation,
  useGetWishlistsQuery,
} from '@/lib/api/endpointsWishlist';
import { WishlistResponse } from '@/types/types';
import { Control, Controller, useFormContext } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

interface FormMultiSelectProps {
  name: string;
  control: Control;
}

export default function FormMultiSelect(props: FormMultiSelectProps) {
  const { name, control } = props;

  const { setValue } = useFormContext();

  const { data: wishlistsData, error, isLoading } = useGetWishlistsQuery(null);

  const [createWishlist] = useCreateWishlistMutation();

  const handleCreate = (
    createdValue: string,
    value: { value: string; label: string }[],
  ) => {
    const body: createWishlistBodyReq = {
      title: createdValue,
    };
    createWishlist(body).then(
      (result) =>
        setValue(name, [
          ...value,
          {
            value: (result as { data: WishlistResponse }).data.wishlist_id,
            label: (result as { data: WishlistResponse }).data.title,
          },
        ]),
      (error) => console.error(error),
    );
  };

  return (
    <>
      {!error && (
        <Controller
          name={name}
          control={control}
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <CreatableSelect
              options={wishlistsData?.map((item) => ({
                value: item.wishlist_id,
                label: item.title,
              }))}
              isMulti
              placeholder="Select wishlist..."
              isClearable
              value={value}
              isDisabled={isLoading}
              isLoading={isLoading}
              onChange={onChange}
              onCreateOption={(createdValue) =>
                handleCreate(createdValue, value)
              }
              unstyled
              classNames={{
                control: () =>
                  'rounded-t-lg rounded-b border-b-2 border-violet-700/70 bg-white/40 pr-1 pl-2 gap-1',
                placeholder: () => 'text-sm text-slate-400',
                menu: () =>
                  'bg-white/40 rounded-b-lg rounded-t backdrop-blur-sm',
                menuList: () => 'flex flex-col mt-2 ml-2 gap-1',
                option: () => 'p-1 pl-0.5 tracking-wide',
                valueContainer: () => 'tracking-wide text-sm gap-0.5',
                indicatorsContainer: () => 'gap-0.5',
                multiValue: () =>
                  'bg-slate-200/60 pl-2 pr-1 rounded flex gap-0.5',
              }}
            />
          )}
        />
      )}
    </>
  );
}
