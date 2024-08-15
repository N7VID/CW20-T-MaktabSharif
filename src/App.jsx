import { useSelector } from "react-redux";
import AddCustomer from "./components/AddCustomer/AddCustomer";
import Balance from "./components/Balance/Balance";
import CalcAccount from "./components/CalcAccount/CalcAccount";
import Customer from "./components/Customer/Customer";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex justify-between items-center"></div>
      {fullName === "" ? (
        <AddCustomer />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Customer />
            <Balance />
          </div>
          <CalcAccount />
        </div>
      )}
    </div>
  );
}

export default App;
