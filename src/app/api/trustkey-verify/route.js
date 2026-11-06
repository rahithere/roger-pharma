import { verificationCodes } from "@/data/trustkey-codes.js"
import { successResponse, errorResponse } from "@/lib/apiResponse";

export async function POST(request) {
    try {
        const { uniqueKey } = await request.json();
        console.log(uniqueKey)
        // check validity of the unique key 
        if (typeof uniqueKey !== 'string' || !uniqueKey.trim()) {
            return errorResponse("Product key is required", 400)
        }

        // find the product in the list 
        const product = verificationCodes.find((item) => (item.code === uniqueKey.trim()))

        if (!product) {
            return errorResponse("Invalid product key", 404);
        }

        //return successfull product
        return successResponse("This is an authenticated Product", null, 200)


    } catch (error) {
        console.error("Failed to validate the product", error)
        return errorResponse("Failed to validate the product", 500)
    }
}