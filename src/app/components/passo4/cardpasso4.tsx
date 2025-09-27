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
  CardSection,
  SuccessWrapper,
  CelebrationIcon,
  SuccessTitle,
  SuccessText,
  SuccessButton,
  FooterMobile,
  ArrowIcon,
  ProceedButtonMobile,
  BackIcon,
} from "./cardpasso4.styles";

const passos = [
  "Escolha o programa",
  "Oferte suas milhas",
  "Insira os dados do programa",
  "Pedido finalizado",
];

export default function CardPasso4() {
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
            <SuccessWrapper>
              <CelebrationIcon
                src="/image 40.png"
                alt="Parabéns"
                width={48}
                height={48}
              />

              <SuccessTitle>Ordem de venda criada com sucesso!</SuccessTitle>

              <SuccessText>
                Agora é só aguardar — assim que suas milhas forem vendidas, o
                valor será transferido direto para sua conta via Pix.
              </SuccessText>

              <SuccessButton>Ver minhas ofertas →</SuccessButton>
            </SuccessWrapper>
          </CardContainer>
        </CardSection>
        <FooterMobile>
          <BackIcon>Sair</BackIcon>

          <ProceedButtonMobile onClick={() => router.push("/passo4")}>
            Ver minhas Ofertas <ArrowIcon>→</ArrowIcon>
          </ProceedButtonMobile>
        </FooterMobile>
      </ContentRow>
    </PageWrapper>
  );
}
