import { Control, Controller } from 'react-hook-form';

interface FormInputTextProps {
  name: string;
  control: Control;
  label: string;
}

export default function FormInputText(props: FormInputTextProps) {
  const { name, control, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div>
          <div className="relative z-0">
            <input
              type="text"
              id={name}
              className={`block py-2.5 px-2 w-full ${!error ? 'text-black' : 'text-red-600'} bg-white/30 border-0 border-b-2 ${!error ? 'border-white/80' : 'border-red-600'} appearance-none focus:outline-none focus:ring-0 focus:${!error ? 'border-orange-700' : 'border-red-600'} peer rounded-t-lg rounded-b-sm font-extralight`}
              placeholder=" "
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
            <label
              htmlFor={name}
              className={`absolute ${!error ? 'text-stone-500' : 'text-red-600'} font-medium duration-300 transform -translate-y-6 scale-75 left-2 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:${!error ? 'text-orange-700' : 'text-red-600'}
            peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
            >
              {label}
            </label>
          </div>
          {error && (
            <p className="mt-2 text-xs text-red-600">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
