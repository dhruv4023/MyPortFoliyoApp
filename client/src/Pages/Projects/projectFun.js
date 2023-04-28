export const getProject = async () => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/project/getproject/`,
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
