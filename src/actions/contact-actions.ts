"use server";
import { sendContactEmail } from "./send-email";

// This file contains Server Actions for contact form submissions.

export async function submitInquiry(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    investorType: formData.get("investorType"),
    message: formData.get("message"),
    newsletter: formData.get("newsletter"),
  };

  try {
    await sendContactEmail(rawFormData);
    return { success: true, message: "Your inquiry has been submitted and emailed successfully!" };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Failed to send email. Please try again later." };
  }
}
