import { addPosts, getPosts } from "@/libs/data";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const posts = getPosts();
        return NextResponse.json({ message: "OK", posts }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }.error, {
            status: 500,
        });
    }
};

export const POST = async (req: Request) => {
    const { title, desc } = await req.json();
    try {
        const post = { title, desc, date: new Date().toISOString(), id: Date.now().toString() };
        addPosts(post);
        return NextResponse.json({ message: "OK", post }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }.error, {
            status: 500,
        });
    }
};