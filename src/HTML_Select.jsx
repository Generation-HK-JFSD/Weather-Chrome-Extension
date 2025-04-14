function Select({ name, options = [], onChangeHandler, selectedValue }) {
  let select = (
    <select name={name} onChange={onChangeHandler} value={selectedValue}>
      {options.map((el) => {
        return (
          <option key={el.place} value={el.place}>
            {el.place}
          </option>
        );
      })}
    </select>
  );

  return select;
}

export default Select;
