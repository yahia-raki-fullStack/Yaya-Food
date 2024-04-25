const ErrorPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          We apologize for the inconvenience. It seems that there was an error
          processing your request.
        </p>
        <button
          onClick={goBack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
