import { pool } from './constants.js'

import { vi } from 'vitest'

// Make dates stable across runs
Date.now = vi.fn(() => new Date(Date.UTC(2023, 10, 20)).valueOf())
export function getRpcUrls({ port }: { port: number }) {
  return {
    port,
    rpcUrls: {
      // These rpc urls are automatically used in the transports.202
      default: {
        // Note how we append the worker id to the local rpc urls.
        http: [`http://127.0.0.1:${port}/${pool}`],
        webSocket: [`ws://127.0.0.1:${port}/${pool}`],
      },
      public: {
        // Note how we append the worker id to the local rpc urls.
        http: [`http://127.0.0.1:${port}/${pool}`],
        webSocket: [`ws://127.0.0.1:${port}/${pool}`],
      },
    },
  } as const
}

export async function wait(time: number) {
  return new Promise((res) => setTimeout(res, time))
}