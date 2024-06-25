import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 100vh;
  background: #fff2c6;
`;

export const Line = styled.div`
  position: relative;
  top: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 98%;
  border: 3px solid #fff;
`;

export const Logo = styled.div`
  margin-top: 20px;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const LetterWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 29rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Letter = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  min-height: 60px;
  border-radius: 5px;
  border: 1px solid #cf4d4d;
  background: #fff;
  margin-top: 8px;
  color: #5f5f5f;
  font-family: Inter;
  font-size: 16px;
  text-align: center;
  padding-left: 10px;
`;

export const PostBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30vh;
  border-radius: 160px 160px 0px 0px;
  background: #cf4d4d;
  #postText {
    margin-top: 20px;
    color: #fff;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  hr {
    width: 190px;
    height: 9px;
    background: #000;
    border: none;
  }
`;

export const SendBtn = styled.div`
  margin-top: 10px;
  width: 50%;
  height: 12vh;
  border: 1px solid #890505;
  background: #cf4d4d;
  position: relative;

  #heart {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    font-size: 60px;
    height: 8vh;
  }
  #goText {
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
  }
`;
