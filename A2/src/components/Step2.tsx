import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FormData } from "./PdfDoc";
import { Field } from "./Field";

export const step2Schema = z.object({
  address1: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  country: z.string().min(1, "Required"),
  postal: z.string().min(3, "Too short"),
});

interface Step2Props {
  defaults: Partial<FormData>;
  onBack: () => void;
  onSubmit: SubmitHandler<z.infer<typeof step2Schema>>;
}

export const Step2: React.FC<Step2Props> = ({ defaults, onBack, onSubmit }) => {
  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof step2Schema>
  >({
    resolver: zodResolver(step2Schema),
    defaultValues: defaults,
    mode: "onChange",
  });
  const { errors, isValid, isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
      <Field label="Address" error={errors.address1?.message}>
        <input
          {...register("address1")}
          className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </Field>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Field label="City" error={errors.city?.message}>
          <input
            {...register("city")}
            className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </Field>
        <Field label="Country" error={errors.country?.message}>
          <input
            {...register("country")}
            className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </Field>
        <Field label="Postal code" error={errors.postal?.message}>
          <input
            {...register("postal")}
            className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </Field>
      </div>

      <div className="flex justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border"
        >
          <ArrowLeft size={16} /> Back
        </button>
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
