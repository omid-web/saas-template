import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Zap, Shield, BarChart, Star, ArrowRight } from 'lucide-react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
const Section = ({ children, id, className = '' }: { children: React.ReactNode; id: string; className?: string }) => (
  <section id={id} className={`py-24 lg:py-32 ${className}`}>
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" }
};
const HeroSection = () => (
  <section className="relative overflow-hidden bg-secondary">
    <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom mask-gradient" />
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="min-h-[80vh] flex items-center justify-center text-center py-24 lg:py-32">
        <motion.div variants={fadeIn} initial="initial" animate="animate" className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground">
            The Future of SaaS is Here.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Zenith provides the tools you need to build, manage, and scale your business with unparalleled efficiency and power.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="text-lg h-14 px-8 font-semibold shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 font-semibold hover:-translate-y-1 transition-all duration-300">
              Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
const features = [
  { icon: Zap, title: "Blazing Fast", description: "Experience unparalleled speed and responsiveness." },
  { icon: Shield, title: "Secure by Design", description: "Your data is protected with enterprise-grade security." },
  { icon: BarChart, title: "Advanced Analytics", description: "Gain deep insights with our powerful analytics dashboard." },
];
const FeaturesSection = () => (
  <Section id="features">
    <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display">Everything You Need, Nothing You Don't</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Zenith is packed with powerful features to help you succeed.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div key={i} custom={i} variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}>
            <Card className="text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-lg w-fit">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4 text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);
const pricingPlans = [
  { name: "Starter", price: "$29", features: ["10 Projects", "5GB Storage", "Basic Analytics", "Community Support"], popular: false },
  { name: "Pro", price: "$99", features: ["Unlimited Projects", "50GB Storage", "Advanced Analytics", "Priority Support", "API Access"], popular: true },
  { name: "Enterprise", price: "Contact Us", features: ["Everything in Pro", "Unlimited Storage", "Dedicated Infrastructure", "Premium Support", "Custom Integrations"], popular: false },
];
const PricingSection = () => (
  <Section id="pricing" className="bg-secondary">
    <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display">Transparent Pricing for Teams of All Sizes</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that's right for you. No hidden fees, ever.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, i) => (
          <motion.div key={i} custom={i} variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}>
            <Card className={`flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
              {plan.popular && <div className="bg-primary text-primary-foreground text-center py-1.5 font-semibold rounded-t-lg">Most Popular</div>}
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">{plan.name}</CardTitle>
                <p className="text-4xl font-bold font-display mt-4">{plan.price}<span className="text-lg font-medium text-muted-foreground">/mo</span></p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full text-lg font-semibold" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);
const testimonials = [
  { name: "Sarah L.", role: "CEO, Innovate Inc.", text: "Zenith has revolutionized our workflow. We're more productive and collaborative than ever before. It's a game-changer.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { name: "Mike R.", role: "CTO, Tech Solutions", text: "The performance and reliability are outstanding. Our team loves the intuitive interface and powerful features.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d" },
  { name: "Jessica P.", role: "Founder, Creative Co.", text: "As a startup, Zenith provided the scalability we needed at a price we could afford. Highly recommended!", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d" },
];
const TestimonialsSection = () => (
  <Section id="testimonials">
    <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display">Loved by Teams Worldwide</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Don't just take our word for it. Here's what our customers are saying.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div key={i} custom={i} variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}>
            <Card className="h-full flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-muted-foreground">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);
const faqs = [
  { q: "Is there a free trial available?", a: "Yes, we offer a 14-day free trial for our Pro plan. No credit card required. You can sign up and start building in minutes." },
  { q: "Can I change my plan later?", a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account dashboard. Changes will be prorated." },
  { q: "What is your refund policy?", a: "We offer a 30-day money-back guarantee. If you're not satisfied with Zenith for any reason, just contact us within 30 days for a full refund." },
  { q: "Do you offer support?", a: "Yes, we offer community support for all users. Our Pro and Enterprise plans include priority email and chat support for faster assistance." },
];
const FaqSection = () => (
  <Section id="faq" className="bg-secondary">
    <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions? We've got answers.
        </p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-lg font-semibold text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  </Section>
);
export function HomePage() {
  return (
    <LazyMotion features={domAnimation}>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
    </LazyMotion>
  );
}