import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [posts]);
  // to nake sure with nir its the proper method to render the fetched data

  return (
    <div className="app">
      <div className="app-title">
        <h1>My Cards App</h1>
      </div>
      {posts.length > 0 && (
        <ul className="app-cards">
          {posts.map((post) => (
            <div className="app-cards-card">
              <li key={post.id}>
                <div className="app-cards-title">
                  <h1>{post.title}</h1>
                </div>
                <div className="app-cards-writer">
                  <h3>Written by: {post.id}</h3>
                </div>
                <div className="app-cards-body">
                  <p>{post.body}</p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
