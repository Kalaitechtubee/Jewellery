// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaMoneyCheckAlt, FaCheckCircle, FaArrowLeft, FaMobileAlt, FaCreditCard, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
// import QRCode from "../assets/images/qr-code.png";

// const Payment = () => {
//     const navigate = useNavigate();
//     const [cartItems, setCartItems] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);
//     const [paymentMethod, setPaymentMethod] = useState("");
//     const [debitCardDetails, setDebitCardDetails] = useState({ cardNumber: "", expiryDate: "", cvv: "" });
//     const [netBankingDetails, setNetBankingDetails] = useState({ bankName: "", accountNumber: "" });
//     const [userDetails, setUserDetails] = useState({ name: "", address: "", phone: "" });
//     const bankOptions = ["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Kotak Mahindra Bank"];

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         setCartItems(storedCart);
//         const storedTotal = parseFloat(localStorage.getItem("totalPrice")) || 0;
//         setTotalAmount(storedTotal);
//     }, []);

//     const handleConfirmPayment = () => {
//         if (!paymentMethod) {
//             alert("Please select a payment method.");
//             return;
//         }

//         if (paymentMethod === "cod" && (!userDetails.name || !userDetails.address || !userDetails.phone)) {
//             alert("Please fill in all user details for cash on delivery.");
//             return;
//         }

//         const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//         const newOrder = {
//             id: Date.now(),
//             items: cartItems,
//             totalAmount: totalAmount,
//             status: "Paid",
//             paymentMethod: paymentMethod === "cod" ? "Cash on Delivery" : paymentMethod.toUpperCase(),
//             userDetails: paymentMethod === "cod" ? userDetails : null,
//         };

//         localStorage.setItem("orders", JSON.stringify([...storedOrders, newOrder]));
//         localStorage.removeItem("cart");
//         localStorage.removeItem("totalPrice");

//         alert(`Order Confirmed! Total Amount: ₹${totalAmount.toFixed(2)}`);
//         navigate("/");
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 flex flex-col items-center p-6">
//             <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full">
//                 <button onClick={() => navigate(-1)} className="flex items-center text-blue-500 font-semibold mb-4">
//                     <FaArrowLeft className="mr-2" /> Back
//                 </button>
//                 <h1 className="text-3xl font-bold text-yellow-600 flex items-center justify-center mb-6">
//                     <FaMoneyCheckAlt className="mr-2" /> Secure Payment
//                 </h1>

//                 <div className="p-4 bg-gray-200 shadow-md rounded-lg text-lg font-semibold text-gray-700 text-center">
//                     Total Amount: <span className="text-green-600">₹{totalAmount.toFixed(2)}</span>
//                 </div>

//                 <h2 className="text-xl font-semibold mt-4">Select Payment Method:</h2>
//                 <div className="grid grid-cols-2 gap-4 my-4">
//                     {["upi", "card", "net banking", "cod"].map((method) => (
//                         <button key={method} onClick={() => setPaymentMethod(method)}
//                             className={`p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 text-lg font-semibold w-full transition ${paymentMethod === method ? "bg-yellow-500 text-white" : "bg-white text-gray-800"}`}>
//                             {method === "upi" && <FaMobileAlt />}
//                             {method === "card" && <FaCreditCard />}
//                             {method === "net banking" && <FaUniversity />}
//                             {method === "cod" && <FaMoneyBillWave />}
//                             <span className="capitalize">{method.replace("cod", "Cash on Delivery")}</span>
//                         </button>
//                     ))}
//                 </div>
//                 {paymentMethod === "upi" && (
//                     <div className="flex flex-col items-center">
//                         <p className="text-gray-600 mb-4">Scan the QR code to complete your UPI payment:</p>
//                         <img src={QRCode} alt="QR Code" className="w-40 h-40 object-contain" />
//                     </div>
//                 )}

//                 {paymentMethod === "card" && (
//                     <div className="mt-4">
//                         <h3 className="text-lg font-semibold mb-4">Enter Debit Card Details:</h3>
//                         <div className="space-y-4">
//                             <input
//                                 type="text"
//                                 placeholder="Card Number"
//                                 value={debitCardDetails.cardNumber}
//                                 onChange={(e) => setDebitCardDetails({ ...debitCardDetails, cardNumber: e.target.value })}
//                                 className="w-full p-2 border border-gray-300 rounded-lg"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Expiry Date (MM/YY)"
//                                 value={debitCardDetails.expiryDate}
//                                 onChange={(e) => setDebitCardDetails({ ...debitCardDetails, expiryDate: e.target.value })}
//                                 className="w-full p-2 border border-gray-300 rounded-lg"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="CVV"
//                                 value={debitCardDetails.cvv}
//                                 onChange={(e) => setDebitCardDetails({ ...debitCardDetails, cvv: e.target.value })}
//                                 className="w-full p-2 border border-gray-300 rounded-lg"
//                             />
//                         </div>
//                     </div>
//                 )}

//                 {paymentMethod === "cod" && (
//                     <div className="mt-4">
//                         <h3 className="text-lg font-semibold mb-4">Enter Your Details for Cash on Delivery:</h3>
//                         <div className="space-y-4">
//                             <input
//                                 type="text"
//                                 placeholder="Name"
//                                 value={userDetails.name}
//                                 onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
//                                 className="w-full p-2 border border-gray-300 rounded-lg"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Address"
//                                 value={userDetails.address}
//                                 onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
//                                 className="w-full p-2 border border-gray-300 rounded-lg"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Phone Number"
//                                 value={userDetails.phone}
//                                 onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
//                                 className="w-full p-2 border border-gray-300 rounded-lg"
//                             />
//                         </div>
//                     </div>
//                 )}
//                 {paymentMethod === "net banking" && (
//                     <div className="mt-4">
//                         <h3 className="text-lg font-semibold mb-4">Enter Your Details for Cash on Delivery:</h3>
//                         <div className="space-y-4">
                          
//                             <input
//                                 type="text"
//                                 placeholder="Bank Name"
//                                 value={userDetails.address}
//                                 onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
//                                 className="w-full p-2 border border-gray-300 rounded-lg"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Account Number"
//                                 value={userDetails.phone}
//                                 onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
//                                 className="w-full p-2 border border-gray-300 rounded-lg"
//                             />
//                         </div>
//                     </div>
//                 )}

//                 <button onClick={handleConfirmPayment}
//                     className="mt-6 bg-green-500 text-white p-3 rounded-lg w-full text-lg font-semibold shadow-lg flex items-center justify-center hover:bg-green-600 transition">
//                     <FaCheckCircle className="mr-2" /> Confirm Payment (₹{totalAmount.toFixed(2)})
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Payment;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt, FaCheckCircle, FaArrowLeft, FaMobileAlt, FaCreditCard, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import QRCode from "../assets/images/qr-code.png";

const Payment = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [debitCardDetails, setDebitCardDetails] = useState({ cardNumber: "", expiryDate: "", cvv: "" });
    const [netBankingDetails, setNetBankingDetails] = useState({ bankName: "", accountNumber: "" });
    const [userDetails, setUserDetails] = useState({ name: "", address: "", phone: "" });
    const bankOptions = ["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Kotak Mahindra Bank"];

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
        const storedTotal = parseFloat(localStorage.getItem("totalPrice")) || 0;
        setTotalAmount(storedTotal);
    }, []);

    const handleConfirmPayment = () => {
        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        if (paymentMethod === "cod" && (!userDetails.name || !userDetails.address || !userDetails.phone)) {
            alert("Please fill in all user details for cash on delivery.");
            return;
        }

        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        const newOrder = {
            id: Date.now(),
            items: cartItems,
            totalAmount: totalAmount,
            status: "Paid",
            paymentMethod: paymentMethod === "cod" ? "Cash on Delivery" : paymentMethod.toUpperCase(),
            userDetails: paymentMethod === "cod" ? userDetails : null,
        };

        localStorage.setItem("orders", JSON.stringify([...storedOrders, newOrder]));
        localStorage.removeItem("cart");
        localStorage.removeItem("totalPrice");

        alert(`Order Confirmed! Total Amount: ₹${totalAmount.toFixed(2)}`);
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-6">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full">
                <button onClick={() => navigate(-1)} className="flex items-center text-teal-500 font-semibold mb-4">
                    <FaArrowLeft className="mr-2" /> Back
                </button>
                <h1 className="text-3xl font-bold text-teal-600 flex items-center justify-center mb-6">
                    <FaMoneyCheckAlt className="mr-2" /> Secure Payment
                </h1>

                <div className="p-4 bg-gray-200 shadow-md rounded-lg text-lg font-semibold text-gray-700 text-center">
                    Total Amount: <span className="text-green-600">₹{totalAmount.toFixed(2)}</span>
                </div>

                <h2 className="text-xl font-semibold mt-4">Select Payment Method:</h2>
                <div className="grid grid-cols-2 gap-4 my-4">
                    {["upi", "card", "net banking", "cod"].map((method) => (
                        <button key={method} onClick={() => setPaymentMethod(method)}
                            className={`p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 text-lg font-semibold w-full transition ${paymentMethod === method ? "bg-teal-500 text-white" : "bg-white text-gray-800"}`}>
                            {method === "upi" && <FaMobileAlt />}
                            {method === "card" && <FaCreditCard />}
                            {method === "net banking" && <FaUniversity />}
                            {method === "cod" && <FaMoneyBillWave />}
                            <span className="capitalize">{method.replace("cod", "Cash on Delivery")}</span>
                        </button>
                    ))}
                </div>
                {paymentMethod === "upi" && (
                    <div className="flex flex-col items-center">
                        <p className="text-gray-600 mb-4">Scan the QR code to complete your UPI payment:</p>
                        <img src={QRCode} alt="QR Code" className="w-40 h-40 object-contain" />
                    </div>
                )}

{paymentMethod === "card" && (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-4">Enter Debit Card Details:</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Card Number"
                                value={debitCardDetails.cardNumber}
                                onChange={(e) => setDebitCardDetails({ ...debitCardDetails, cardNumber: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Expiry Date (MM/YY)"
                                value={debitCardDetails.expiryDate}
                                onChange={(e) => setDebitCardDetails({ ...debitCardDetails, expiryDate: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="CVV"
                                value={debitCardDetails.cvv}
                                onChange={(e) => setDebitCardDetails({ ...debitCardDetails, cvv: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                    </div>
                )}


{paymentMethod === "net banking" && (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-4">Enter Your Details for Cash on Delivery:</h3>
                        <div className="space-y-4">
                          
                            <input
                                type="text"
                                placeholder="Bank Name"
                                value={userDetails.address}
                                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Account Number"
                                value={userDetails.phone}
                                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                    </div>
                )}

                {paymentMethod === "cod" && (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-4">Enter Your Details for Cash on Delivery:</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={userDetails.name}
                                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={userDetails.address}
                                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={userDetails.phone}
                                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                    </div>
                )}

                <button onClick={handleConfirmPayment}
                    className="mt-6 bg-teal-500 text-white p-3 rounded-lg w-full text-lg font-semibold shadow-lg flex items-center justify-center hover:bg-teal-600 transition">
                    <FaCheckCircle className="mr-2" /> Confirm Payment (₹{totalAmount.toFixed(2)})
                </button>
            </div>
        </div>
    );
};

export default Payment;