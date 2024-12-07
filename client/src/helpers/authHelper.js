import { initiateSocketConnection } from "./socketHelper";

/**
 * Checks if the user is logged in by retrieving the user data from localStorage.
 * @returns {object|null} The parsed user object if logged in, or null if not.
 */
const isLoggedIn = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return null;
  }
};

/**
 * Logs in the user by saving their data to localStorage and initiating socket connection.
 * @param {object} user - The user data to be stored.
 */
const loginUser = (user) => {
  try {
    if (user && typeof user === "object") {
      localStorage.setItem("user", JSON.stringify(user));
      initiateSocketConnection();
    } else {
      throw new Error("Invalid user data provided to loginUser");
    }
  } catch (error) {
    console.error("Error logging in user:", error);
  }
};

/**
 * Logs out the user by removing their data from localStorage and initiating socket connection.
 */
const logoutUser = () => {
  try {
    localStorage.removeItem("user");
    initiateSocketConnection();
  } catch (error) {
    console.error("Error logging out user:", error);
  }
};

export { loginUser, isLoggedIn, logoutUser };
