// Esta información la extraje de chat GPT

/**
@param {number} amount
@param {string} [currency='USD']
@returns {string}
 */
export const formatCurrency = (amount, currency = 'USD') => {
    return amount.toLocaleString('es-CL', { style: 'currency', currency: currency });
  };
  