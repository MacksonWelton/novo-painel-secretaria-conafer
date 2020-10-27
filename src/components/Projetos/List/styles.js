import styled, {css} from "styled-components";

export const Container = styled.div`
  padding: 0 25px;
  height: 100%;
  flex: 0 0 300px;
  opacity: ${props => props.done ? 0.6 : 1};
  cursor: grab;

  & + div {
    border-left: 1px solid white;
  }

  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    

    &:hover .deleteList {
      display: inline-block;
    }

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    .deleteList  {
      display: none;
      border-radius: 18px;
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0px;
    margin-top: 30px;
  }
`;