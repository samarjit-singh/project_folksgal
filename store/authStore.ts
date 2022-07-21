// we are using zustand in this app to keep the users
// logged in after after they log into our app
// through google , similar to cookies
import create from "zustand";
import { persist } from "zustand/middleware";
// axios are used to make http requests
import axios from "axios";

import { BASE_URL } from "../utils";

// creating two properties userProfile and addUser
const authStore = (set: any) => ({
  userProfile: null,
  allUsers: [],

  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
  fetchAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/api/users`);

    set({ allUsers: response.data });
  },
});

const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
