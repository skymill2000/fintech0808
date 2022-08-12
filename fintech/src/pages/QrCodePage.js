import React from "react";
import AppHeader from "../components/common/AppHeader";
import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  return (
    <div>
      <AppHeader title={"QR코드"}></AppHeader>
      <QRBlock>
        <QRCodeSVG size={200} value="https://reactjs.org/" />
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
