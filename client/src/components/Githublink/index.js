import React from "react";

function Githublink() {
  return (
    <div
      className="text-center py-3"
      style={{ margin: "-50px 3px 3px 3px", background: "black" }}
    >
      <p style={{ color: "white" }}>
        Github:
        <a
          href="https://github.com/hunterrickert/crypto-currency-mining"
          target="blank"
          style={{ color: "white", marginLeft: "10px" }}
        >
          <i className="fab fa-github"> </i>
        </a>
      </p>
    </div>
  );
}

export default Githublink;
