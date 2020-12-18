import http from "./http";

const apiUserLogin = async (data) => {
  try {
    const response = await http.post("user/login", data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const apiUserRegister = async (data) => {
  try {
    const response = await http.post("user/register", data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const apiDeleteUser = async (ownerId) => {
  try {
    const res = await http.delete("user/" + ownerId);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const apiUserpdateAccount = async (userId) => {
  try {
    const res = await http.put("user/" + userId);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const apiGetAllUser = async () => {
  try {
    const res = await http.get("/");
    return res.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

const getUserById = async (userId) => {
  try {
    const res = await http.get("/" + userId);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export {
  apiUserLogin,
  apiUserRegister,
  apiUserpdateAccount,
  apiDeleteUser,
  apiGetAllUser,
  getUserById,
};
