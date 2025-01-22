interface BackdropProps {
  onClick: () => void;
}

function Backdrop({ onClick }: BackdropProps) {
  return (
    <div
      className='fixed inset-0 -z-40 bg-black opacity-50'
      onClick={onClick}
    />
  );
}

export default Backdrop;
