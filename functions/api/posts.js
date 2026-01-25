import posts from './post/data'

export async function onRequestGet({env}){
    const result = await env.D1_DB.prepare('SELECT * FROM USER').all();
    console.log(result.results);
    return Response.json(posts)
}