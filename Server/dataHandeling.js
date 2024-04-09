// fetch('Public/data.json') 
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     const commentsContainer = document.getElementById('comments');
//     data.forEach(item => {
//       const commentDiv = document.createElement('div');
//       commentDiv.innerHTML = `
//         <p>Comment: ${item.comment}</p>
//         <hr>
//       `;
//       commentsContainer.appendChild(commentDiv);
//     });
//   })
//   .catch(error => console.error('Error fetching or parsing JSON:', error));

