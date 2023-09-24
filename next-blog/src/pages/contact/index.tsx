import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return <>
    <Head>
      <title>Adonis Blog | Contact me</title>

      <meta name="description" content="please send me your info" />
    </Head>
    <ContactForm />
  </>
}

export default ContactPage;