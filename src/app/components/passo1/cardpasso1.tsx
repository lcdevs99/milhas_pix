"use client";
import { useRouter, usePathname } from "next/navigation";
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
  LogosContainer,
  CompanyLogo,
  CardItem2Mobile,
  InputItem,
  InputLeftIcon,
  InputText,
  InputRightImage,
  CardProduto,
  InputGroup,
  Label,
  ProdutoSelect,
  LockedInput,
  InfoCard,
  InfoContent,
  InfoTitle,
  CloseIcon,
  InfoText,
  Footer,
  ProceedButton,
  ArrowIcon,
  InputItemMobile,
  MobileProgramHeader,
  PlusIcon,
  StepCounter,
} from "./cardpasso1.styles";

const passos = [
  "Escolha o programa",
  "Oferte suas milhas",
  "Insira os dados do programa",
  "Pedido finalizado",
];

export default function TelaCompleta() {
  const pathname = usePathname();
  const passoAtual = parseInt(pathname.replace("/passo", "")) || 1;
  const router = useRouter();

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
              if (isActive) {
                imageSrc = "/Frameetapaatual.png";
              } else if (passoIndex < passoAtual) {
                imageSrc = "/Frame234.png";
              } else {
                imageSrc = "/FrameApagado.png";
              }
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

        <CardContainer>
          <CardHeader>
            <CardHeaderTitle>
              <StepNumber>01.</StepNumber>
              <StepTextMain>Escolha o programa de fidelidade</StepTextMain>
            </CardHeaderTitle>
          </CardHeader>
          <CardCompanies>
            <LogosContainer>
              <CompanyLogo src="/tudoAzul.png" alt="TudoAzul" />
              <CompanyLogo src="/smiles.png" alt="Smiles" />
              <CompanyLogo src="/latam.png" alt="LATAM Pass" />
              <CompanyLogo src="/air.png" alt="TAP Air Portugal" />
            </LogosContainer>
          </CardCompanies>
          <CardItem2Mobile>
            <InputItemMobile>
              <img
                src="/ArrowsCounterClockwise.png"
                alt="Etapa 03"
                width={20}
                height={20}
              />
              <InputText>Tudo Azul</InputText>
            </InputItemMobile>
          </CardItem2Mobile>
          <CardProduto>
            <InputGroup>
              <Label>Produto</Label>
              <ProdutoSelect defaultValue="Azul Liminar">
                <option value="Azul Liminar">Azul Liminar</option>
                <option value="LATAM Liminar">LATAM Liminar</option>
                <option value="Smiles Promo">Smiles Promo</option>
              </ProdutoSelect>
            </InputGroup>
            <InputGroup>
              <Label>CPFs Disponíveis</Label>

              <LockedInput>
                <span>limitado</span>
              </LockedInput>
            </InputGroup>
          </CardProduto>
        </CardContainer>
        <MobileProgramHeader>
          Selecione o programa <PlusIcon>+</PlusIcon>
        </MobileProgramHeader>

        <InfoCard>
          <InfoContent>
            <InfoTitle>
              Selecione o programa
              <CloseIcon />
            </InfoTitle>
            <InfoText>
              Escolha de qual programa de fidelidade você quer vender suas
              milhas. Use apenas contas em seu nome.
            </InfoText>
          </InfoContent>
        </InfoCard>
      </ContentRow>

      <Footer>
        <StepCounter>
          <span>1</span> de 4
        </StepCounter>
        <ProceedButton onClick={() => router.push("/passo2")}>
          Prosseguir <ArrowIcon>→</ArrowIcon>
        </ProceedButton>
      </Footer>
    </PageWrapper>
  );
}
