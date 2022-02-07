import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 60px;
  background-color: #0F0E17;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 560px) {
    width: 100%;
    height: 391px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerTexto = styled.div`
  width: 695px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 560px) {
    margin-top: 44.67px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const P = styled.p`
  color: #FFFFFE;
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin-right: 10px;
  @media screen and (max-width: 560px) {
    font-size: 20px;
    line-height: 32px;
  }
`

export const P2 = styled.p`
  color: #FFFFFE;
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin-right: 10px;
  @media screen and (max-width: 560px) {
    font-size: 20px;
    line-height: 32px;
    margin-top: 44.67px;
    margin-bottom: 44.67px;
  }
`