import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { getHtml } from "../html/getHtml";


export async function helloWorld(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
    return {
        headers: {
          'Content-Type': 'text/html'
        },
        body: getHtml(),
    };
};

app.http('helloWorld', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: helloWorld
});
