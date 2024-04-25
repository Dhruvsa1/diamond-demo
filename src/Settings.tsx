import React from "react";
import { NavLink } from "react-router-dom";

// This component is the settings page and will consist of several different components
// It will be a vertical list that contains these following NavLinks: Scans, Edit Profile, Change Password, and Delete Account

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <NavLink to="/settings/scans">Scans</NavLink>
      <NavLink to="/settings/edit-profile">Edit Profile</NavLink>
      <NavLink to="/settings/change-password">Change Password</NavLink>
      <NavLink to="/settings/delete-account">Delete Account</NavLink>
    </div>
  );
};

// This is the component for the scans section
// This will be a section with another vertical list with a back button in the top left corner
// There will be several items in the vertical list with a used/in stock fraction
// These items will not be clickable instead they will be displayed next to each item in the list on the far right side as a way
// for the user to know how much of that item is in stock and how much has been used

export const Scans = () => {
  return (
    <div>
      <h1>Scans</h1>
      <NavLink to="/settings">Back</NavLink>
      <div>
        <p>Item 1: 5/10</p>
        <p>Item 2: 3/5</p>
        <p>Item 3: 2/3</p>
      </div>
    </div>
  );
};


// This will export the Settings component
export default Settings;
