import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <div>
            <main>
                {posts.map((post)=>{

                    return (
                        <Article
                        key={post.id}
                        title={post.title}
                        date={post.date}
                        preview={post.preview}
                        minutes={post.minutes}
                    />
                    )
                })}
            </main>
        </div>
    )
}
export default ArticleList;