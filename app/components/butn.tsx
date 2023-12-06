interface Chips {
  children: any;
  onclick: () => void;
  className: any;
}
export function __onclick() {}
export default function Potatoes({ children, onclick, className }: Chips) {
  return (
    <>
      <button onClick={onclick} className="bg-red-400 p-3 rounded-md">
        {children}
      </button>
    </>
  );
}
