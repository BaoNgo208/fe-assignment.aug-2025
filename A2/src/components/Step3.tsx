import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Check } from "lucide-react";
import { Field } from "./Field";
import { FormData } from "./PdfDoc";

export const step3Schema = z.object({
  notes: z.string().min(1, "Required"),
});

interface Step3Props {
  defaults: Partial<FormData>;
  onBack: () => void;
  onSubmitAll: SubmitHandler<z.infer<typeof step3Schema>>;
}

export const Step3: React.FC<Step3Props> = ({
  defaults,
  onBack,
  onSubmitAll,
}) => {
  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof step3Schema>
  >({
    resolver: zodResolver(step3Schema),
    defaultValues: defaults,
    mode: "onChange",
  });

  const { errors, isValid, isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmitAll)} className="space-y-1">
      <Field label="Notes" error={errors.notes?.message}>
        <textarea
          rows={5}
          {...register("notes")}
          className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </Field>

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
          className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-2xl shadow disabled:opacity-40"
        >
          Submit <Check size={16} />
        </button>
      </div>
    </form>
  );
};
