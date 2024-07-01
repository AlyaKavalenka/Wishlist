import React from 'react';

interface BtnCancelProps {
  // eslint-disable-next-line no-unused-vars
  handleClick: (e: React.MouseEvent) => void;
}

export default function BtnCancel(props: BtnCancelProps) {
  const { handleClick } = props;

  return (
    <button
      type="button"
      className="rounded-lg bg-black/15 px-3 py-2 font-semibold text-white"
      onClick={handleClick}
    >
      Cancel
    </button>
  );
}
