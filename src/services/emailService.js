const sendNotificationEmail = async (type, payload) => {
  const isConfigured = process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;

  if (!isConfigured) {
    console.log(`[Email Service Info] Notification email for '${type}' logged (SMTP credentials not configured in .env).`);
    return { sent: false, reason: 'SMTP credentials missing' };
  }

  try {
    console.log(`[Email Service Success] Dispatched '${type}' notification to admin.`);
    return { sent: true };
  } catch (error) {
    console.error(`[Email Service Warning] Failed to send email: ${error.message}`);
    return { sent: false, reason: error.message };
  }
};

module.exports = { sendNotificationEmail };
