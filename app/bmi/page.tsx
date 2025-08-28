'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bmiImg from "../images/bmi.png";

export default function BmiPage() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<string>("0.00");
  const [error, setError] = useState<string>("");

  const format = (n: number) =>
    new Intl.NumberFormat("th-TH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);

  const calcBMI = () => {
    setError("");
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!Number.isFinite(w) || w <= 0) {
      setError("กรุณากรอกน้ำหนัก (kg) มากกว่า 0");
      return;
    }
    if (!Number.isFinite(h) || h <= 0) {
      setError("กรุณากรอกส่วนสูง (cm) มากกว่า 0");
      return;
    }

    const heightM = h / 100;
    const result = w / (heightM * heightM);

    setBmi(format(result));
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi("0.00");
    setError("");
  };

  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center justify-center px-4 py-12">
      {/* Back to Home */}
      <div className="absolute left-4 top-4 md:left-6 md:top-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-3.5 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition-all hover:-translate-x-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          >
            <path
              d="M14 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="relative">
            กลับหน้าแรก
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            <span className="bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
              BMI Calculator
            </span>
          </h1>
          <p className="text-sm text-neutral-500">คำนวณ BMI</p>
        </div>

        {/* Image */}
        <div className="mt-6 flex justify-center">
          <Image
            src={bmiImg}
            alt="BMI"
            width={160}
            height={120}
            className="object-contain drop-shadow-sm"
            priority
          />
        </div>

        {/* Form */}
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            calcBMI();
          }}
        >
          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="เช่น 65"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="เช่น 170"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-500 px-4 py-2 text-white font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              คำนวณ BMI
            </button>
            <button
              type="button"
              onClick={reset}
              className="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-800 font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
            >
              รีเซ็ต
            </button>
          </div>
        </form>

        {/* Result */}
        <div className="mt-6 text-center">
          <p className="text-base font-medium text-neutral-800">
            ค่า BMI ที่คำนวณได้:{" "}
            <span className="text-amber-500 font-semibold">{bmi}</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-xs text-neutral-400">
        Developed by Amarat SAU Team.
      </div>
    </main>
  );
}
