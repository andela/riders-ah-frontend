import { toast } from "react-toastify";

class Helpers {
  static setToken(token) {
    if (localStorage.token) {
      localStorage.removeItem("token");
    }
    localStorage.setItem("token", token);
  }
  static setAlertError(message) {
    toast.error(message);
  }
  static setAlertInfo(message) {
    toast.info(message);
  }
}
export default Helpers;
