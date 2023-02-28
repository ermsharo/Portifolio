import styled from "styled-components";
import HomeLogo from "../../atoms/HomeLogo";
import { Colors } from "./../../../styles/defaultProps";

export interface HomeBannerProps {}

const HomeBannerBoxElements = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  height: 65%;
`;

const HomeBannerBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 85%;
  margin: auto;
`;

const SessionTitle = styled.div`
  font-size: 3.5rem;
  padding: 1.5rem;
`;

const SessionSubtitle = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
`;

const InfoBox = styled.div``;

const BannerImage = styled.div``;

function HomeBanner({}: HomeBannerProps) {
  return (
    <HomeBannerBox>
      <HomeBannerBoxElements>
        <InfoBox>
          <SessionTitle>
            <div>Hi I'm Emilio Haro 👨‍💻</div>
            <div>Fullstack developer</div>
          </SessionTitle>
          <SessionSubtitle>
            Desenvolvedor web, com experiência em desenvolvimento em aplicações
            de mensageria, produtos de logística, internet das coisas e em
            soluções tecnológicas para o setor de jornalismo.
          </SessionSubtitle>
        </InfoBox>
        <BannerImage><HomeLogo/></BannerImage>
      </HomeBannerBoxElements>
    </HomeBannerBox>
  );
}

export default HomeBanner;
