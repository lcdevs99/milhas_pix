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
  CardCompanies,
  CompanyLogo,
  CardProduto,
  InputGroup,
  Label,
  ProdutoSelect,
  LockedInput,
  InfoCard,
  InfoContent,
  InfoTitle,
  InfoText,
  Footer,
  ProceedButton,
  ArrowIcon,
  PrecoBox,
  RecebimentoWrapper,
  LabelRecebimento,
  LogosRow,
  OptionStyled,
  RSHighlight,
  InfoCardsColumn,
  RankingTitle,
  RankingCardWrapper,
  RankingItem,
  LinhaCinza,
  TextoReceba,
  RecebaBox,
  RecebaTexto,
  BackButton,
  ToggleWrapper,
  ToggleText,
  MediaInfoBox,
  InputsRow,
  ProdutoSelect2,
  ProdutoSelect1,
  CardSection,
  PrecoBoxMobile,
  RankingCardMobile,
  RankingItemMobile,
  FooterMobile,
  ProceedButtonMobile,
  StepCounterMobile,
  BackIcon,
  RecebaTextoMobile,
  RecebaBoxMobile,
} from "./cardpasso2.styles";

const passos = [
  "Escolha o programa",
  "Oferte suas milhas",
  "Insira os dados do programa",
  "Pedido finalizado",
];

export default function CardPasso2() {
  const pathname = usePathname();
  const passoAtual = parseInt(pathname.replace("/passo", "")) || 1;
  const router = useRouter();
  const [mediaAtiva, setMediaAtiva] = useState(false); // ✅ estado do toggle

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
                <StepNumber>02.</StepNumber>
                <StepTextMain>Oferte suas Milhas</StepTextMain>
              </CardHeaderTitle>
              <PrecoBox>
                Escolha entre <strong>R$ 14,00</strong> e{" "}
                <strong>R$ 16,66</strong>
              </PrecoBox>
            </CardHeader>

            <CardCompanies>
              <RecebimentoWrapper>
                <LabelRecebimento>Quero Receber</LabelRecebimento>
                <LogosRow>
                  <CompanyLogo src="/imediato.png" alt="imediato" />
                  <CompanyLogo src="/2dias.png" alt="2dias" />
                  <CompanyLogo src="/7dias.png" alt="7dias" />
                  <CompanyLogo src="/voo.png" alt="Vôo" />
                </LogosRow>
              </RecebimentoWrapper>
            </CardCompanies>

            <CardProduto>
              <InputsRow>
                <InputGroup>
                  <Label>Milhas ofertadas</Label>
                  <ProdutoSelect>
                    <OptionStyled>10.000</OptionStyled>
                  </ProdutoSelect>
                </InputGroup>

                <InputGroup>
                  <Label>Valor a cada 1.000 milhas</Label>
                  <LockedInput>
                    <RSHighlight>R$</RSHighlight>
                    <OptionStyled>25,00</OptionStyled>
                  </LockedInput>
                </InputGroup>
              </InputsRow>
                <PrecoBoxMobile>
    Escolha entre <strong>R$ 14,00</strong> e <strong>R$ 16,66</strong>
  </PrecoBoxMobile>
  <RankingCardMobile>
  <RankingItemMobile>
    <span className="posicao">1º</span>
    <span className="valor">R$ 15,23</span>
  </RankingItemMobile>
  <RankingItemMobile>
    <span className="posicao">2º</span>
    <span className="valor">R$ 15,23</span>
  </RankingItemMobile>
  <RankingItemMobile>
    <span className="posicao">3º</span>
    <span className="valor">R$ 15,23</span>
  </RankingItemMobile>
  <RankingItemMobile destaque="true">
    <span className="voce">Você</span>
    <span className="posicao">4º</span>
    <span className="valor">R$ 25,35</span>
  </RankingItemMobile>
  <RankingItemMobile>
    <span className="posicao">5º</span>
    <span className="valor">R$ 15,23</span>
  </RankingItemMobile>
</RankingCardMobile>



              {/* ✅ Toggle substituindo ImagemFinal */}
              <ToggleWrapper onClick={() => setMediaAtiva(!mediaAtiva)}>
                <img
                  src={
                    mediaAtiva
                      ? "/toggle-button-ativo.png"
                      : "/toggle-button-inativo.png"
                  }
                  alt="Toggle média"
                  width={50}
                  height={50}
                />
                <ToggleText ativo={mediaAtiva}>
                  Definir média de milhas por passageiro
                </ToggleText>
              </ToggleWrapper>

              {mediaAtiva && (
                <>
                  <InputsRow>
                    <InputGroup>
                      <ProdutoSelect1>
                        <OptionStyled>10.000</OptionStyled>
                      </ProdutoSelect1>
                    </InputGroup>

                    <InputGroup>
                      <ProdutoSelect2>
                        <MediaInfoBox>
                          Melhor média para a sua oferta:{" "}
                          <strong>27.800</strong>
                        </MediaInfoBox>
                      </ProdutoSelect2>
                    </InputGroup>
                  </InputsRow>
                </>
              )}
            </CardProduto>
          </CardContainer>
          <Footer>
            <BackButton onClick={() => router.push("/passo1")}>
              ← Voltar
            </BackButton>
            <ProceedButton onClick={() => router.push("/passo3")}>
              Prosseguir <ArrowIcon>→</ArrowIcon>
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

          <RankingTitle>Ranking das Ofertas</RankingTitle>
          <RankingCardWrapper>
            <RankingItem>
              <div className="left">
                <span className="posicao">1º</span>
                <span className="valor">R$ 15,23</span>
              </div>
            </RankingItem>
            <RankingItem>
              <div className="left">
                <span className="posicao">2º</span>
                <span className="valor">R$ 16,32</span>
              </div>
            </RankingItem>
            <RankingItem>
              <div className="left">
                <span className="posicao">3º</span>
                <span className="valor">R$ 16,44</span>
              </div>
            </RankingItem>
            <RankingItem>
              <div className="left">
                <span className="posicao">4º</span>
                <span className="valor">R$ 16,45</span>
              </div>
            </RankingItem>
            <RankingItem destaque={true}>
              <div className="left">
                <span className="posicao">5º</span>
                <span className="valor">R$ 25,00</span>
              </div>
              <span className="voce">Você</span>
            </RankingItem>
          </RankingCardWrapper>

          <LinhaCinza />
          <TextoReceba>Receba até:</TextoReceba>
          <RecebaBox>
            <RecebaTexto>R$</RecebaTexto>
            <RecebaTexto>24.325,23</RecebaTexto>
          </RecebaBox>
          <RecebaBoxMobile>
            <RecebaTextoMobile>Receba até</RecebaTextoMobile>
            <RecebaTextoMobile>R$24.325,23</RecebaTextoMobile>
          </RecebaBoxMobile>
          <FooterMobile>
  <BackIcon onClick={() => router.push("/passo1")}>←</BackIcon>

  <StepCounterMobile>
    <span>2</span> de 4
  </StepCounterMobile>

  <ProceedButtonMobile onClick={() => router.push("/passo3")}>
    Prosseguir <ArrowIcon>→</ArrowIcon>
  </ProceedButtonMobile>
</FooterMobile>
        </InfoCardsColumn>
      </ContentRow>
    </PageWrapper>
  );
}
