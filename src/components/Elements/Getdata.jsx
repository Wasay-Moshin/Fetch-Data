import React from "react";
import useFetch from "./useFetch";

function Getdata() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;
  return (
    <>
    <div className="data">
        <h1>Fetch Data Through Axios</h1>
    </div>
    <ul>
      {data &&
        data.map((items) => (
          <ul key={items.id}>
            <li>
              {" "}
              <b>UserId:</b> {items.userId} <br /> <b>Title: </b>
              {items.title}
            </li>
            &nbsp;
          </ul>
        ))}
    </ul>
    </>

  );
}

export default Getdata;
