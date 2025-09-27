"use client";
import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
`;



export const ContentRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }

`;

export const Sidebar = styled.div`
  width: 280px;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  @media (max-width: 768px) {
    display:none;
  }
`;

export const StepItem = styled.div<{ $active?: boolean }>`
  width: 248px;
  height: 86.25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background-color: ${({ $active }) => ($active ? "#F9F9F9" : "#fff")};
  color: ${({ $active }) => ($active ? "#1E90FF" : "#666")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  cursor: ${({ $active }) => ($active ? "default" : "not-allowed")};
`;

export const StepContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  width: 100%;
`;

export const StepImage = styled.img`
  width: 53px;
  height: 89.25px;
`;

export const StepText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StepTitle = styled.div<{ $active?: boolean }>`
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 500 : 'normal')};
  color: ${({ $active }) => ($active ? '#2E3D50' : '#CBD5E1')};
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0px;
`;

export const StepDescription = styled.div<{ $active?: boolean }>`
  font-family: "DM Sans", sans-serif;
  font-weight: ${({ $active }) => ($active ? 400 : 'normal')};
  font-style: normal;
  font-size: 12px;
  line-height: 160%;
  letter-spacing: 0;
  color: ${({ $active }) => ($active ? '#475569' : '#CBD5E1')};
  margin-top: 4px;
`;

export const CardContainer = styled.div`
  width: 640px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 84%;
    padding: 16px;
    gap: 16px;
  }
`;

export const CardHeader = styled.div`
  height: 60px;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
`;

export const CardHeaderTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StepNumber = styled.span`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #1e90ff;
`;

export const StepTextMain = styled.span`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #2e3d50;
  @media (max-width: 768px) {
  font-size: 15px;
  }
`;

export const CardCompanies = styled.div`
  width: 640px;
  height: 110px;
  padding: 16px;
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
  align-items: center;
`;

export const CompanyLogo = styled.img`
  height: 72px;
  object-fit: contain;
  max-width: 140px;
`;

export const CardItem2Mobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

  export const MobileProgramHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    gap: 8px;
    opacity: 1;
    border-radius: 8px;
    padding: 12px;
    border: 1px solid #E2E2E2;
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #2e3d50;
    width: 84%;
  }
`;

export const PlusIcon = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #1e90ff;
`;


export const InputItem = styled.div`
  height: 44px;
  border-radius: 44px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;
export const InputItemMobile = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 44px;
    padding: 10px 16px;
    border-radius: 44px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    appearance: none;
    background-image: url("/image35.png");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 43px 20px;
    cursor: pointer;
    border: 1px solid black;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;



export const InputLeftIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const InputText = styled.span`
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  color: #2e3d50;
`;

export const InputRightImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const InfoCard = styled.div`
  width: 248px;
  height: 110px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 768px) {
    width: 84%;
  }

`;

export const InfoContent = styled.div`
  width: 224px;
  height: 86px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoTitle = styled.div`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #2e3d50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    font-size: 15px;
    gap: 8px;
    width: 200%;
  }

  @media (max-width: 650px) {
    width: 192%;
  }
    @media (max-width: 600px) {
    width: 150%;
  }
     @media (max-width: 550px) {
    width: 144%;
  }

  @media (max-width: 500px) {
    width: 120%;
  }
    @media (max-width: 450px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    width: 94%;
  }
`;



export const CloseIcon = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #2e3d50;
  cursor: pointer;

  &::before {
    content: "×";
    display: inline-block;
    background-color: #e5e7eb;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    &::before {
      content: "–";
      background-color: transparent;
      width: auto;
      height: auto;
      border-radius: 0;
      line-height: normal;
      color: #94a3b8;
      font-size: 20px;
    }
  }
`;



export const InfoText = styled.div`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #475569;
  @media (max-width: 768px) {
    width: 130%;
  }
    @media (max-width: 400px) {
    width: 100%;
  }
`;

export const CardProduto = styled.div`
  width: 640px;
  padding: 12px 16px 16px 16px;
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #2e3d50;
  padding: 4px 8px;
`;

export const ProdutoSelect = styled.select`
  width: 298px;
  height: 44px;
  padding: 10px 16px;
  border-radius: 44px;
  font-size: 14px;
  background-color: #fff;
  color: #333;
  appearance: none;
  background-image: url("/CaretUpDown.png");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LockedInput = styled.div`
  width: 298px;
  height: 37px;
  padding: 10px 16px;
  border-radius: 37px;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("/LockSimple.png");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  width: 95%;
  border-top: 1px solid #e5e7eb;
  padding: 32px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  @media (max-width: 768px) {
  display:none;
  }
`;

export const FooterMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center; /* centraliza o StepCounter */
    align-items: center;
    padding: 12px 16px;
    border-top: 1px solid #e2e2e2;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;

export const StepCounterMobile = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #2e3d50;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  span {
      color: #2563eb;
      font-weight: 600;
    }
`;

export const ProceedButtonMobile = styled.button`
  background-color: #1e90ff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`;


export const ProceedButton = styled.button`
  color: #fff;
  width: 142px;
  height: 40px;
  padding: 10px 24px;
  gap: 8px;
  opacity: 1;
  border-radius: 44px;
  background-color: #1e90ff;
  border: 1px solid #1e90ff;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowIcon = styled.span`
  font-size: 16px;
`;

