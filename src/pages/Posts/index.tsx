import { ChangeEvent, useEffect, useState, FocusEvent, FormEvent } from "react";
import styled from "styled-components";
import PostItem from "../../components/PostItem";

const SEARCH_OPTIONS = [
  { value: "TITLE", name: "제목" },
  { value: "STACK", name: "기술스택" },
  { value: "CONTENT", name: "내용" },
];

const PostsPage = () => {
  const [keyword, setKeyword] = useState("");
  const [selectSearchValue, setSelectSearchValue] = useState("TITLE");

  // input handler
  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleBlurKeyword = (e: FocusEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.trim());
  };

  // select box handler
  const handleChangeSearchSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectSearchValue(e.target.value);
  };

  // submit handler
  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("keyword===", keyword);
    console.log("searchValue===", selectSearchValue);
  };

  // useEffect(() => {
  //   console.log(selectSearchValue);
  // }, [selectSearchValue]);

  return (
    <Pub.Page>
      <Pub.SearchForm onSubmit={handleSubmitSearch}>
        <Pub.SearchDiv>
          <Pub.SearchSelectBox onChange={handleChangeSearchSelect}>
            {SEARCH_OPTIONS.map((option) => {
              return (
                <option key={`select-search-${option.value}`} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </Pub.SearchSelectBox>
          <Pub.SearchInput
            id="keyword"
            value={keyword}
            onChange={handleChangeKeyword}
            onBlur={handleBlurKeyword}
            maxLength={30}
          />
          <Pub.SearchButton>Search</Pub.SearchButton>
        </Pub.SearchDiv>
      </Pub.SearchForm>
      <Pub.PostMenuDiv>
        <button>Create Post</button>
        <button>Most View</button>
        <button>Recently Posted</button>
      </Pub.PostMenuDiv>
      <Pub.PostSection>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Pub.PostSection>
      <Pub.PostsPaginationDiv></Pub.PostsPaginationDiv>
    </Pub.Page>
  );
};

export default PostsPage;

const Pub = {
  Page: styled.div`
    background-color: #f5f5dc;
    width: 100%;
    height: 867px;
    overflow: hidden;
  `,

  SearchForm: styled.form`
    width: 100%;
    height: 7%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,

  SearchDiv: styled.div`
    width: 50%;
    text-align: center;

    label {
      font-size: 15px;
      font-weight: 800;
    }
  `,

  SearchSelectBox: styled.select``,

  SearchInput: styled.input`
    margin: 0 10px;
    width: 50%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #333333;
    outline: none;
    background-color: #f5f5dc;
  `,

  SearchButton: styled.button`
    background-color: #444444;
    border: none;
    width: 60px;
    height: 32px;
    cursor: pointer;
    color: white;
    font-weight: 600;
    border-radius: 5px;
  `,
  PostMenuDiv: styled.div`
    height: 8%;

    margin: 0 10px;

    display: flex;

    button {
      background-color: #444444;
      color: white;
      margin: 5px;
      min-width: 100px;
      border-radius: 10px;
      cursor: pointer;
    }
  `,

  PostSection: styled.section`
    border: 1px solid #333333;

    height: 75%;

    padding: 10px 0 0 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  `,
  PostsPaginationDiv: styled.div`
    border: 1px solid #333333;
  `,
};
