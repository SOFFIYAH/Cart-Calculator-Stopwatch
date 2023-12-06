interface Fish {
  children: string;
  onClick: () => void;
}

export function __onclick() {}

export default function Btn({ children, onClick }: Fish) {
  return (
    <>
      <button onClick={onClick} className="bg-blue-500 text-white p-3 ">
        {children}
      </button>
    </>
  );
}
