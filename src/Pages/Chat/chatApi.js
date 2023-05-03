export const getChatData = async (id) => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/chat/getChatData/${id}`,
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
export const getChatTitles = async () => {
  //   console.log(Details);
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/chat/chatuserlist/`,
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

export const sendNewMsgs = async (data,id) => {
  //   console.log(Details);
  const res = await fetch(`${process.env.REACT_APP_SERVER}/chat/addNewMsg/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const rs = await res.json();
  // console.log(rs);
};
