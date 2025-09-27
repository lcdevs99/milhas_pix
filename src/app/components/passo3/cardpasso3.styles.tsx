
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
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;

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
  display: none;
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #E2E2E2;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 360px;
    padding: 24px 16px;
  }
`;




export const CardHeader = styled.div`
  height: 60px;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 12px;
  }
`;
export const LogosContainer = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
  align-items: center;
`;
export const LabelReceber = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #2e3d50;
  cursor: pointer;
`;
export const Label = styled.label`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #2e3d50;
  padding: 4px 8px;
`;
export const Footer = styled.div`
  width: 640px;
  margin: 10px auto 64px;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
  display: none;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;



export const BackButton = styled.button`
  width: 112px;
  height: 40px;
  padding: 10px 24px;
  border: 1px solid #E2E2E2;
  border-radius: 44px;
  background-color: #FFFFFF;
  color: black;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 1;
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




export const CardProduto = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;



export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;


export const ProdutoSelect = styled.div`
      width: 85%;
    height: 44px;
    padding: 10px 16px;
    border-radius: 44px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    appearance: none;
    background-image: url(/UserCircle.png);
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px 16px;
    cursor: pointer;
    border: 1px solid black;
    margin-left: 5px;
    @media (max-width: 768px) {
      width: 38%;
  }
    
`;
export const FooterText = styled.span`
  font-size: 14px;
  color: #2E3D50;
  margin: 0 16px;
  align-self: center;
  text-align: center;
  margin-left: auto;
`;

export const TermsLink = styled.a`
  text-decoration: underline;
  color: #2E3D50;
  cursor: pointer;

  &:hover {
    color: #1E90FF;
  }
`;


export const ProdutoSelect1 = styled.div`
      width: 85%;
    height: 44px;
    padding: 10px 16px;
    border-radius: 44px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    appearance: none;
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px 16px;
    cursor: pointer;
    border: 1px solid black;
    @media (max-width: 768px) {
      width: 38%;
      margin-left: 5px;
  }
`;
export const ProdutoSelect2 = styled.div`
    width: 85%;
    height: 44px;
    padding: 10px 16px;
    border-radius: 44px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    appearance: none;
    background-image: url(/compra.png);
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px 16px;
    cursor: pointer;
    border: 1px solid black;
    margin-bottom: 13px;
    margin-left: 5px;
    @media (max-width: 768px) {
      width: 38%;
  }
}
`;
export const ProdutoSelect3 = styled.div`
  width: 85%;
  height: 44px;
  padding: 10px 16px;
  border-radius: 44px;
  font-size: 14px;
  background-color: #fff;
  color: #333;
  appearance: none;
  background-image: url(/WhatsApp.png);
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px 16px;
  cursor: pointer;
  border: 1px solid black;
   display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 13px;
  @media (max-width: 768px) {
      width: 38%;
  }
`;

export const FooterMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 16px;
    border-top: 1px solid #e2e2e2;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;
export const RecebaBoxMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    height: 44px;
    width: 100%;
    margin-top: 16px;
    background: #12A19A1A;
    border-radius: 8px;
  }
`;
export const RecebaTextoMobile = styled.span`
display:none;
@media (max-width: 768px) {
display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #12A19A;
}
`;
export const BackIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E2E2E2;
  width: 40px;
  height: 40px;
  padding: 10px 24px;
  gap: 8px;
  opacity: 1;
  border-radius: 44px;
  background: none;
  font-size: 16px;
  color: black;
  cursor: pointer;
`;


export const StepCounterMobile = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #2e3d50;
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
`;


export const ImagemFinal = styled.div`
  width: 100%;
  margin-top: 24px;
`;


export const OptionStyled = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: 14px;
  color: #2E3D50;
`;


export const InfoCardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  @media (max-width: 400px) {
    
  }
`;



export const InfoCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #E2E2E2;
  padding: 16px;
  width: 248px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  width: 72%;
  }
  @media (max-width: 500px) {
  width: 101%;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoTitle = styled.div`
  color: #2E3D50;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
`;

export const InfoText = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #2E3D50;
  line-height: 22px;
`;


export const InputsRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }


`;

