type Meta = {
  code: string;
  message: string;
};

type Errors = Meta;

export type HttpResponse<T = any> = {
  statusCode: number;
  meta?: Meta;
  data?: T;
  error?: Errors;
};

export const internalServerError = (): HttpResponse => ({
  statusCode: 500,
  error: {
    code: "500",
    message: "Internal Server Error",
  },
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
  meta: {
    code: "200",
    message: "Ok",
  },
});

export const notFound = (message: string): HttpResponse => ({
  statusCode: 404,
  error: {
    code: "404",
    message,
  },
});

export const noContent = (message: string): HttpResponse => ({
  statusCode: 204,
  error: {
    code: "204",
    message,
  },
});

export const forbidden = (): HttpResponse => ({
  statusCode: 403,
  error: {
    code: "403",
    message: "Forbidden",
  },
});
