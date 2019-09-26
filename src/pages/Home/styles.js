import styled from "styled-components";

export const Container = styled.div`
  .main-header {
    height: 80px;
    background: #292929;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999;
  }

  section {
    width: 100%;
    max-width: 768px;
    margin: 110px auto;
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

  nav .link {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  nav .link img {
    display: block;
  }

  @media (min-width: 798px) {
    nav {
      height: calc(100% - 80px);
      width: 80px;
      left: 0;
      top: 80px;
      flex-direction: column;
      justify-content: center;
    }

    nav .link {
      flex-grow: 0;
      padding: 10px 0;
    }

    section {
      width: calc(100%-80px);
    }
  }

  @media (min-width: 980px) {
    .main-header {
      padding-left: 25px;
      justify-content: flex-start;
    }
  }
`;
