import { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ onNewCategory }) {
  const [inputValor, setInput] = useState("");

  const inputValue = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValor.trim().length <= 1) return;
    onNewCategory(inputValor.trim());
    setInput("");
  };

  return (
    <>
      <form onSubmit={(event) => onSubmit(event)} aria-label="form">
        <input
          type="text"
          placeholder="ingrese nueva categoria"
          value={inputValor}
          onChange={inputValue}
        />
      </form>
    </>
  );
}

export default AddCategory;

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}