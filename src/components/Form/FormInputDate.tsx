import { Control, Controller } from 'react-hook-form';

interface FormInputDateProps {
  name: string;
  control: Control;
}

export default function FormInputDate(props: FormInputDateProps) {
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
        <div className="grow">
          <div className="relative z-0">
            <input
              type="date"
              id={name}
              className={`block w-full px-2 py-2.5 ${!error ? 'text-black' : 'text-red-600'} border-0 border-b-2 bg-white/30 ${!error ? 'border-white/80' : 'border-red-600'} focus:outline-none focus:ring-0 focus:${!error ? 'border-orange-700' : 'border-red-600'} peer rounded-b-sm rounded-t-lg font-extralight`}
              placeholder=" "
              onChange={onChange}
              value={value}
              onBlur={() => {
                onBlur();
              }}
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
