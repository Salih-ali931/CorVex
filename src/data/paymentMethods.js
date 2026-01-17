const paymentMethods = [
  {
    id: "card",
    title: "Credit / Debit Card",
    subtitle: "Visa, MasterCard, RuPay",
    route: "/payment/card",
  },
  {
    id: "upi",
    title: "UPI",
    subtitle: "Google Pay, PhonePe",
    route: "/payment/upi",
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    subtitle: "Pay when delivered",
    route: "/payment/cod",
  },
];

export default paymentMethods;
