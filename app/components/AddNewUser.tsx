"use client";
// interface Props {
//   text: string;
// }

const AddNewUser = ({ text }: { text: string }) => {
  return (
    <button
      onClick={() => console.log("Clicked")}
      className="text-green-800 block"
    >
      {text}
    </button>
  );
};

export default AddNewUser;
