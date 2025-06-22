import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, Transition } from "@headlessui/react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Loader2, Mail, Send, User, ChevronLeftIcon } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { sendContactEmail } from "@/services/emailService";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.enum(['website', 'mobile', 'enterprise', 'other']).optional(),
  budget: z.enum(['<10k', '10k-25k', '25k-50k', '50k+']).optional(),
  timeline: z.enum(['asap', '1-3months', '3-6months', '6months+']).optional(),
  message: z.string().min(10, { message: "Please provide some details about your project." }),
});

type FormValues = z.infer<typeof formSchema>;

const projectTypes = [
  { value: 'website', label: 'Website Development', description: 'Custom websites and web applications' },
  { value: 'mobile', label: 'Mobile App', description: 'iOS and Android applications' },
  { value: 'enterprise', label: 'Enterprise Solution', description: 'Large-scale business systems' },
  { value: 'other', label: 'Other', description: 'Custom or specialized projects' },
];

const budgetRanges = [
  { value: '<10k', label: 'Under $10,000', description: 'Small projects and MVPs' },
  { value: '10k-25k', label: '$10,000 - $25,000', description: 'Medium-sized projects' },
  { value: '25k-50k', label: '$25,000 - $50,000', description: 'Large projects' },
  { value: '50k+', label: '$50,000+', description: 'Enterprise solutions' },
];

const timelineOptions = [
  { value: 'asap', label: 'ASAP', description: 'Urgent timeline' },
  { value: '1-3months', label: '1-3 Months', description: 'Standard timeline' },
  { value: '3-6months', label: '3-6 Months', description: 'Extended timeline' },
  { value: '6months+', label: '6+ Months', description: 'Long-term project' },
];

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const totalSteps = 3;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const nextStep = () => {
    if (step === 1) {
      form.trigger(["name", "email", "company", "phone"]).then((isValid) => {
        if (isValid) setStep(step + 1);
      });
    } else if (step === 2) {
      form.trigger(["projectType", "budget", "timeline"]).then(() => {
        setStep(step + 1);
      });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Create email content
      const subject = `New Project Inquiry from ${data.name}`;
      const body = `Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.projectType ? `Project Type: ${data.projectType}` : ''}
${data.budget ? `Budget: ${data.budget}` : ''}
${data.timeline ? `Timeline: ${data.timeline}` : ''}

Message:
${data.message}`;

      // Create mailto URL
      const mailtoUrl = `mailto:info@aeronxtt.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoUrl;
      
      toast.success("Opening your email client...", {
        description: "Please send the email to complete your inquiry.",
        });
        setFormComplete(true);
    } catch (error) {
      toast.error("An error occurred", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formComplete) {
    return (
      <Transition
        show={formComplete}
        enter="transition-all duration-500"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-foreground/70 max-w-md mb-8">
          Your message has been sent successfully. Our team will review your project details and get back to you as soon as possible.
        </p>
        <Button 
          onClick={() => {
            setFormComplete(false);
            setStep(1);
            form.reset();
          }}
          variant="outline"
        >
          Send Another Message
        </Button>
      </Transition>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full">
      {/* Progress Indicator */}
      <div className="flex items-center mb-8 justify-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                step > index + 1 
                  ? "bg-green-500 text-white" 
                  : step === index + 1 
                  ? "bg-aeron-purple text-white"
                  : "bg-muted text-foreground/50"
              }`}
            >
              {step > index + 1 ? <Check size={16} /> : index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div 
                className={`w-16 h-1 transition-all duration-500 ${
                  step > index + 1 ? "bg-green-500" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Transition
            show={step === 1}
            enter="transition-all duration-300"
            enterFrom="opacity-0 translate-x-4"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-4"
          >
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold mb-6 text-center">Tell us about yourself</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>Name</span>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="transition-all duration-300 border-border/50 focus:border-aeron-purple"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>Email</span>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            type="email" 
                            {...field} 
                            className="transition-all duration-300 border-border/50 focus:border-aeron-purple"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company" 
                            {...field} 
                            className="transition-all duration-300 border-border/50 focus:border-aeron-purple"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+1 (555) 123-4567" 
                            type="tel" 
                            {...field} 
                            className="transition-all duration-300 border-border/50 focus:border-aeron-purple"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}
          </Transition>

          <Transition
            show={step === 2}
            enter="transition-all duration-300"
            enterFrom="opacity-0 translate-x-4"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-4"
          >
            {step === 2 && (
              <div className="space-y-8">
                <h2 className="text-xl font-bold mb-6 text-center">Project Details</h2>
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What type of project are you looking for?</FormLabel>
                      <FormControl>
                        <RadioGroup value={field.value} onChange={field.onChange}>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {projectTypes.map((type) => (
                              <RadioGroup.Option
                                key={type.value}
                                value={type.value}
                                className={({ checked }) =>
                                  `relative flex cursor-pointer rounded-lg px-4 py-3 border transition-all duration-200 focus:outline-none ${
                                    checked
                                      ? 'bg-aeron-purple/10 border-aeron-purple text-aeron-purple'
                                      : 'border-border hover:border-aeron-purple/50'
                                  }`
                                }
                              >
                                {({ checked }) => (
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label className="font-medium">
                                          {type.label}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description className="text-foreground/60">
                                          {type.description}
                                        </RadioGroup.Description>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-aeron-purple">
                                        <Check className="h-4 w-4" />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your budget range?</FormLabel>
                      <FormControl>
                        <RadioGroup value={field.value} onChange={field.onChange}>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {budgetRanges.map((budget) => (
                              <RadioGroup.Option
                                key={budget.value}
                                value={budget.value}
                                className={({ checked }) =>
                                  `relative flex cursor-pointer rounded-lg px-4 py-3 border transition-all duration-200 focus:outline-none ${
                                    checked
                                      ? 'bg-aeron-purple/10 border-aeron-purple text-aeron-purple'
                                      : 'border-border hover:border-aeron-purple/50'
                                  }`
                                }
                              >
                                {({ checked }) => (
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label className="font-medium">
                                          {budget.label}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description className="text-foreground/60">
                                          {budget.description}
                                        </RadioGroup.Description>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-aeron-purple">
                                        <Check className="h-4 w-4" />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your preferred timeline?</FormLabel>
                      <FormControl>
                        <RadioGroup value={field.value} onChange={field.onChange}>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {timelineOptions.map((timeline) => (
                              <RadioGroup.Option
                                key={timeline.value}
                                value={timeline.value}
                                className={({ checked }) =>
                                  `relative flex cursor-pointer rounded-lg px-4 py-3 border transition-all duration-200 focus:outline-none ${
                                    checked
                                      ? 'bg-aeron-purple/10 border-aeron-purple text-aeron-purple'
                                      : 'border-border hover:border-aeron-purple/50'
                                  }`
                                }
                              >
                                {({ checked }) => (
                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label className="font-medium">
                                          {timeline.label}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description className="text-foreground/60">
                                          {timeline.description}
                                        </RadioGroup.Description>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="shrink-0 text-aeron-purple">
                                        <Check className="h-4 w-4" />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </Transition>

          <Transition
            show={step === 3}
            enter="transition-all duration-300"
            enterFrom="opacity-0 translate-x-4"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-4"
          >
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold mb-6 text-center">Tell us about your project</h2>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex items-center gap-2">
                          <Send size={16} />
                          <span>Project Description</span>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                          className="min-h-[120px] transition-all duration-300 border-border/50 focus:border-aeron-purple resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </Transition>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="flex items-center gap-2"
              >
                <ChevronLeftIcon size={16} />
                Previous
              </Button>
            )}
            
            <div className="ml-auto">
              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="gradient-bg flex items-center gap-2"
                >
                  Next
                  <ChevronRight size={16} />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-bg flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
