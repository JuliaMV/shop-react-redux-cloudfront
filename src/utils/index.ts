const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);

export const getAuthHeader = (): { Authorization?: string } => {
  const login = localStorage.getItem("user_name");
  const password = localStorage.getItem("password");

  if (!login || !password) return {};

  const token = btoa(`${login}:${password}`);

  return { Authorization: `Basic ${token}` };
};
