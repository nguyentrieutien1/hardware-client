import React from "react";
import "./loading.css"
export default function Loading() {
  return (
    <>
      <div className="pageloader gray-bg">
        <div className="loader">
          <span>Máy Tính Thu Nguyễn</span>
          <div className="sp-hydrogen"></div>
        </div>
      </div>

      <div className="container bootstrap snippets bootdeys">
        <div className="jumbotron">
          <h1 id="loading-text">Loading...</h1>
        </div>
      </div>
    </>
  );
}
