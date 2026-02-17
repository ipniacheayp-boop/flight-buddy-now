import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What does this service do?",
    a: "We provide independent travel assistance to help you rebook flights, find alternatives, and navigate disruptions like delays and cancellations — 24 hours a day, 7 days a week.",
  },
  {
    q: "Is this an official airline service?",
    a: "No. We are an independent travel assistance provider. We are not affiliated with any airline or official booking platform. We work on your behalf to find the best solutions.",
  },
  {
    q: "How fast can you rebook my flight?",
    a: "Our experienced agents typically find alternative flights within minutes. Depending on availability, we can have you rebooked and confirmed in under 30 minutes.",
  },
  {
    q: "What if my flight is cancelled last minute?",
    a: "Contact us immediately via phone or chat. We specialize in last-minute rebooking and will work to get you on the next available flight to your destination.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach us by phone or live chat using the contact buttons on this page. We're available 24/7 and our average response time is under 2 minutes.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
