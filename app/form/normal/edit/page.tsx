"use client";

import type { Data } from "@measured/puck";
import { Puck, Render } from "@measured/puck";
import { ChakraProvider } from '@chakra-ui/react'
import config from "@/configs/chakra/form.config";
import data from '../test-data'

function Edit() {
  return (
    <ChakraProvider>
      <Puck
        config={config}
        data={data}
        onPublish={async (data: Data) => {
          // await fetch("/api/puck", {
          //   method: "post",
          //   body: JSON.stringify({ data, path }),
          // });
        }}
      />
    </ChakraProvider>
  );
}

export default Edit