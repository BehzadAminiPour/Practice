"use client";

const AddNewUser = ({ text }: { text: string }) => {
  return (
    <button
      onClick={() => console.log("Clicked")}
      className="bg-green-800 text-stone-50 text-sm p-1 rounded-md block "
    >
      {text}
    </button>
  );
};

export default AddNewUser;
