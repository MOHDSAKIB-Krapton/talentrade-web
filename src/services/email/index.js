import emailjs from "emailjs-com";

export default class EmailServices {
  static async sendEmail(name, email, message, company, phone) {
    console.log(name, email, message, company, phone);
    const templatePrams = {
      to_name: "Talentrade Team",
      from_name: name,
      from_email: email,
      message: message,
      phone: phone ? phone : "No phone number provided",
      company: company ? company : "Company not specified",
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templatePrams,
        import.meta.env.VITE_USER_ID
      );

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
