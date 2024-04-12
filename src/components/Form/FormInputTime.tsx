import { Control, Controller } from 'react-hook-form';

interface FormInputTimeProps {
  name: string;
  control: Control;
}

export default function FormInputTime(props: FormInputTimeProps) {
  const { name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div className="min-w-20">
          <div className="relative z-0">
            <input
              type="time"
              id={name}
              className={`block py-2.5 px-2 w-full ${!error ? 'text-black' : 'text-red-600'} bg-white/30 border-0 border-b-2 ${!error ? 'border-white/80' : 'border-red-600'} focus:outline-none focus:ring-0 focus:${!error ? 'border-orange-700' : 'border-red-600'} peer rounded-t-lg rounded-b-sm font-extralight`}
              placeholder=" "
              onChange={onChange}
              value={value}
              onBlur={() => onBlur()}
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
