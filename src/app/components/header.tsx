'use client';
import styled from 'styled-components';
import Image from 'next/image';

const HeaderContainer = styled.header`
  background-color: #1E90FF;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between; // separa esquerda e direita
  padding: 0 20px;
`;

const LeftContent = styled.div`
  height: 36px;
  min-width: 64px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 16px;
  border: 1px solid white;
  color: white;
  font-weight: bold;
  font-size: 16px;
  background-color: transparent;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;




export default function Header() {
  return (
    <HeaderContainer>
      <RightContent>
        <Image src="/logo_milhas_pix.png" alt="MilhasPix Logo" width={120} height={30} />
      </RightContent>
      <LeftContent>R$ 283,12</LeftContent>
    </HeaderContainer>
  );
}

