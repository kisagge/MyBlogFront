import styled from "styled-components";

const MainPage = () => {
  return (
    <Pub.Page>
      <h1>hello</h1>
    </Pub.Page>
  );
};

export default MainPage;

const Pub = {
  Page: styled.div`
    background-color: #f5f5dc;
    width: 100%;
    height: 867px;
    overflow: hidden;
  `,
};
