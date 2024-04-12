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
      className="bg-black/15 text-white px-3 py-2 rounded-lg font-semibold"
      onClick={handleClick}
    >
      Cancel
    </button>
  );
}
