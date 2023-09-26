"use client";

import type { Data } from "@measured/puck";
import { Puck, Render } from "@measured/puck";
import { ChakraProvider } from '@chakra-ui/react'
import config from "../../configs/chakra/puck.config";

export function Client({
  path,
  data,
  isEdit,
}: {
  path: string;
  data: Data;
  isEdit: boolean;
}) {
  if (isEdit) {
    return (
      <ChakraProvider>
        <Puck
          config={config}
          data={data}
          onPublish={async (data: Data) => {
            await fetch("/api/puck", {
              method: "post",
              body: JSON.stringify({ data, path }),
            });
          }}
        />
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Render config={config} data={data} />
    </ChakraProvider>
  )
}
