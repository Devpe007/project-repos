import React from "react";

function Repository({ match }) {
  return (
    <div>
      <h1 style={{ color: '#fff' }} >
        {decodeURIComponent(match.params.repository)}
      </h1>
    </div>
  );
};

export default Repository;