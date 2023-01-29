export const createJsonEdgeResponse = async (
  payload: Record<string, unknown> | string | null | undefined,
  status = 200
) => {
  if (typeof payload === 'string') {
    payload = { message: payload };
  }

  const response = new Response(payload && JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });

  return response;
};

// TODO: add middlewares
// withMethod
// withZodValidation
// withHandleError
// Example:
// export const withEdgeMethods = (methods: string[], handler: EdgeHandler) => {
//   return async (req: NextRequest) => {
//     if (!methods.includes(req.method)) {
//       throw new APIError(405, 'Method not allowed');
//     }

//     return handler(req);
//   };
// };
