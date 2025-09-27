"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import {
  PageWrapper,
  ContentRow,
  Sidebar,
  StepItem,
  StepContent,
  StepImage,
  StepText,
  StepTitle,
  StepDescription,
  CardContainer,
  CardHeader,
  CardHeaderTitle,
  StepNumber,
  StepTextMain,
  CardProduto,
  InputGroup,
  Label,
  ProdutoSelect,
  InfoCard,
  InfoContent,
  InfoTitle,
  InfoText,
  Footer,
  ProceedButton,
  ArrowIcon,
  OptionStyled,
  InfoCardsColumn,
  BackButton,
  InputsRow,
  ProdutoSelect2,
  ProdutoSelect1,
  CardSection,
  ProdutoSelect3,
  FooterText,
  TermsLink,
  ProceedButtonMobile,
  FooterMobile,
  StepCounterMobile,
  BackIcon,
  RecebaBoxMobile,
  RecebaTextoMobile,
} from "./cardpasso3.styles";

const passos = [
  "Escolha o programa",
  "Oferte suas milhas",
  "Insira os dados do programa",
  "Pedido finalizado",
];

export default function CardPasso3() {
  const pathname = usePathname();
  const passoAtual = parseInt(pathname.replace("/passo", "")) || 1;
  const router = useRouter();
  const [mediaAtiva, setMediaAtiva] = useState(false);

  return (
    <PageWrapper>
      <ContentRow>
        <Sidebar>
          {passos.map((label, index) => {
            const passoIndex = index + 1;
            const isActive = passoAtual === passoIndex;

            let imageSrc = "";
            if (passoIndex === 1) {
              imageSrc = isActive ? "/Frame.png" : "/Frame1.png";
            } else {
              if (isActive) imageSrc = "/Frameetapaatual.png";
              else if (passoIndex < passoAtual) imageSrc = "/Frame234.png";
              else imageSrc = "/FrameApagado.png";
            }

            return (
              <StepItem
                key={index}
                $active={isActive}
                onClick={() => router.push(`/passo${passoIndex}`)}
                style={{ cursor: "pointer" }}
              >
                <StepContent>
                  <StepImage
                    src={imageSrc}
                    alt={`Ícone do passo ${passoIndex}`}
                  />
                  <StepText>
                    <StepTitle $active={isActive}>Passo {passoIndex}</StepTitle>
                    <StepDescription $active={isActive}>
                      {label}
                    </StepDescription>
                  </StepText>
                </StepContent>
              </StepItem>
            );
          })}
        </Sidebar>
        <CardSection>
          <CardContainer>
            <CardHeader>
              <CardHeaderTitle>
                <StepNumber>03.</StepNumber>
                <StepTextMain>
                  Insira os dados do programa de fidelidade
                </StepTextMain>
              </CardHeaderTitle>
              <img src="/image35.png" alt="Etapa 03" width={61} height={26} />
            </CardHeader>

            <CardProduto>
              <InputsRow>
                <InputGroup>
                  <Label>CPF do Titular</Label>
                  <ProdutoSelect>
                    <OptionStyled>431.140.231-12</OptionStyled>
                  </ProdutoSelect>
                </InputGroup>

                <InputGroup>
                  <Label>Login de acesso</Label>
                  <ProdutoSelect1>
                    <OptionStyled>1283124124</OptionStyled>
                  </ProdutoSelect1>
                </InputGroup>
              </InputsRow>

              <InputsRow>
                <InputGroup>
                  <Label>Senha de acesso</Label>
                  <ProdutoSelect2>
                    <OptionStyled>1877</OptionStyled>
                  </ProdutoSelect2>
                </InputGroup>

                <InputGroup>
                  <Label>Telefone para autenticação</Label>
                  <ProdutoSelect3>
                    <img
                      src="/Frame 48097686.png"
                      alt="Etapa 03"
                      width={66}
                      height={32}
                    />
                    <OptionStyled>(19)98277-3123</OptionStyled>
                  </ProdutoSelect3>
                </InputGroup>
              </InputsRow>
            </CardProduto>
          </CardContainer>
          <Footer>
            <BackButton onClick={() => router.push("/passo2")}>
              ← Voltar
            </BackButton>

            <FooterText>
              Ao prosseguir você concorda com os{" "}
              <TermsLink href="/termos-de-uso">termos de uso</TermsLink>
            </FooterText>

            <ProceedButton onClick={() => router.push("/passo4")}>
              Concluir <ArrowIcon>→</ArrowIcon>
            </ProceedButton>
          </Footer>
        </CardSection>

        <InfoCardsColumn>
          <InfoCard>
            <InfoContent>
              <InfoTitle>Média de Milhas</InfoTitle>
              <InfoText>
                Ao vender mais de 20.000 milhas, ative as Opções Avançadas para
                definir a média de milhas por emissão.
              </InfoText>
            </InfoContent>
          </InfoCard>
        </InfoCardsColumn>
        <RecebaBoxMobile>
          <RecebaTextoMobile>Receba até</RecebaTextoMobile>
          <RecebaTextoMobile>R$24.325,23</RecebaTextoMobile>
        </RecebaBoxMobile>
        <FooterMobile>
          <BackIcon onClick={() => router.push("/passo2")}>←</BackIcon>

          <StepCounterMobile>
            <span>3</span> de 4
          </StepCounterMobile>

          <ProceedButtonMobile onClick={() => router.push("/passo4")}>
            Prosseguir <ArrowIcon>→</ArrowIcon>
          </ProceedButtonMobile>
        </FooterMobile>
      </ContentRow>
    </PageWrapper>
  );
}
