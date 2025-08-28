import Link from "next/link";
import Image from "next/image";
import bmrImg from "./images/bmr.png"; 
import carImg from "./images/installment.png"; 
import calculatorImg from "./images/calculator.png";
import moneyshareImg from "./images/money1.png";
import bmiImg from "./images/bmi.png";
export default function HomePage() {
 

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* top */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="flex flex-col items-center gap-5">
          {/* Logo */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <Image
              src={calculatorImg}
              alt="DTI-SAU Logo"
              width={72}
              height={72}
              className="h-18 w-18"
            />
          </div>

          {/* Titles */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Calculator Variety
            </h1>
            <p className="mt-2 text-sm md:text-base text-neutral-500">
              เครื่องคำนวณ <span className="font-medium">By DTI-SAU</span>
            </p>
          </div>
        </header>

        {/* Cards */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
  {/* Money Share */}
  <Link
    href="/moneyshare"
    className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
  >
    <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
      <Image src={moneyshareImg} alt="Money Share" width={200} height={120} className="object-contain" />
    </div>
    <div className="mt-4 space-y-1">
      <h3 className="text-lg font-medium tracking-tight">Money Share</h3>
      <p className="text-sm text-neutral-500">หารเงิน/割り勘 อย่างยุติธรรม</p>
    </div>
  </Link>

  {/* BMI */}
  <Link
    href="/bmi"
    className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
  >
    <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
      <Image src={bmiImg} alt="BMI" width={200} height={120} className="object-contain" />
    </div>
    <div className="mt-4 space-y-1">
      <h3 className="text-lg font-medium tracking-tight">BMI</h3>
      <p className="text-sm text-neutral-500">ดัชนีมวลกาย • Body Mass Index</p>
    </div>
  </Link>

  {/* BMR */}
  <Link
    href="/bmr"
    className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
  >
    <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
      <Image src={bmrImg || calculatorImg} alt="BMR" width={200} height={120} className="object-contain" />
    </div>
    <div className="mt-4 space-y-1">
      <h3 className="text-lg font-medium tracking-tight">BMR</h3>
      <p className="text-sm text-neutral-500">Basal Metabolic Rate • ค่าพลังงานพื้นฐาน</p>
    </div>
  </Link>

  {/* Car Installment */}
  <Link
    href="/carinstallment"
    className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
  >
    <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center">
      <Image src={carImg || calculatorImg} alt="Car Installment" width={200} height={120} className="object-contain" />
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
