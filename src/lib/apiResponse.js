import { NextResponse } from "next/server";

export const successResponse = (message, data = null, status = 200) => {
    return NextResponse.json(
        {
            success: true,
            message,
            data,
        },
        { status }
    );
};

export const errorResponse = (message, status = 400) => {
    return NextResponse.json(
        {
            success: false,
            message,
        },
        { status }
    );
};