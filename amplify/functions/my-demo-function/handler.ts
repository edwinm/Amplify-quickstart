import type {
    APIGatewayEventRequestContextV2,
    APIGatewayProxyEventV2WithRequestContext,
    APIGatewayProxyHandlerV2
} from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2WithRequestContext<APIGatewayEventRequestContextV2>) => {
    console.log("event", event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify("Hello from myFunction!"),
    };
};