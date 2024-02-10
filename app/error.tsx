"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <div className="text-slate-50">
      <div>Unexpected error has occured!</div>
      <button onClickCapture={() => reset()} className="btn btn-primary">
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
