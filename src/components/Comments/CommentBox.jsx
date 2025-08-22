import React from "react";

function CommentBox({ data }) {
    return data.map((comment) => (
        <div key={comment.id} className="p-2 m-2">
            <div className="flex">
                <img className="w-8 h-8 rounded-full mr-2" src={comment.avatar} />
                <h3 className="font-bold">{comment.username} </h3>
            </div>
            <p>{comment.comment}</p>
            {comment.replies && comment.replies.length > 0 && (
                <div className="ml-4 pl-2 flex">
                    <span className="text-gray-400 mr-2 flex items-start">&#8594;</span>
                    <div className="w-full">
                        <CommentBox data={comment.replies} />
                    </div>
                </div>
            )}
        </div>
    ));
}

export default CommentBox;
