import { Checkbox } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type?: string;
  name: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  prefix?: any;
};

const MedCheckBox = ({
  type,
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
          <Checkbox {...field} required={required}>
            {label}
            {required && <span className="text-gray-500">*</span>}
            {error && (
              <span className="text-red-500 text-sm absolute left-0 -bottom-8">
                {error.message}
              </span>
            )}
          </Checkbox>
        )}
      />
    </div>
  );
};

export default MedCheckBox;
