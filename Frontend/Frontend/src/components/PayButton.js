import axios from 'axios';

const PayButton = ({ amount }) => {
  const handlePayment = async () => {
    const { data } = await axios.post("http://localhost:4000/api/payment/create-order", { amount });

    const options = {
      key: "rzp_test_xxxxxx", // Replace with your key
      amount: data.order.amount,
      currency: "INR",
      name: "SmartBite",
      description: "Food Order Payment",
      order_id: data.order.id,
      handler: async (response) => {
        const res = await axios.post("http://localhost:4000/api/payment/verify", response);
        alert(res.data.success ? "Payment Success!" : "Payment Failed");
      },
      theme: { color: "#3399cc" },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return <button onClick={handlePayment}>Pay ₹{amount}</button>;
};

export default PayButton;
