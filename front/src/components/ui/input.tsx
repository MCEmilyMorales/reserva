const Input = ({
  label = "",
  name = "",
  type = "",
  placeholder = "",
  //value,
  // onChange,
  error = "",
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-dos">
          {label}
        </label>
      )}
      <div className="mt-1">
        <input
          id={name}
          type={type}
          name={name}
          //value={value}
          //onChange={onChange}
          placeholder={placeholder}
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-tres placeholder-tres text-uno focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
          {...rest}
        />
        {error && <span className=" text-red-600"></span>}
      </div>
    </div>
  );
};

export default Input;
