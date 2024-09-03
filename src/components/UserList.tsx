import React, { useState } from 'react';

const UserPosts: React.FC = () => {
  const [userId, setUserId] = useState<number | ''>('');
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    if (userId === '') return; // Do nothing if userId is empty

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter user ID"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />
      <button onClick={fetchPosts}>Fetch Posts</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPosts;
