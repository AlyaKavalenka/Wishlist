interface FormFieldWrapperProps {
  children: React.ReactNode;
  headerText: string;
  isOptional: boolean;
}

export default function FormFieldWrapper(props: FormFieldWrapperProps) {
  const { children, headerText, isOptional } = props;

  const Header = (optionalHeaderProps: { headerText: string }) => (
    <div className="flex gap-1">
      <h4 className="text-stone-500 font-medium">
        {optionalHeaderProps.headerText}
      </h4>
      {isOptional && (
        <span className="text-stone-400 font-extralight">(optional)</span>
      )}
    </div>
  );

  return (
    <section className="flex flex-col gap-1">
      <Header headerText={headerText} />
      {children}
    </section>
  );
}
