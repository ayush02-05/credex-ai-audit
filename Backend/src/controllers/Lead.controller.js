// const Lead = require("../model/Lead.model");
// const { sendConfirmationEmail } = require("../service/Email.service");

// const createLead = async (req, res) => {
//   try {
//     const { auditId, name, email, company, role } = req.body;

//     const lead = new Lead({
//       auditId,
//       name,
//       email,
//       company,
//       role,
//     });
//     await lead.save();
//     try {
//       await sendConfirmationEmail(email, name, auditId);
//     } catch (emailError) {
//       console.error("Email send error:", emailError);
//     }

//     res.status(201).json({
//       success: true,
//       leadId: lead._id,
//       message: "Lead saved successfully",
//     });
//   } catch (error) {
//     console.error("Error creating lead:", error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// module.exports = { createLead };

const Lead = require("../model/Lead.model");
const { sendConfirmationEmail } = require("../service/Email.service");

const createLead = async (req, res) => {
  try {
    const { auditId, name, email, company, role, teamSize, website } = req.body;

    // basic honeypot protection (optional frontend field: website)
    if (website) {
      return res.status(400).json({ success: false, message: "Bot detected" });
    }

    const lead = new Lead({
      auditId,
      name,
      email,
      company,
      role,
      teamSize,
    });

    await lead.save();

    // email sending (fail-safe)
    try {
      await sendConfirmationEmail(email, name, auditId);
    } catch (emailError) {
      console.error("Email send error:", emailError.message);
    }

    return res.status(201).json({
      success: true,
      leadId: lead._id,
      message: "Lead saved successfully",
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createLead };
