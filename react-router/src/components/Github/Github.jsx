import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  /* const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/singla-nitin")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []); */

  /* instead of above normal fetch call we are using Loader because of otimization in above  fetch call starts  when we click the button but in loader fetch starts when we just hover over the button and it stores in the cache , due to which a lottle lag is eliminated */

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers : {data.followers}
      <img
        src={data.avatar_url}
        className="rounded-lg"
        alt="Git profile image"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
