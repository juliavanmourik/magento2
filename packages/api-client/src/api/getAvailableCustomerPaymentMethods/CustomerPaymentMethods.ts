export default `
  query CustomerAvailablePaymentMethods {
    customerCart {
      available_payment_methods {
        code
        title
      }
    }
  }
`;
