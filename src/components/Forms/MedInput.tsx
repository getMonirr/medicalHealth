import { Button } from "antd";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  isShowPassword?: any;
};

const MedInput = ({
  type,
  name,
  label,
  placeholder,
  disabled,
  required = true,
}: TInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="w-full">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            <input
              type={(type === "password" && isShowPassword && "text") || type}
              className="inputText"
              required={required}
              onChange={field.onChange}
            />
            <span className="floating-label">
              {placeholder}

              {required && <span className="text-gray-500">*</span>}
            </span>
            {error && (
              <span className="text-red-500 text-sm absolute left-0 -bottom-5">
                {error.message}
              </span>
            )}
            {type === "password" &&
              (isShowPassword ? (
                <Button
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  type="text"
                  className="absolute right-0 top-0"
                  icon={<BsEyeFill />}
                />
              ) : (
                <Button
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  type="text"
                  className="absolute right-0 top-0"
                  icon={<BsEyeSlash />}
                />
              ))}
          </div>
        )}
      />
    </div>
  );
};

export default MedInput;
