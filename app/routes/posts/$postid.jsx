import { Link, useLoaderData } from "@remix-run/react";
import { db } from "../../services/db";

export const loader = async ({params}) => {
    const post = await db.post.findUnique({
        where: {
            id: params.postid
        }
    })
    return {
        post
    }
}
export default function SinglePost() {

    const { post } = useLoaderData();
    return (
        <>
        
        <h2>{post.title} </h2>
        <h4>{post.description}</h4>
        <p>{post.body}</p>
        <Link to="/">Home</Link>
        </>
        
    );
}