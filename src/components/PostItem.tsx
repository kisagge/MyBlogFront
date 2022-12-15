import styled from "styled-components";

const PostItem = () => {
  return <Pub.PostItemDiv></Pub.PostItemDiv>;
};

export default PostItem;

const Pub = {
  PostItemDiv: styled.div`
    border: 1px solid #333333;
    flex: 0 1 19%;
    height: 48%;

    margin: 0 5px;
  `,
};
