import { getToken } from "./authManager";

const userProfileUrl = "/api/userProfile";

export const getAllUserProfiles = () => {
  return getToken().then((token) => {
    return fetch(userProfileUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get user profiles."
        );
      }
    });
  });
};

export const getUserProfileDetails = (id) => {
  return getToken().then((token) => {
    return fetch(`${userProfileUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  });
};

export const updateUserProfile = (id, userProfile) => {
  return getToken().then((token) => {
    return fetch(`${userProfileUrl}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    });
  });
};

export const editUserProfile = (id, userProfile) => {
  return getToken().then((token) => {
    return fetch(`${userProfileUrl}=${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    });
  });
};
