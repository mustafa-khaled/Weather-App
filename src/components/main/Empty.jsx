function Empty({ message }) {
  return (
    <div className="container mx-auto mt-[20px] flex min-h-[calc(100vh-90px)] items-center justify-center px-[10px] text-textColor">
      <h2 className="text-3xl font-bold">{message}</h2>
    </div>
  );
}

export default Empty;
