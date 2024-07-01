interface BtnCreateProps {
  disabled: boolean;
}

export default function BtnCreate(props: BtnCreateProps) {
  const { disabled } = props;

  return (
    <button
      type="submit"
      className={`rounded-lg bg-indigo-400 px-3 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:grayscale`}
      disabled={disabled}
    >
      Create
    </button>
  );
}
