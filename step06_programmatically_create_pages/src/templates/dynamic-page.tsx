import React from "react";

export default ({pageContext}) => {
  return (
    <div>
      <div>Hello Dynamic Page from {pageContext.name}</div>
    </div>
  )
}