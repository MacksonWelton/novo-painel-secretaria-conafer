import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 1200px;
  display: flex;
  padding: 30px 10px;
  overflow: auto;
`;

export const Label = styled.span`
  padding: 4px 6px;
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 2px;
  border-radius: 4px;
  display: inline-block;
  background: #515a60;

  &:hover .delete {
    display: inline;
    color: white;
  }
`;

export const ButtonTag = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 2px;
  border: 0;
  border-radius: 8px;
  background: #e7e7e7;
`;

export const ButtonBox = styled.div`

  button:first-child {
    color: #FFF;
    background-color: #2d8848;
  }
  
  button {
    border-radius: 4px;
    padding: 6px 10px;
    margin: 3px;
    border: none;
    text-decoration: none;
    background: #FFF;
  }
`;

export const ActivitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  .userName {
    font-weight: bold;
    margin-right: 5px;
    margin-bottom: 2px;
  }

  .dateTime {
    margin-left: 5px;
    margin-bottom: 2px;
  }

  .statusMessage {
    margin-left: 5px;
  }

  span {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    background-color: #ebedef;
  }

  .buttonBox {
    button:first-child {
      color: #FFF;
      background-color: #2d8848;
    }
    
    button {
      border-radius: 4px;
      padding: 3px;
      margin: 3px;
      border: none;
      text-decoration: none;
    }
  }
`;

export const DeleteLabel = styled.button`
  color: #515a60;
  background-color: transparent;
  border: none;
  display: none;
`;
