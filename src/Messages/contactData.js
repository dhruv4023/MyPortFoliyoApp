// export const addContactMsg = async (data) => {
//   //   console.log(Details);
//   const res = await fetch(
//     `${process.env.REACT_APP_SERVER}/contact/addcontact/`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );
//   const rs = await res.json();
//   console.log(rs);
// };
export const delContactMsg = async (id) => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/contact/delcontact/${id}/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const rs = await res.json();
  console.log(rs);
};

export const getContactMsg = async () => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/contact/getcontact/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const rs = await res.json();
  return rs;
};
