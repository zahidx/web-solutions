import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, doc, deleteDoc } from "firebase/firestore";

// Your Firebase config (make sure to replace with your actual config)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Firestore Functions

/**
 * Send project details form data to Firestore
 * @param {Object} formData - The data submitted by the user.
 */
export async function sendMessage(formData) {
  try {
    // Send structured form data to Firestore
    await addDoc(collection(db, "projectDetails"), {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      countryCode: formData.countryCode,
      projectDetails: formData.projectDetails,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Error adding document:", error);
    throw new Error("Error submitting the project details.");
  }
}

/**
 * Get all project details from Firestore and listen for real-time updates
 * @param {Function} setMessages - The state setter function to update messages.
 */
export function getMessages(setMessages) {
  // Create a query for retrieving documents ordered by timestamp, limiting to 20 most recent documents
  const q = query(collection(db, "projectDetails"), orderBy("timestamp", "desc"), limit(20));

  // Listen for changes to the projectDetails collection in real time
  onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() }); // Include doc.id as the project ID
    });
    setMessages(messages); // Update the state with fetched messages
  });
}

/**
 * Delete a project message from Firestore
 * @param {string} projectId - The ID of the project to be deleted.
 */
export async function deleteMessage(projectId) {
  try {
    const projectRef = doc(db, "projectDetails", projectId); // Reference to the specific project
    await deleteDoc(projectRef); // Delete the document from Firestore
    console.log("Project deleted successfully");
  } catch (error) {
    console.error("Error deleting project:", error);
  }
}
