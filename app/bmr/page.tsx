'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bmrImg from "../images/bmr.png"; // ปรับ path ให้ตรงกับที่เก็บรูปของคุณ

type Gender = "male" | "female";

export default function BmrPage() {
  // states
  const [weight, setWeight] = useState<string>(""); // kg
  const [height, setHeight] = useState<string>(""); // cm
  const [age, setAge] = useState<string>("");       // years
  const [gender, setGender] = useState<Gender>("male");

  const [bmr, setBmr] = useState<string>("0.00");
  const [error, setError] = useState<string>("");

  const format = (n: number) =>
    new Intl.NumberFormat("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  const calcBMR = () => {
    setError("");

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    // validation
    if (!Number.isFinite(w) || w <= 0) {
      setError("กรุณากรอกน้ำหนัก (กิโลกรัม) มากกว่า 0");
      return;
    }
    if (!Number.isFinite(h) || h <= 0) {
      setError("กรุณากรอกส่วนสูง (เซนติเมตร) มากกว่า 0");
      return;
    }
    if (!Number.isFinite(a) || a <= 0) {
      setError("กรุณากรอกอายุ (ปี) มากกว่า 0");
      return;
    }

    // Mifflin–St Jeor
    const result =
      10 * w + 6.25 * h - 5 * a + (gender === "male" ? 5 : -161);

    if (!Number.isFinite(result) || result < 0) {
      setError("ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง");
      return;
    }

    setBmr(format(result));
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr("0.00");
    setError("");
  };

  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center justify-center px-4 py-12">
      {/* Back to Home (top-left, outside card) */}
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
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
            BMR Calculator
          </h1>
          <p className="text-sm text-neutral-500">คำนวณ BMR</p>
        </div>

        {/* Image */}
        <div className="mt-6 flex justify-center">
          <Image
            src={bmrImg}
            alt="BMR"
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
            calcBMR();
          }}
        >
          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              น้ำหนัก (กิโลกรัม):
            </label>
            <input
              type="number"
              min={0}
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kg"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ส่วนสูง (เซนติเมตร):
            </label>
            <input
              type="number"
              min={0}
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in cm"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              อายุ (ปี):
            </label>
            <input
              type="number"
              min={0}
              step="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age in years"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          {/* Gender */}
          <div>
            <span className="block text-sm font-medium text-neutral-700 mb-1">
              เพศ:
            </span>
            <div className="flex flex-col gap-2 pl-1">
              <label className="inline-flex items-center gap-2 text-sm text-neutral-700">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                  className="h-4 w-4 accent-amber-500"
                />
                ชาย
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-neutral-700">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                  className="h-4 w-4 accent-amber-500"
                />
                หญิง
              </label>
            </div>
          </div>

          {/* Inline error */}
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-500 px-4 py-2 text-white font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              คำนวณ BMR
            </button>
            <button
              type="button"
              onClick={reset}
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-700 font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
            >
              รีเซ็ต
            </button>
          </div>
        </form>

        {/* Result */}
        <div className="mt-6 text-center">
          <p className="text-base font-medium text-neutral-800">
            ค่า BMR ที่คำนวณได้: <span className="text-amber-600">{bmr}</span>
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
