import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from '../firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';


const defaultTheme = createTheme();

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newFirstName = data.get('firstName');
    const newLastName = data.get('lastName');
    const newUserName = data.get('userName');
    const newProfilePicture = data.get('profilePicture');
    
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
        const uid = user.uid;
        const userToUpdate = doc(db, "users", uid);


        getDoc(userToUpdate).then((doc) => {
            setFirstName(doc.data().firstName);
            setLastName(doc.data().lastName);
            setUserName(doc.data().userName);
            setProfilePicture(doc.data().profilePicture);
          })

        updateDoc(userToUpdate, {
            firstName : (newFirstName == "") ? firstName : newFirstName,
            lastName : (newLastName == "") ? lastName : newLastName,
            userName : (newUserName == "") ? userName : newUserName,
            profilePicture : (newProfilePicture == "") ? profilePicture : newProfilePicture,
        }).catch((error) => {
            console.log(error);
        })
        } 
    });
    window.alert("Profile Change successful!");
    navigate("/profilePage");

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp"/>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="userName"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="profilePicture"
                  label="Profile Picture (enter as a URL)"
                  name="profilePicture"
                  autoComplete="profilePicture"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#00acee" }}
            >
              Edit Profile
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => navigate("/profilePage")} href="#" variant="body2">
                  Return to profile
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}