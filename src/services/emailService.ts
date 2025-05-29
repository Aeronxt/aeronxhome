
interface EmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  message: string;
  projectType?: string;
}

export const sendContactEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    const API_KEY = "re_PTgHEabZ_tuhDGworfF9YoVxeh8bvoLGz";
    
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Update this with your verified domain
        to: "contact@aeronx.com", // Replace with your recipient email
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          ${data.projectType ? `<p><strong>Project Type:</strong> ${data.projectType}</p>` : ''}
          ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ''}
          ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send email");
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send your message. Please try again.",
    };
  }
};
