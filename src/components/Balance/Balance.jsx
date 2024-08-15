import { useSelector } from "react-redux";

export default function Balance() {
  const balance = useSelector((state) => state.account.balance);
  return <div className="p-4 bg-[#ccc] text-4xl font-bold">{balance}$</div>;
}
