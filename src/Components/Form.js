const Form = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    // const form = event.target.closest("form");
    // const formData = new FormData(form);
    // const userInput = {};
    // for (const [key, value] of formData.entries()) {
    //   userInput[key] = value;
    // }
    calculateHandler(userInput);
  };
  return (
    <form className="form" onSubmit="submitHandler">
      {props.children}
    </form>
  );
};

export default Form;
