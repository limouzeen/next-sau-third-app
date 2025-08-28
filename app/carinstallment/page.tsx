import Image from "next/image";
import Link from "next/link";
import carImg from "../images/installment.png"; // ปรับ path ให้ตรงกับโปรเจกต์คุณ

export default function CarInstallmentPage() {
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

        {/* Form (no logic yet) */}
        <form className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ชื่อผู้กู้/กู้ร่วม
            </label>
            <input
              type="text"
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
              placeholder="กรอกดอกเบี้ย"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          {/* Down payment */}
          <div>
            <span className="block text-sm font-medium text-neutral-700 mb-1">
              เงินดาวน์ (%)
            </span>
            <div className="flex flex-wrap gap-3">
              {[15, 20, 25, 30, 35].map((val) => (
                <label
                  key={val}
                  className="inline-flex items-center gap-2 text-sm text-neutral-700"
                >
                  <input
                    type="radio"
                    name="down"
                    defaultChecked={val === 15}
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
            <select className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30">
              <option>12 เดือน</option>
              <option>24 เดือน</option>
              <option>36 เดือน</option>
              <option>48 เดือน</option>
              <option>60 เดือน</option>
            </select>
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              className="w-full rounded-lg bg-amber-500 px-4 py-2 text-white font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              คำนวณ
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-700 font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* Result (static) */}
        <div className="mt-6 text-center">
          <p className="text-base font-medium text-neutral-800">
            ยอดผ่อนชำระต่อเดือน:{" "}
            <span className="text-amber-600 font-semibold">0.00</span>
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
