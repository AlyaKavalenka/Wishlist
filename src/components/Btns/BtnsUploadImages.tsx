import FormFieldWrapper from '../Form/FormFieldWrapper';

export default function BtnsUploadImages() {
  return (
    <section className="flex flex-col gap-1">
      <FormFieldWrapper headerText="Upload image" isOptional>
        <div className="grid grid-cols-2 gap-[1px]">
          <button
            type="button"
            className="rounded-s-lg bg-indigo-400/70 py-3 font-semibold text-white"
          >
            by link
          </button>
          <button
            type="button"
            className="rounded-e-lg bg-violet-400/70 py-3 font-semibold text-white"
          >
            from device
          </button>
        </div>
      </FormFieldWrapper>
    </section>
  );
}
