import React from "react";
import {Pagination} from "@material-ui/lab";
import styled from "styled-components";

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);

  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
     <Container>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          shape="rounded"
          color="secondary"
          hideNextButton
          hidePrevButton
          size="large"
          text="000000"
          style={{ color: "red" }}
        />
        </Container>
    </div>
  );
}

const Container = styled.div`
display: block;
color: #000000;
position: relative;
overflow-x: hidden;
`; 