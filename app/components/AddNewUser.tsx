"use client";

const AddNewUser = ({ text }: { text: string }) => {
  return (
    <button
      onClick={() => console.log("Clicked")}
      className="btn btn-secondary btn-sm my-2"
    >
      {text}
    </button>
  );
};

export default AddNewUser;
