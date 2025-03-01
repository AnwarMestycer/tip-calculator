"use client";
import React, { useState } from "react";

export const CalculatorContainer: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState<number | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

  const calculateTip = () => {
    if (bill <= 0 || numberOfPeople <= 0)
      return { tipPerPerson: 0, totalPerPerson: 0 };

    const tip = tipPercentage ? (bill * tipPercentage) / 100 : customTip || 0;
    const total = bill + tip;
    const tipPerPerson = tip / numberOfPeople;
    const totalPerPerson = total / numberOfPeople;

    return {
      tipPerPerson: parseFloat(tipPerPerson.toFixed(2)),
      totalPerPerson: parseFloat(totalPerPerson.toFixed(2)),
    };
  };

  const { tipPerPerson, totalPerPerson } = calculateTip();

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBill(isNaN(value) ? 0 : value);
  };

  const handleTipClick = (percentage: number) => {
    setTipPercentage(percentage);
    setCustomTip(null);
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setCustomTip(isNaN(value) ? null : value);
    setTipPercentage(null);
  };

  const handleNumberOfPeopleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    setNumberOfPeople(isNaN(value) ? 1 : value);
  };

  const handleReset = () => {
    setBill(0);
    setTipPercentage(null);
    setCustomTip(null);
    setNumberOfPeople(1);
  };

  return (
    <div className="font-mono bg-very-light-grayish-cyan p-8 rounded-3xl shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="bill" className="dark-grayish-cyan font-bold">
              Bill
            </label>
            <div className="relative mt-2">
              <input
                type="number"
                id="bill"
                placeholder="0"
                value={bill === 0 ? "" : bill}
                onChange={handleBillChange}
                className="w-full very-dark-cyan bg-light-grayish-cyan text-right py-2 px-4 rounded-lg border-2 border-transparent focus:border-strong-cyan focus:outline-none"
              />
              <span className="absolute inset-y-0 left-4 flex items-center very-dark-cyan">
                $
              </span>
            </div>
          </div>

          <div>
            <label className="dark-grayish-cyan font-bold">Select Tip %</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {[5, 10, 15, 25, 50].map((tip) => (
                <button
                  key={tip}
                  onClick={() => handleTipClick(tip)}
                  className={` text-white py-3 rounded-lg hover:bg-strong-cyan transition-colors ${
                    tipPercentage === tip
                      ? "bg-strong-cyan"
                      : "bg-very-dark-cyan"
                  }`}
                >
                  {tip}%
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom"
                value={customTip === null ? "" : customTip}
                onChange={handleCustomTipChange}
                className="bg-very-light-grayish-cyan very-dark-cyan text-center py-1 px-1 rounded-lg border-2 border-transparent focus:border-3 focus:border-[hsl(172,67%,45%)] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="people" className="dark-grayish-cyan font-bold">
              Number of People
              {!numberOfPeople ? (
                <span className="text-red-400 float-right">Can&apos;t be zero</span>
              ) : null}
            </label>
            <div className="relative mt-2">
              <input
                type="number"
                id="people"
                placeholder="0"
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
                className={`w-full bg-light-grayish-cyan very-dark-cyan text-right py-2 px-4 rounded-lg border-2  focus:border-strong-cyan focus:outline-none ${
                  numberOfPeople === 0
                    ? "border-3 border-red-300"
                    : "border-transparent"
                }`}
              />
              <span className="absolute inset-y-0 left-4 flex items-center text-dark-grayish-cyan">
                👤
              </span>
            </div>
          </div>
        </div>

        <div className="bg-very-dark-cyan p-6 rounded-2xl flex flex-col justify-between">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-white font-bold">Tip Amount</h2>
                <p className="text-grayish-cyan text-sm">/ person</p>
              </div>
              <span className="text-strong-cyan text-3xl font-bold">
                ${tipPerPerson}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-white font-bold">Total</h2>
                <p className="text-grayish-cyan text-sm">/ person</p>
              </div>
              <span className="text-strong-cyan text-3xl font-bold">
                ${totalPerPerson}
              </span>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-full bg-strong-cyan text-very-dark-cyan py-3 rounded-lg font-bold hover:bg-light-grayish-cyan transition-colors"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
