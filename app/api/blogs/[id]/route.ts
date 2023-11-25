import { getById, removePosts, updatePosts } from "@/libs/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
	try {
		const id = req.url.split("blogs/")[1];
		const post = getById(id);
		if (post) {
			return NextResponse.json({ message: "OK", post }, { status: 200 });
		} else {
			return NextResponse.json({ message: "Post not found" }, { status: 404 });
		}
	} catch (error) {
		return NextResponse.json({ message: "Error", error }.error, {
			status: 500,
		});
	}
};

export const PUT = async (req: Request) => {
	const { title, desc } = await req.json();
	try {
		const id = req.url.split("blogs/")[1];
		updatePosts(id, title, desc);
		return NextResponse.json({ message: "OK" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }.error, {
			status: 500,
		});
	}
};

export const DELETE = async (req: Request) => {
	try {
		const id = req.url.split("blogs/")[1];
		removePosts(id);
		return NextResponse.json({ message: "OK" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }.error, {
			status: 500,
		});
	}
};
