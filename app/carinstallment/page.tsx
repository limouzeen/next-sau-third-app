'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import carImg from "../images/installment.png";

export default function CarInstallmentPage() {
  // form states
  const [borrower, setBorrower] = useState("");
  const [price, setPrice] = useState<string>("");
  const [annualRate, setAnnualRate] = useState<string>(""); // %
  const [downPct, setDownPct] = useState<number>(15);
  const [months, setMonths] = useState<number>(24);

  // result
  const [monthly, setMonthly] = useState<string>("0.00");

  // optional: inline error text
  const [error, setError] = useState<string>("");

  const formatMoney = (n: number) =>
    new Intl.NumberFormat("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  const calculate = () => {
    setError("");

    const p = parseFloat(price);
    const rYear = parseFloat(annualRate);

    if (!Number.isFinite(p) || p <= 0) {
      setError("กรุณากรอกราคารถที่มากกว่า 0");
      return;
    }
    if (!Number.isFinite(rYear) || rYear < 0) {
      setError("กรุณากรอกดอกเบี้ยต่อปี (≥ 0%)");
      return;
    }
    if (!Number.isFinite(months) || months <= 0) {
      setError("กรุณาเลือกจำนวนเดือนที่ผ่อน (> 0)");
      return;
    }
    if (!Number.isFinite(downPct) || downPct < 0 || downPct >= 100) {
      setError("กรุณาเลือกเงินดาวน์ระหว่าง 0% ถึง 99%");
      return;
    }

    const principal = p * (1 - downPct / 100);
    const r = rYear / 100 / 12; // monthly interest

    let pay = 0;
    if (r === 0) {
      pay = principal / months;
    } else {
      pay = principal * (r / (1 - Math.pow(1 + r, -months)));
    }

    setMonthly(formatMoney(pay));
  };

  const reset = () => {
    setBorrower("");
    setPrice("");
    setAnnualRate("");
    setDownPct(15);
    setMonths(24);
    setMonthly("0.00");
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
              Car Installment Calculator
            </span>
          </h1>
          <p className="text-sm text-neutral-500">คำนวณ Car Installment</p>
        </div>

        {/* Image */}
        <div className="mt-6 flex justify-center">
          <Image
            src={carImg}
            alt="Car Installment"
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
            calculate();
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ชื่อผู้กู้/กู้ร่วม
            </label>
            <input
              type="text"
              value={borrower}
              onChange={(e) => setBorrower(e.target.value)}
              placeholder="กรอกชื่อ"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ราคารถ (บาท)
            </label>
            <input
              type="number"
              min={0}
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="กรอกราคารถ"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          {/* Interest */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              min={0}
              step="0.01"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              placeholder="กรอกดอกเบี้ย เช่น 3.5"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          {/* Down payment */}
          <div>
            <span className="block text-sm font-medium text-neutral-700 mb-1">
              เงินดาวน์ (%)
            </span>
            <div className="flex flex-wrap gap-3">
              {[10, 15, 20, 25, 30, 35].map((val) => (
                <label
                  key={val}
                  className="inline-flex items-center gap-2 text-sm text-neutral-700"
                >
                  <input
                    type="radio"
                    name="down"
                    checked={downPct === val}
                    onChange={() => setDownPct(val)}
                    className="h-4 w-4 accent-amber-500"
                  />
                  {val}%
                </label>
              ))}
            </div>
          </div>

          {/* Installments */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              value={months}
              onChange={(e) => setMonths(parseInt(e.target.value, 10))}
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            >
              {[12, 24, 36, 48, 60, 72].map((m) => (
                <option key={m} value={m}>
                  {m} เดือน
                </option>
              ))}
            </select>
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
              คำนวณ
            </button>
            <button
              type="button"
              onClick={reset}
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-700 font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* Result */}
        <div className="mt-6 text-center">
          <p className="text-base font-medium text-neutral-800">
            ยอดผ่อนชำระต่อเดือน:{" "}
            <span className="text-amber-600 font-semibold">{monthly}</span>
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
