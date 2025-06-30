"use server";

// This file contains Server Actions for contact form submissions.

export async function submitInquiry(formData: FormData) {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));

  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    investorType: formData.get("investorType"),
    message: formData.get("message"),
    newsletter: formData.get("newsletter"),
  };
  console.log("Inquiry Submitted:", rawFormData);
  // Here you would typically:
  // 1. Validate data
  // 2. Save to Firestore or other database
  // 3. Trigger email notification (e.g., using a Cloud Function or a service like Resend/SendGrid)
  
  // For now, we'll return a success message.
  // In a real app, you'd handle potential errors and return appropriate responses.
  return { success: true, message: "Your inquiry has been submitted successfully!" };
}
