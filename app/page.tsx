import Link from "next/link";
import Image from "next/image";

import calculatorImg from "./images/calculator.png";
import moneyshareImg from "./images/money1.png";
import bmiImg from "./images/bmi.png";
import bmrImg from "./images/bmr.png";           // ถ้าไม่มี ใช้ calculatorImg ชั่วคราวได้
import carImg from "./images/installment.png";   // ถ้าไม่มี ใช้ calculatorImg ชั่วคราวได้

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 [--radius:1.25rem]">
      {/* Decorative background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 40% at 50% 0%, rgba(15, 23, 42, 0.05), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <header className="relative isolate flex flex-col items-center gap-5">
          {/* soft glow */}
          <div className="absolute -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 opacity-40 blur-3xl" aria-hidden />

          {/* Logo */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <Image
              src={calculatorImg}
              alt="DTI-SAU Logo"
              width={72}
              height={72}
              className="h-[72px] w-[72px]"
              priority
            />
          </div>

          {/* Titles */}
          <div className="text-center">
            <div className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-600 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Ready to calculate
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              <span className="bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent">Variety Calculator</span>
            </h1>
            <p className="mt-2 text-sm md:text-base text-neutral-500">
              เครื่องคำนวณ <span className="font-medium">By DTI-SAU</span>
            </p>
          </div>
        </header>

        {/* Cards */}
        <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {/* Money Share */}
          <Link
            href="/moneyshare"
            className="group relative rounded-[var(--radius)] border border-neutral-200 bg-white/90 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          >
            <div className="absolute inset-0 rounded-[var(--radius)] bg-gradient-to-br from-amber-100/0 to-amber-100/0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
              <Image src={moneyshareImg} alt="Money Share" width={240} height={140} className="object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium tracking-tight">Money Share</h3>
              <p className="text-sm text-neutral-500">หารเงิน/割り勘 อย่างยุติธรรม</p>
            </div>
          </Link>

          {/* BMI */}
          <Link
            href="/bmi"
            className="group relative rounded-[var(--radius)] border border-neutral-200 bg-white/90 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          >
            <div className="absolute inset-0 rounded-[var(--radius)] bg-gradient-to-br from-blue-100/0 to-blue-100/0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
              <Image src={bmiImg} alt="BMI" width={240} height={140} className="object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium tracking-tight">BMI</h3>
              <p className="text-sm text-neutral-500">ดัชนีมวลกาย • Body Mass Index</p>
            </div>
          </Link>

          {/* BMR */}
          <Link
            href="/bmr"
            className="group relative rounded-[var(--radius)] border border-neutral-200 bg-white/90 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          >
            <div className="absolute inset-0 rounded-[var(--radius)] bg-gradient-to-br from-rose-100/0 to-rose-100/0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
              <Image src={bmrImg || calculatorImg} alt="BMR" width={240} height={140} className="object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium tracking-tight">BMR</h3>
              <p className="text-sm text-neutral-500">Basal Metabolic Rate • ค่าพลังงานพื้นฐาน</p>
            </div>
          </Link>

          {/* Car Installment */}
          <Link
            href="/carinstallment"
            className="group relative rounded-[var(--radius)] border border-neutral-200 bg-white/90 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          >
            <div className="absolute inset-0 rounded-[var(--radius)] bg-gradient-to-br from-emerald-100/0 to-emerald-100/0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
              <Image src={carImg || calculatorImg} alt="Car Installment" width={240} height={140} className="object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium tracking-tight">Car Installment</h3>
              <p className="text-sm text-neutral-500">ค่างวดรถยนต์ • ดอกเบี้ย/ระยะเวลา</p>
            </div>
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-16 flex items-center justify-center">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} DTI-SAU. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
