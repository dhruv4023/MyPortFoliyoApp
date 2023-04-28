export const getLoginUsingCode = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_SERVER}/adminlogin/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const x = await res.json();
  return x.statusCode;
};
