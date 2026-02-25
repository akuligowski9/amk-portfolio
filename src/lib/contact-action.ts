"use server";

export type ContactState = {
  success: boolean;
  error?: string;
};

export async function sendMessage(
  _prev: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "errorEmail" };
  }

  if (!message || message.trim().length === 0) {
    return { success: false, error: "errorMessage" };
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "alekuligowski@gmail.com",
      replyTo: email,
      subject: `Portfolio contact from ${email}`,
      text: message,
    });

    return { success: true };
  } catch {
    return { success: false, error: "errorGeneric" };
  }
}
