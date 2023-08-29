const DismissAlert = () => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Hello!</strong> Work
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <button className="btn btn-primary">Hello!!</button>
    </>
  );
};

export default DismissAlert;
