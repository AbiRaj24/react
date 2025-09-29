import { useEffect, useState } from "react";


const useCheckOnlineStatus=()=>{

const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const goOffline = () => setOnlineStatus(false);
    const goOnline = () => setOnlineStatus(true);

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);

    // 🔑 clean up when component unmounts
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);
 return onlineStatus;
}

export default useCheckOnlineStatus;