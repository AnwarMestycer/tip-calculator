

import React from 'react';

export const CalculatorContainer: React.FC = () => {
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
                type="text"
                id="bill"
                placeholder="0"
                className="w-full very-dark-cyan bg-light-grayish-cyan text-right py-2 px-4 rounded-lg border-2 border-transparent focus:border-strong-cyan focus:outline-none"
              />
              <span className="absolute inset-y-0 left-4 flex items-center very-dark-cyan">
                $
              </span>
            </div>
          </div>

          <div>
            <label className="dark-grayish-cyan font-bold">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {[5, 10, 15, 25, 50].map((tip) => (
                <button
                  key={tip}
                  className="bg-very-dark-cyan text-white py-3 rounded-lg hover:bg-strong-cyan transition-colors"
                >
                  {tip}%
                </button>
              ))}
              <input
                type="text"
                placeholder="Custom"
               
                className="bg-very-light-grayish-cyan very-dark-cyan text-center py-1 px-1 rounded-lg border-2 border-transparent  focus:border-3 focus:border-[hsl(172,67%,45%)] focus:outline-none"
              />              
            </div>
          </div>

          <div>
            <label htmlFor="people" className="dark-grayish-cyan font-bold">
              Number of People
            </label>
            <div className="relative mt-2">
              <input
                type="text"
                id="people"
                placeholder="0"
                className="w-full bg-light-grayish-cyan  very-dark-cyan text-right py-2 px-4 rounded-lg border-2 border-transparent focus:border-strong-cyan focus:outline-none"
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
              <span className="text-strong-cyan text-3xl font-bold">$0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-white font-bold">Total</h2>
                <p className="text-grayish-cyan text-sm">/ person</p>
              </div>
              <span className="text-strong-cyan text-3xl font-bold">$0.00</span>
            </div>
          </div>
          <button className="w-full bg-strong-cyan text-very-dark-cyan py-3 rounded-lg font-bold hover:bg-light-grayish-cyan transition-colors">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

