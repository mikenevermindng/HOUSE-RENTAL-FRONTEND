import http from "./http";

const apiOwnerLogin = async (data) => {
  try {
    const response = await http.post("owner/login", data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const apiOwnerRegister = async (data) => {
  try {
    const response = await http.post("owner/register", data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const apiDeleteOwner = async (ownerId) => {
  try {
    const res = await http.delete("owner/" + ownerId);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const apiOwnerpdateAccount = async (ownerId) => {
  try {
    const res = await http.put("owner/" + ownerId);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const apiGetAllOwner = async () => {
  try {
    const res = await http.get("/");
    return res.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

const getOwnerById = async (ownerId) => {
  try {
    const res = await http.get("/" + ownerId);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export {
  apiOwnerLogin,
  apiOwnerRegister,
  apiDeleteOwner,
  apiOwnerpdateAccount,
  apiGetAllOwner,
  getOwnerById,
};
