import React, { useEffect, useState } from "react";
import FlexBetween from "../../Components/FlexBetween";
import Repository from "./Repository";
import { githubLinksStatic } from "./MydataStatic";

export default function Github() {
  const [githubLinkss, setGithubLinkss] = useState();
  useEffect(() => {
    setGithubLinkss(githubLinksStatic());
  }, []);
  return (
    <>
      {githubLinkss ? (
        <FlexBetween
          width={"95vw"}
          borderRadius={4}
          overflow={"auto"}
          flexDirection={"column"}
        >
          {githubLinkss.map((m, i) => {
            return <Repository data={m} key={i} />;
          })}
        </FlexBetween>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
