import React from "react";

const Header = ({ title }) => {
  return (
    <header
      style={{
        backgroundColor: "mediumblue",
        color: "#fff",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  header: "Default Title",
};
export default Header;
