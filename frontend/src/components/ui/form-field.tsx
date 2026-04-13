import {
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function FormField<T extends FieldValues>({
  name,
  label,
  type = "text",
  placeholder,
  disabled,
  className,
}: FormFieldProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className={cn(error && "border-danger-500 focus-visible:ring-danger-500")}
      />
      {error && (
        <p className="text-sm text-danger-500">
          {error.message as string}
        </p>
      )}
    </div>
  );
}
