interface BtnCreateProps {
  disabled: boolean;
}

export default function BtnCreate(props: BtnCreateProps) {
  const { disabled } = props;

  return (
    <button
      type="submit"
      className={`bg-indigo-400 rounded-lg px-3 py-2 text-white font-semibold disabled:grayscale disabled:cursor-not-allowed`}
      disabled={disabled}
    >
      Create
    </button>
  );
}
