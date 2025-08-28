'use client'
import Image from "next/image";
import Link from "next/link";
import moneyshareImg from "../images/money1.png";
import { useState } from "react";


export default function MoneySharePage() {

    const [money, setMoney] = useState('0.00');
    const [people, setPeople] = useState('');
    const [moneyShare, setMoneyShare] = useState('0.00');


    const calculateMoneyShare = () => {
  const totalMoney = parseFloat(money);
  const totalPeople = parseInt(people, 10);

  // validate amount
  if (isNaN(totalMoney) || totalMoney <= 0) {
    alert("⚠️ กรุณากรอกจำนวนเงินที่มากกว่า 0");
    return;
  }

  // validate people
  if (isNaN(totalPeople) || totalPeople <= 0) {
    alert("⚠️ กรุณากรอกจำนวนคนที่มากกว่า 0");
    return;
  }

  // คำนวณ
  const moneyPerPerson = totalMoney / totalPeople;
  setMoneyShare(moneyPerPerson.toFixed(2));
};




  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center justify-center px-4 py-12">
      {/* Back to Home - top-left, outside card */}
      <div className="absolute left-4 top-4 md:left-6 md:top-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-3.5 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition-all hover:-translate-x-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
        >
          {/* animated chevron */}
          <span className="relative inline-flex h-5 w-5 items-center justify-center">
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
            {/* slide highlight */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber-100/0 to-amber-100/0 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="relative">
            กลับหน้าแรก
            {/* underline grows on hover */}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
            Money Share Calculator
          </h1>
          <p className="text-sm text-neutral-500">คำนวณเงินที่ต้องหารกัน</p>
        </div>

        <div className="mt-6 flex justify-center">
          <Image
            src={moneyshareImg}
            alt="Money Share"
            width={160}
            height={120}
            className="object-contain drop-shadow-sm"
            priority
          />
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ป้อนจำนวนเงิน
            </label>
            <input
              type="number"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
              placeholder="เช่น 1000"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              ป้อนจำนวนคน
            </label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              placeholder="เช่น 5"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={calculateMoneyShare}
            className="w-full rounded-lg bg-amber-500 px-4 py-2 text-white font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            คำนวณ
          </button>
          {/* <button
          
            type="button"
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-700 font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
          >
            ส่งข้อมูล
          </button> */}
        </div>

        <div className="mt-6 text-center">
          <p className="text-base font-medium text-neutral-800">
            หารกันคนละ <span className="text-amber-600">{moneyShare}</span> บาท
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-xs text-neutral-400">Dev by Amarat SAU Team</div>
    </main>
  );
}
