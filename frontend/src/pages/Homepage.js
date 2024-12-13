import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/homepage.jpg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0} style={{display: 'flex', justifyContent: 'space-evenly'}}> 
                <Grid item xs={12} md={6} style= {{display: 'flex', justifyContent: 'center'}}>
                    <img src={Students} alt="students" style={{width: '100%', height: '100%', objectFit: 'cover' }} />
                </Grid>
                <Grid item xs={12} md={6} style= {{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                    <StyledPaper elevation={3}>
                        <StyledTitle> 
                            Classroom  Management System
                        </StyledTitle>
                        <StyledText>
                            Classroom management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 0, mb: 0, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                        </StyledBox>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>






    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const StyledPaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  height: 85vh;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 20px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
