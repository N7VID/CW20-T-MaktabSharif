import { useDispatch } from "react-redux";
import { deposit } from "../../redux/slices/account";
import { useState } from "react";

export default function CalcAccount() {
  const [a, setA] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 p-8 bg-[#ccc]">
        <div className="flex gap-4">
          <input
            value={a}
            type="number"
            className="border border-black py-1 pl-4 rounded-md "
            placeholder="Deposit"
            onChange={(e) => setA(e.target.value)}
          />
          <button
            onClick={() => dispatch(deposit(a))}
            className="rounded-md text-white py-1 px-3 bg-orange-500"
          >
            Deposit
          </button>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className="border border-black py-1 pl-4 rounded-md "
            placeholder="Withdraw"
          />
          <button className="rounded-md text-white py-1 px-3 bg-orange-500">
            Withdraw
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <input
            type="text"
            className="border border-black py-1 pl-4 rounded-md "
            placeholder="Loan"
          />
          <input
            type="text"
            className="border border-black py-1 pl-4 rounded-md "
            placeholder="Loan Porpuse"
          />
          <button className="rounded-md text-white py-1 px-3 bg-orange-500">
            Request Loan
          </button>
        </div>
      </div>
    </div>
  );
}
