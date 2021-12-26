import axios from "axios";

async function getUserList() {
  try {
    const res = await axios.get(`https://randomuser.me/api/?results=50`);
    return res.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default getUserList;
