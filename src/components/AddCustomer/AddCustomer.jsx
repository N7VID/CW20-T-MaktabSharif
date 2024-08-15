import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../redux/slices/costumer";

export default function AddCustomer() {
  const [nameInput, setNameInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center flex-col items-center bg-[#ccc] rounded-md w-96 h-70 py-2">
      <div className="flex gap-4 flex-col p-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Your Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="Enter Your UserID"
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
        />
      </div>
      <button
        className="bg-green-500 p-2 rounded-lg text-white"
        onClick={() =>
          dispatch(addCustomer({ fullName: nameInput, userId: userIdInput }))
        }
      >
        Create new customer
      </button>
    </div>
  );
}
