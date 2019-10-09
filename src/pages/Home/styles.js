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

  @media (min-width: 798px) {
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
