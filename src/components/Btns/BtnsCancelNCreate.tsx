import useModal from '@/hooks/useModal';
import BtnCancel from './BtnCancel';
import BtnCreate from './BtnCreate';
import { FieldErrors, FieldValues } from 'react-hook-form';

interface BtnsCancelNCreateProps {
  errors: FieldErrors<FieldValues>;
}

export default function BtnsCancelNCreate(props: BtnsCancelNCreateProps) {
  const { errors } = props;

  const { toggle } = useModal();

  return (
    <div className="flex justify-end gap-1 pt-2">
      <BtnCancel
        handleClick={(e) => {
          e.preventDefault();
          toggle();
        }}
      />
      <BtnCreate disabled={!!errors && !!Object.keys(errors).length} />
    </div>
  );
}
