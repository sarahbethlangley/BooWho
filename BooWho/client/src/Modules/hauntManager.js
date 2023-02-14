import { getToken } from "./authManager";

const hauntUrl = "/api/haunt";

export const getAllHaunts = () => {
  return getToken().then((token) => {
    return fetch(hauntUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get Haunts."
        );
      }
    });
  });
};

export const getHauntDetails = (id) => {
  return getToken().then((token) => {
    return fetch(`${hauntUrl}/review/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get haunt details."
        );
      }
    });
  });
};

export const addHaunt = (haunt) => {
  return getToken().then((token) => {
    return fetch(hauntUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(haunt),
    });
  });
};

export const getHauntsFromUser = (firebaseId) => {
  return getToken().then((token) => {
    return fetch(`${hauntUrl}/myHaunts/${firebaseId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new haunt."
        );
      }
    });
  });
};

export const deleteHaunt = (id) => {
  return getToken().then((token) => {
    return fetch(`${hauntUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
};

export const editHaunt = (id, haunt) => {
  return getToken().then((token) => {
    return fetch(`${hauntUrl}/edit/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(haunt),
    });
  });
};
