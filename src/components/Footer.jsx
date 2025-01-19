import styled from "styled-components";
import logo from './logo/CPU_logo_full.jpeg'
import { GrInstagram } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

const Container = styled.div`
    width: 100%;
    height: 250px;
    background: #ab1a65;
    overflow-x: hidden;
    box-sizing: border-box;
    overflow-y: hidden;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    padding: 20px 80px 20px 80px;
    box-sizing: border-box;
    @media screen and (max-width : 768px) {
        padding: 20px 30px 20px 30px;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    background: none;
`;

const Logo = styled.img`
    height: 35px;
    width: 35px;
    margin-right: 10px;
`;

const Name = styled.p`
    font-size: 12px;
    margin: 0;
    font-weight: 600;
    color: white;
    white-space: nowrap;
    background: transparent;
`;

const Icons = styled.div`
    display: flex;
    gap: 20px; 
    background: transparent;
    box-sizing: border-box;

`;

const Insta = styled(GrInstagram)`
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: white;
    background: transparent;

`;

const Github = styled(BsGithub)`
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: white;
    background: transparent;

`;

const StyledLink = styled(Link)`
    background: transparent;

`;

const Main = styled.div`
    margin: 0;
    padding: 0;
    background: none;
    padding: 0 80px 30px 80px;
    font-size: 12px;
    color: white;
    @media screen and (max-width : 768px) {
        padding: 0px 30px 20px 30px;
    }
`
const StyledP = styled.p`
    background: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
`
const Line = styled.div`
    border-bottom: 1px solid white;
    margin-top: 10px;
`

const Copyright = styled.p`
    background: transparent;
    font: 400 11px 'arial';
    margin: 10px 0;
    @media screen and (max-width : 768px) {
        margin: 5px 0 0 0;
        text-align: center;
    }
`
const Copy = styled(FaRegCopyright)`
    color: white;
    background: transparent;
    font-size: 11px;
    vertical-align: middle;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    background: transparent;
    margin: 0;
    @media screen and (max-width : 768px) {
        flex-direction: column;
    }
`
const Footer = () => {
    return (
        <Container>
            <Top>
                <LogoWrapper>
                    <Logo src={logo} alt="cpu_logo_full" />
                    <Name>전북대학교<br />중앙 학술 컴퓨터 동아리 CPU</Name>
                </LogoWrapper>
                <Icons>
                    <StyledLink to="https://www.instagram.com/cpu_jbnu/"><Insta /></StyledLink>
                    <StyledLink to="https://github.com/JBNU-CPU"><Github /></StyledLink>
                </Icons>
            </Top>
            <Main>
                <StyledP style={{fontWeight:'700', paddingBottom:'5px'}}>CONTACT</StyledP>
                <StyledP>회장 : 이다영 000-000-000</StyledP>
                <StyledP style={{paddingBottom:'10px'}}>부회장 : 임정민 000-000-000</StyledP>
                <StyledP style={{paddingBottom:'10px'}}>jbnucpu@gmail.com</StyledP>
                <StyledP>전북 전주시 덕진동 1가 663</StyledP>
                <StyledP>전북대학교 전주캠퍼스 제2학생회관 403호</StyledP>
                <Line/>
                <Bottom>
                    <Copyright>Copyright <Copy/> CPU All Rights Reserved.</Copyright>
                    <Copyright>Created by 김동준, 백서영, 박도현, 안현</Copyright>
                </Bottom>
            </Main>
        </Container>
    );
};

export default Footer;
