import React from 'react'
import CommentBox from './CommentBox'
import commentsData from '../../Utilities/commentsData'

function Comments() {
    return (
        <div><CommentBox data={commentsData} /></div>
    )
}

export default Comments