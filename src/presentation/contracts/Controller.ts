import { HttpResponse } from "./Http";

export interface Controller {
  handle: (data?: any) => Promise<any>;
}

export interface HttpController extends Controller {
  handle: (data?: any) => Promise<HttpResponse>;
}
