
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
  max-width: 1250px;
  width: 100%;
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
  width: 100%;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
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
  font-size: 15px;
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
  display:none;
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
export const PrecoBox = styled.div`
  background: #DC2B2B1A;
  width: 264px;
  height: 30px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 1;
  border-radius: 40px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #DC2B2B;
  @media (max-width: 768px) {
    display: none;
  }

`;
export const PrecoBoxMobile = styled.div`
display: none;
@media (max-width: 768px) {
  width: 264px;
  height: 30px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 1;
  border-radius: 40px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #DC2B2B;
  }
  @media (max-width: 430px) {
  font-size: 12px;
  padding: -1px 16px;
  }

`;
export const RankingCardMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 16px;
    width: 100%;
    max-width: 230px;
    margin-left:-11px;
  }
`;
export const FooterMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
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

export const RankingItemMobile = styled.div<{ destaque?: string
 }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 24px;
  padding: 0 9px;
  gap: 6px;
  border: 1px solid ${({ destaque }) => (destaque ? "#22c55e" : "#E2E2E2")};
  border-radius: 44px;
  background-color: ${({ destaque }) => (destaque ? "#dcfce7" : "#ffffff")};
  font-size: 13px;
  color: ${({ destaque }) => (destaque ? "#16a34a" : "#1E90FF")};
  opacity: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .voce {
    font-size: 5px;
    font-weight: bold;
    color: #16a34a;
  }

  .posicao {
    font-size: 9px;
  }

  .valor {
    font-size: 9px;
  }
`;

export const CardCompanies = styled.div`
  width: 640px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RecebimentoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 768px) {
    width: 50%;
  }
    @media (max-width: 500px) {
    width: 40%;
  }
    @media (max-width: 430px) {
    width: 30%;
  }

`;


export const LogosRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 0;
  }


`;

export const CompanyLogo = styled.img`
  width: 100%;
  max-height: 60px;
  object-fit: contain;
  cursor: pointer;
  border-radius: 8px;
  margin: 0;
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

export const LabelRecebimento = styled.label`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #2e3d50;
  padding: 4px 8px;

`;

export const ProdutoSelect = styled.div`
      width: 298px;
    height: 44px;
    padding: 10px 16px;
    border-radius: 44px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    appearance: none;
    background-image: url(/AirplaneInFlight.png);
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px 16px;
    cursor: pointer;
    border: 1px solid black;
    margin-left: 5px;
    @media (max-width: 768px) {
    width: 44%;
  }
    @media (max-width: 500px) {
    width: 40%;
  }
    @media (max-width: 430px) {
    width: 30%;
  }
    
`;
export const ProdutoSelect1 = styled.div`
      width: 298px;
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
    margin-bottom: 4px;
    margin-left: 3px;
    @media (max-width: 768px) {
    width: 44%;
  }
    @media (max-width: 500px) {
    width: 40%;
  }
    @media (max-width: 430px) {
    width: 30%;
  }
`;
export const ProdutoSelect2 = styled.div`
      width: 298px;
    height: 44px;
    padding: 10px 16px;
    border-radius: 44px;
    font-size: 14px;
    background-color: #12A19A1A;
    color: #2E7D32;
    appearance: none;
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px 16px;
    cursor: pointer;
    border: none;
    margin-bottom: 4px;
    @media (max-width: 768px) {
    width: 44%;
    background-color: white;
  }
    @media (max-width: 500px) {
    width: 40%;
    font-size: 10px;
  }
    @media (max-width: 430px) {
    width: 30%;

  }
`;

export const LockedInput = styled.div`
  width: 298px;
    height: 44px;
    padding: 10px 16px;
    border-radius: 44px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    appearance: none;
    background-image: url(/seta.png);
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px 16px;
    cursor: pointer;
    border: 1px solid red;
    @media (max-width: 768px) {
    width: 44%;
  }
    @media (max-width: 500px) {
    width: 40%;
  }
    @media (max-width: 430px) {
    width: 30%;
  }
`;

export const ImagemFinal = styled.div`
  width: 100%;
  margin-top: 24px;
`;
export const RSHighlight = styled.span`
  background-color: #DC2B2B1A;
  color: #DC2B2B;
  padding: 4px 8px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
  display: inline-block;
  margin-right: 4px;
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
  @media (max-width: 768px) {
  padding-left: 40px;
  }
  @media (max-width: 550px) {
  padding-left: 30px;
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
  width: 92%;
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

export const RankingTitle = styled.div`
  color: #2E3D50;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  margin-top: 8px;
  margin-bottom: -22px;
  @media (max-width: 768px) {
  display:none;
  }
`;

export const RankingCardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #E2E2E2;
  width: 248px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  display:none;
  }
`;

export const RankingItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'destaque',
})<{ destaque?: boolean }>`
  width: 100%;
  height: 38.4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 8px;
  border-bottom: ${({ destaque }) => (destaque ? 'none' : '1px solid #E2E2E2')};
  background-color: #FFFFFF;

  .left {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .posicao {
    color: ${({ destaque }) => (destaque ? '#12A194' : '#1E90FF')};
    font-weight: 500;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
  }

  .valor {
    color: ${({ destaque }) => (destaque ? '#12A194' : '#2E3D50')};
    font-weight: ${({ destaque }) => (destaque ? '600' : '400')};
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
  }

  .voce {
    color: #2E7D32;
    font-weight: 600;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    background-color: #12A19A1A;
    padding: 4px 8px;
    border-radius: 999px;
  }
`;

export const TextoReceba = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0;
  color: #2E3D50;
  margin-bottom: -24px;
  @media (max-width: 768px) {
  display: none;
  }
`;

export const RecebaBox = styled.div`
  width: 248px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  border-radius: 8px;
  background: #12A19A1A;
  @media (max-width: 768px) {
  display: none;
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




export const RecebaTexto = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #12A19A;
  @media (max-width: 768px) {
  display: none;
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

export const LinhaCinza = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #E2E2E2;
  margin: 16px 0 8px 0;
  @media (max-width: 768px) {
  display:none;
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  cursor: pointer;
`;

export const ToggleText = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'ativo',
})<{ ativo: boolean }>`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: ${({ ativo }) => (ativo ? '#2E3D50' : '#8F8F8F')};
 @media (max-width: 525px) {
    width:30%
  }
    @media (max-width: 430px) {
    width:25%
  }
`;



export const MediaInfoBox = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #2E7D32;
  text-align: center;
`;

export const InputsRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

