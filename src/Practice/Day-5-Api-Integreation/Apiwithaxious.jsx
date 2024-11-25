import React from "react";

const Apiwithaxious = () => {
  return (
    <div>
      {/* 
      GET Request
      
      axios.get('https://jsonplaceholder.typicode.com/posts') 
        .then(response =>console.log(response.data)) // Logs the fetched data. 
        .catch(error =>console.error('Error:', error)); // Handles errors. */
      }

      {/* 
      POST Request

      axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'New Post',
      body: 'Post content'
      })
      .then(response => console.log(response.data)) // Logs the server's response.
      .catch(error => console.error('Error:', error));
      */}

      {/* 
      PUT Request

      axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Updated Title',
      body: 'Updated Content'
      })
      .then(response => console.log(response.data)) // Logs the updated data.
      .catch(error => console.error('Error:', error));
      */}


      {/* 
      DELETE Request

      axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log('Deleted:', response.status)) // Checks if deletion was successful.
        .catch(error => console.error('Error:', error));
      */}

      
    </div>
  );
};

export default Apiwithaxious;
