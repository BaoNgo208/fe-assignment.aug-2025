import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Field } from "./Field";
import { FormData } from "./PdfDoc";

export const step1Schema = z.object({
  fullName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(8, "Too short")
    .regex(/^[0-9+()\-\s]*$/, "Digits and symbols only"),
});

export interface Step1Props {
  defaults: Partial<FormData>;
  onSubmit: SubmitHandler<z.infer<typeof step1Schema>>;
}

export const Step1: React.FC<Step1Props> = ({ defaults, onSubmit }) => {
  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof step1Schema>
  >({
    resolver: zodResolver(step1Schema),
    defaultValues: defaults,
    mode: "onChange",
  });
  const { errors, isValid, isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
      <Field label="Full name" error={errors.fullName?.message}>
        <input
          {...register("fullName")}
          className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          {...register("email")}
          className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </Field>
      <Field label="Phone" error={errors.phone?.message}>
        <input
          {...register("phone")}
          className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </Field>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-2xl shadow disabled:opacity-40"
        >
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
};
