import express from 'express';
import twilio from 'twilio';

const router = express.Router();
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// Send OTP
router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  try {
    const verification = await client.verify
      .services(process.env.TWILIO_SERVICE_ID)
      .verifications.create({ to: phone, channel: 'sms' });
    res.json({ success: true, sid: verification.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { phone, code } = req.body;
  try {
    const verification = await client.verify
      .services(process.env.TWILIO_SERVICE_ID)
      .verificationChecks.create({ to: phone, code });
    res.json({ success: verification.status === 'approved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
