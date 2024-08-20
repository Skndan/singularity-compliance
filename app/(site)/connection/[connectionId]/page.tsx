"use client";

import { useEffect, useState } from "react"; 
import Guacamole from 'guacamole-common-js';
import password from "@/components/login/password";

const ConnectionPage = ({ params }: { params: { connectionId: string } }) => {
 

 
  const [token, setToken] = useState("310C62A543F2A920744FABE40B0913DFD7D791FB4CD47B834BC911A3DB57F339");
  const [guacamoleUrl, setGuacamoleUrl] = useState('');

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const response = await fetch('/api/guacamole', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setToken(data.token);
  //     } else {
  //       console.error('Failed to fetch token');
  //     }
  //   };

  //   fetchToken();
  // }, [username, password]);

  useEffect(() => {
    if (token) {
      const guacamoleHost = 'http://15.206.187.102/rdp'; // Replace with your Guacamole server URL
      const connectionId = 'MQBjAHBvc3RncmVzcWw'; // Replace with your RDP connection ID
      setGuacamoleUrl(`${guacamoleHost}/client.html?token=${token}&connection=${connectionId}`);
    }
  }, [token]);

  return (
    <div>
      {guacamoleUrl ? (
        <iframe
          src={"http://15.206.187.102/rdp/#/client/MQBjAHBvc3RncmVzcWw"}
          style={{ width: '100%', height: '600px', border: 'none' }}
          title="RDP Viewer"
        />
      ) : (
        <p>Loading RDP connection...</p>
      )}
    </div>
  );
};
 

 
export default ConnectionPage;