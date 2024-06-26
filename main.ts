import { serve } from "https://deno.land/std@0.116.0/http/server.ts"
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts"

const serveFiles = (req: Request) => staticFiles ('dsm2_a2_test_Amanda') ({ 
    request: req, 
    respondWith: (r: Response) => r 
})

serve (req => serveFiles (req), { addr: ':80' })

console.log (`Listening on http://localhost:80/`)
