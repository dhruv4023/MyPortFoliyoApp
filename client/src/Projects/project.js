export const checkWhetherAppointmentAlredyBooked = async () => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/appointment/checkWhetherAppointmentAlredyBooked/${sid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": "csrftoken",
      },
      body: JSON.stringify({ contactNumber }),
    }
  );
  const rs = await res.json();
  // console.log(rs);
  rs.alredyBooked && alert(rs.msg);
  return rs.alredyBooked;
};
