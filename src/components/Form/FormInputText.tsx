import { Control, Controller } from 'react-hook-form';

interface FormInputTextProps {
  name: string;
  control: Control;
  required: boolean | string;
  placeholder: string;
}

export default function FormInputText(props: FormInputTextProps) {
  const { name, control, required, placeholder } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div>
          <div className="relative z-0">
            <input
              type="text"
              id={name}
              className={`block w-full px-2 py-2.5 ${!error ? 'text-black' : 'text-red-600'} border-0 border-b-2 bg-white/30 ${!error ? 'border-white/80' : 'border-red-600'} appearance-none focus:outline-none focus:ring-0 focus:${!error ? 'border-orange-700' : 'border-red-600'} peer rounded-b-sm rounded-t-lg font-extralight`}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
          </div>
          {error && (
            <p className="mt-2 text-xs text-red-600">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
