import { useEffect, useMemo, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { PDFViewer } from "@react-pdf/renderer";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import PdfDoc from "./components/PdfDoc";
import { FormData } from "./components/PdfDoc";
import { StepHeader } from "./components/StepHeader";
import { Step1, step1Schema } from "./components/Step1";
import { Step2, step2Schema } from "./components/Step2";
import { Step3, step3Schema } from "./components/Step3";

export default function App() {
  const [step, setStep] = useState<number>(1);
  const [resetEpoch, setResetEpoch] = useState<number>(0);

  const [data, setData] = useState<Partial<FormData>>({});
  const [previewData, setPreviewData] = useState<Partial<FormData>>({});

  const onReset = () => {
    setData({});
    setPreviewData({});
    setStep(1);
    setResetEpoch((e) => e + 1);
  };

  const handleStep1Submit: SubmitHandler<z.infer<typeof step1Schema>> = (
    payload
  ) => {
    const merged = { ...data, ...payload };
    setData(merged);
    setPreviewData(merged);
    setStep(2);
  };

  const handleStep2Submit: SubmitHandler<z.infer<typeof step2Schema>> = (
    payload
  ) => {
    const merged = { ...data, ...payload };
    setData(merged);
    setPreviewData(merged);
    setStep(3);
  };

  const handleAllSubmit: SubmitHandler<z.infer<typeof step3Schema>> = (
    payload
  ) => {
    const merged = { ...data, ...payload };
    setData(merged);
    setPreviewData(merged);
  };

  useEffect(() => console.log(data), [data]);

  const stepTitle = useMemo(() => {
    return ["Personal Information", "Address Details", "Notes & Confirmation"][
      step - 1
    ];
  }, [step]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            A2: Multi‑Step Form with Live PDF Preview
          </h1>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border bg-white shadow-sm"
          >
            <RotateCcw size={16} /> Reset All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-5 md:p-6">
            <div className="mb-5 space-y-4">
              <StepHeader step={step} />
              <motion.h2
                key={stepTitle}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-lg font-semibold"
              >
                {step}. {stepTitle}
              </motion.h2>
            </div>

            <motion.div
              key={`${step}-${resetEpoch}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {step === 1 && (
                <Step1
                  key={`s1-${resetEpoch}`}
                  defaults={data}
                  onSubmit={handleStep1Submit}
                />
              )}
              {step === 2 && (
                <Step2
                  key={`s2-${resetEpoch}`}
                  defaults={data}
                  onBack={() => setStep(1)}
                  onSubmit={handleStep2Submit}
                />
              )}
              {step === 3 && (
                <Step3
                  key={`s3-${resetEpoch}`}
                  defaults={data}
                  onBack={() => setStep(2)}
                  onSubmitAll={handleAllSubmit}
                />
              )}
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl shadow p-3 md:p-4 flex flex-col min-h-[480px]">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-semibold">PDF Preview</h3>
              <span className="text-xs text-gray-500">
                Updates after each step submit
              </span>
            </div>
            <div className="mt-3 border rounded-xl overflow-hidden flex-1 min-h-[560px]">
              <PDFViewer
                style={{ width: "100%", height: "100%", border: 0 }}
                showToolbar
              >
                <PdfDoc data={previewData} />
              </PDFViewer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
