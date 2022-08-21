import React from "react";
export default function Messages({ mess }) {
  return (
    <>
      <div>
        <p className="mess receive">hello !</p>
      </div>
      {mess?.messages?.map((m) => (
        <div key={m._id}>
          {m.side === "me" ? (
            <p className="mess me">{m.message}</p>
          ) : (
            <p className="mess visitor">{m.message}</p>
          )}
        </div>
      ))}
    </>
  );
}
