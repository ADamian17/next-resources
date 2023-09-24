import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/client';

import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  const handleOnChangePassword = async (passwordData) => {
    const res = await fetch('/api/user/change-password', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(passwordData),
    });

    const data = await res.json();
  };

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={handleOnChangePassword} />
    </section>
  );
}

export default UserProfile;
