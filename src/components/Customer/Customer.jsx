import { useSelector } from "react-redux";

export default function Customer() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <h2 className="text-4xl font-semibold p-4 rounded-md bg-[#ccc]">
      👋 Welcome, {fullName}
    </h2>
  );
}
