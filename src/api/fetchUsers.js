/*
  Making API call to grab 50 random users and then this data is added to global state from the "Users" component. 
*/

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
