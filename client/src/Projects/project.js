export const addProject = async (data) => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/project/addproject/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const rs = await res.json();
  console.log(rs);
};
export const delProject = async (id) => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/project/delproject/${id}/`,
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

export const editProject = async (data, id) => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/project/editproject/${id}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const rs = await res.json();
  console.log(rs);
};
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
