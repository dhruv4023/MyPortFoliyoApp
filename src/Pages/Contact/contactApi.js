export const submitContactMsg = async (data) => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/contact/addcontact/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const rs = await res.json();
  alert(rs.msg);
};
