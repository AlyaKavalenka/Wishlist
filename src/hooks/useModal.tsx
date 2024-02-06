import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { isOpenModalValue } from '@/lib/reducers/IsOpenModalSlice';

export default function useModal() {
  const isOpen = useAppSelector((state) => state.IsOpenModal.value);
  const dispatch = useAppDispatch();

  function toggle() {
    dispatch(isOpenModalValue(!isOpen));
  }

  return { toggle };
}
