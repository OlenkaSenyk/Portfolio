import TypographyH2 from "@/components/Typography/TypographyH2";
import EmailForm from "./components/EmailForm";
import ContactSection from "./components/ContactSection";

export default function Contact() {
    return (
        <div className="px-5 lg:px-10 xl:px-40 mx-auto mb-5 md:mb-0">
            <TypographyH2 text="Let's Connect" />
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10">
                <EmailForm />
                <ContactSection />
            </div>
        </div>
    );
}