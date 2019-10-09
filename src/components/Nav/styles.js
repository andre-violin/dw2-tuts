import styled from "styled-components";

export const Container = styled.nav`
  background: #292929;
  height: 80px;
  width: 100%;
  color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;

  .link {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .link img {
    display: block;
  }

  @media (min-width: 798px) {
    height: calc(100% - 80px);
    width: 80px;
    left: 0;
    top: 80px;
    flex-direction: column;
    justify-content: center;

    .link {
      flex-grow: 0;
      padding: 10px 0;
    }
  }
`;
