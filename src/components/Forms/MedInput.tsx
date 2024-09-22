import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  prefix?: any;
};

const MedInput = ({
  type = "text",
  name,
  label,
  placeholder,
  disabled,
  required = true,
  prefix,
}: TInputProps) => {
  return (
    <div className="w-full">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            <input
              type={type}
              className="inputText"
              required={required}
              onChange={field.onChange}
            />
            <span className="floating-label">
              {placeholder}

              {required && <span className="text-gray-500">*</span>}
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default MedInput;
