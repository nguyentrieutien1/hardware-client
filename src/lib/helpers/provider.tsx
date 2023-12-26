"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Modal from 'react-modal';




function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());
  Modal.setAppElement("body")

  return <QueryClientProvider client={client}>{children} </QueryClientProvider>;
}

export default Providers;
