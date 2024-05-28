import { useState } from 'react';
import { logout as logoutHandler } from '../utils/logout';

function getUserDetails() {
  try {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
      return JSON.parse(userDetails);
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
}

export default function useUserDetails() {
  const [userDetails, userDetailsSet] = useState(getUserDetails());

  function logout() {
    try {
      userDetailsSet(null);
      logoutHandler();
      return;
    } catch (error) {
      console.log(error.message);
    }
  }

  return {
    isLogged: Boolean(userDetails),
    username: userDetails?.username ? userDetails.username : 'Guest',
    logout,
  };
}
