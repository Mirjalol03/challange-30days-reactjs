import React from 'react'
import { Context } from '../../context/posts/posts'

const UsePosts = (setterOnly = false) => {
    const { posts, setPosts } = React.useContext(Context)
    return setterOnly ? [setPosts] : [posts, setPosts]
}

export default UsePosts
