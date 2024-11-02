import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Create promises
  const photoUpload = uploadPhoto();
  const userCreation = createUser();

  // Handle both promises together using Promise.all
  return Promise.all([photoUpload, userCreation])
    .then((results) => {
      // Destructure results
      const [photoResult, userResult] = results;

      // Log the required information
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      // Handle errors
      console.error('Signup system offline');
    });
}
