// how to add library of photos in node.js?


const uploadImage = (blogId, image) => {
  const storageRef = firebase.storage().ref(`${blogId}`); // Reference to bucket
  storageRef.put(image)
    .then(() =>{
      storageRef.getDownloadURL()
        .then((url) => {
          console.log(url) // Gives you the URL to the uploaded image
          // You can update or create your blog entry in mongodb here,
          // and add the image url to the blog object.
        });
    });
}



