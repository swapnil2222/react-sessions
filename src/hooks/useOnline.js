import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => {
    console.log("online");
    setIsOnline(true);
  };
  const handleOffline = () => {
    console.log("offline");
    setIsOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  });
  return () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
  };
  return isOnline;
};
export default useOnline;
