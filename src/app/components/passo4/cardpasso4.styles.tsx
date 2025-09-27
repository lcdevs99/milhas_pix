
import styled from "styled-components";
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto; /* ✅ centraliza a página inteira */
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;
`;
export const Sidebar = styled.div`
  width: 280px;
  background-color: #fff;
  padding: 24px;
  border-radius: 44px;
  font-size: 14px;
  color: #333;
  @media (max-width: 500px) {
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
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 32px;
  width: 100%;
  max-width: 928px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 360px;
    padding: 24px 16px;
    border:none;
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
export const ArrowIcon = styled.span`
  font-size: 16px;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 64px 0;
`;

export const CelebrationIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const SuccessTitle = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #1E90FF;
  text-align: center;
`;

export const SuccessText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #2E3D50;
  text-align: center;
  max-width: 480px;
`;

export const SuccessButton = styled.button`
  width: 196px;
  height: 40px;
  padding: 10px 24px;
  border-radius: 44px;
  background-color: #1E90FF;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #187bcd;
  }
`;



