import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    
    

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const InfoContainer2 = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    display: none;
    

    @media screen and (max-width: 1300px){
        display: flex;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 90%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    margin-right: 50px;
    padding: 0 15px;
    grid-area: col1;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Column2 = styled.div`  
    margin-bottom: 15px;
    margin-left: 50px;
    padding: 0 15px;
    grid-area: col2;
    
    //@media screen and (max-width: 768px){
    //    margin-bottom: 20px;
    //    margin-left: 0;
    //}

`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;

`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1.%;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606': '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    

`;

export const ImgWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;

`;

export const Img = styled.img`
    width: 100%;
    //margin: 0 0 10px 0;
    //padding-right: 0;

`;



