import { getToken } from "./authManager";

const houseUrl = "/api/house";

export const getAllHouses = () => {
  return getToken().then((token) => {
    return fetch(houseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get houses."
        );
      }
    });
  });
};

export const getHouseById = (id) => {
  return getToken().then((token) => {
    return fetch(`${houseUrl}/detail/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return res.json();
    });
  });
};

export const addHouse = (house) => {
  return getToken().then((token) => {
    return fetch(houseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(house),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new house."
        );
      }
    });
  });
};

export const getHouseFromUser = (firebaseId) => {
  return getToken().then((token) => {
    return fetch(`${houseUrl}/myHouse/${firebaseId}`, {
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

export const deleteHouse = (id) => {
  return getToken().then((token) => {
    return fetch(`${houseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
};

export const editHouse = (id, house) => {
  return getToken().then((token) => {
    return fetch(`${houseUrl}/edit/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(house),
    });
  });
};
