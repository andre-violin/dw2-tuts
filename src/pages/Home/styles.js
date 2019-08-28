import styled from "styled-components";

export const Container = styled.div`
  .main-header {
    height: 80px;
    background: #292929;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section {
    width: 100%;
    max-width: 798px;
    margin: 30px auto 110px;
    padding: 20px;
  }

  nav {
    background: #292929;
    height: 80px;
    width: 100%;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }

  nav div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  nav div img {
    display: block;
  }
`;
