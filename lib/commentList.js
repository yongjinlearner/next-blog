import dbConnect from '@/lib/database';

export default async function showComments() {

    fetch('/api/comments')
        .then(res => res.json())
        .then(data => {
            console.log('Fetched comments:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
            return [];
        });
}