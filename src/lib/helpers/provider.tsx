"use client";

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Modal from "react-modal";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());
  Modal.setAppElement("body");
  useEffect(() => {
    require("./facebook-plugin.js");
  }, []);
  return (
    <QueryClientProvider client={client}>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      {children}{" "}
    </QueryClientProvider>
  );
}

export default Providers;
