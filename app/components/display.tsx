interface Foot {
  value: any;
}

export default function Seed({ value }: Foot) {
  return (
    <>
      <span className="p-3">{value}</span>
    </>
  );
}
// export default function Seed({ value }: Foot) {
//   return (
//     <>
//       <span className="p-3">{value}</span>
//     </>
//   );
// }
