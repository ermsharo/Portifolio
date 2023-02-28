import styled from "styled-components";
import { Colors } from "./../../../styles/defaultProps";

export interface HomeBannerProps {}

const HomeBannerBoxElements = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  border: 2px solid green;
  height: 75%;
`;

const HomeBannerBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const SessionTitle = styled.div`
  font-size: 3.5rem;
  padding: 1.5rem;
`;

const SessionSubtitle = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
`;

const InfoBox = styled.div`
  border: 2px solid red;
`;

const BannerImage = styled.div`
  border: 2px solid red;
`;

function HomeBanner({}: HomeBannerProps) {
  return (
    <HomeBannerBox>
      <HomeBannerBoxElements>
        <InfoBox>
          <SessionTitle>
            <div>Hi I'm Emilio Haro</div>
            <div>Fullstack developer</div>
          </SessionTitle>
          <SessionSubtitle>
            Desenvolvedor web, com experiência em desenvolvimento em aplicações
            de mensageria, produtos de logística, internet das coisas e em
            soluções tecnológicas para o setor de jornalismo.
          </SessionSubtitle>
        </InfoBox>
        <BannerImage></BannerImage>
      </HomeBannerBoxElements>
    </HomeBannerBox>
  );
}

export default HomeBanner;
