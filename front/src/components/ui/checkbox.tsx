const Checkbox = ({ label, name = "", type = "" }) => {
  return (
    <div className="flex items-center">
      <input
        id={name}
        type={type}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-cinco rounded"
      />
      {label && (
        <label htmlFor={name} className="ml-2 block text-sm text-uno">
          {label}
        </label>
      )}
    </div>
  );
};
export default Checkbox;
