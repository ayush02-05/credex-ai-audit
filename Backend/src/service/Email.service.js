// const axios = require("axios");

// async function sendConfirmationEmail(email, name, auditId) {
//   const resultUrl = `${process.env.FRONTEND_URL}/results/${auditId}`;
//   const emailContent = `
// Hi ${name},

// Thanks for using the AI Spend Audit tool! Your audit results are ready at:

// ${resultUrl}

// We found potential savings opportunities for your team's AI tool spending. Review your personalized recommendations and let us know if you'd like to discuss optimization strategies.

// Best regards,
// Credex Team
//   `;
//   if (!process.env.RESEND_API_KEY) {
//     throw new Error("Missing RESEND_API_KEY");
//   }
//   const response = await axios.post(
//     "https://api.resend.com/emails",
//     {
//       from: "audit@credex.example.com",
//       to: email,
//       subject: "Your AI Spend Audit Results",
//       text: emailContent,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
//       },
//     },
//   );

//   return response.data;
// }

// module.exports = { sendConfirmationEmail };

const axios = require("axios");

async function sendConfirmationEmail(email, name, auditId) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resultUrl = `${process.env.FRONTEND_URL}/result/${auditId}`;

  const emailContent = `
Hi ${name},

Thanks for using the AI Spend Audit tool!

Your audit results are ready:
${resultUrl}

We found optimization opportunities in your AI tool spending.
Our team at Credex will reach out if high savings are detected.

Best regards,
Credex Team
  `;

  const response = await axios.post(
    "https://api.resend.com/emails",
    {
      from: "Credex <onboarding@resend.dev>",
      to: email,
      subject: "Your AI Spend Audit Results",
      text: emailContent,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
    },
  );

  return response.data;
}

// const { Resend } = require("resend");

// async function sendConfirmationEmail(email, name, auditId) {
//   if (!process.env.RESEND_API_KEY) {
//     throw new Error("Missing RESEND_API_KEY");
//   }

//   const resend = new Resend(process.env.RESEND_API_KEY);

//   const emailContent = `
// Hi ${name},

// Thanks for using the AI Spend Audit tool!

// Your audit results are ready:
// ${resultUrl}

// We found optimization opportunities in your AI tool spending.
// Our team at Credex will reach out if high savings are detected.

// Best regards,
// Credex Team
//   `;

//   const response = await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "Your AI Spend Audit Results",
//     html: emailContent,
//   });

//   return response.data;
// }

module.exports = { sendConfirmationEmail };
