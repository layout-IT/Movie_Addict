/* eslint-disable @typescript-eslint/no-explicit-any */
interface IInputField {
  nameField: string;
  register: any;
}

export const InputField: React.FC<IInputField> = ({ nameField, register }) => {
  return (
    <input
      {...register(
        `${nameField}`,
        {
          required: {
            message: `${nameField} is required`,
            value: true,
          },
        }
      )}
      className="px-3
                py-2
                border-2
                rounded-2xl
                border-gray-500
                placeholder-gray-800
                hover:relative
                hover:scale-105
                transition-all
                ease-in-out
                w-[300px]
                mr-[10px]"
      placeholder={nameField}
      type="text"
    />
  );
};
