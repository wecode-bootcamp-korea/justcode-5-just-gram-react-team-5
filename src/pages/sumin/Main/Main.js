import React, { useState, useEffect } from "react";
import Header from "./Header";
import Feed from "./Feed";
import Aside from "./Aside/Aside";
import "./Main.scss";

function MainSeo() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json")
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data);
      });
  }, []);

  return (
    <section className="Main main__wrapper">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Header />
      <main className="main-feed__wrapper">
        <section className="main-feed">
          {feeds.map((data) => (
            <Feed key={data.id} data={data} />
          ))}
        </section>
        <Aside />
      </main>
    </section>
  );
}

export default MainSeo;
