function Select({
  name,
  options = [],
  onChangeHandler,
  selectedValue,
  className,
}) {
  let select = (
    <select
      name={name}
      onChange={onChangeHandler}
      value={selectedValue}
      className={className}
    >
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
