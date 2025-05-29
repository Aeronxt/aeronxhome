
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Loader2, Mail, Send, User } from "lucide-react";
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
      // Ensure required fields are present before sending
      const emailData = {
        name: data.name, // Required field
        email: data.email, // Required field
        message: data.message, // Required field
        company: data.company,
        phone: data.phone,
        projectType: data.projectType,
        budget: data.budget,
        timeline: data.timeline,
      };
      
      const result = await sendContactEmail(emailData);
      
      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you as soon as possible.",
        });
        setFormComplete(true);
      } else {
        toast.error("Failed to send message", {
          description: result.message,
        });
      }
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
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
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
      </div>
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
          {step === 1 && (
            <>
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
                          placeholder="+1 (123) 456-7890" 
                          {...field} 
                          className="transition-all duration-300 border-border/50 focus:border-aeron-purple"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-bold mb-6 text-center">Project Details</h2>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What type of project are you looking for?</FormLabel>
                      <div className="grid gap-4 pt-2">
                        <RadioGroup 
                          defaultValue={field.value} 
                          onValueChange={field.onChange} 
                          className="grid grid-cols-2 gap-4"
                        >
                          {[
                            { value: 'website', label: 'Website' },
                            { value: 'mobile', label: 'Mobile App' },
                            { value: 'enterprise', label: 'Enterprise Solution' },
                            { value: 'other', label: 'Other' },
                          ].map((option) => (
                            <div key={option.value}>
                              <RadioGroupItem
                                value={option.value}
                                id={`project-${option.value}`}
                                className="peer sr-only"
                              />
                              <FormLabel
                                htmlFor={`project-${option.value}`}
                                className="flex flex-col items-center justify-between border border-border/50 rounded-md p-4 hover:bg-accent transition-all peer-data-[state=checked]:border-aeron-purple peer-data-[state=checked]:bg-aeron-purple/5 cursor-pointer"
                              >
                                <span>{option.label}</span>
                              </FormLabel>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
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
                      <div className="grid gap-4 pt-2">
                        <RadioGroup 
                          defaultValue={field.value} 
                          onValueChange={field.onChange} 
                          className="grid grid-cols-2 gap-4"
                        >
                          {[
                            { value: '<10k', label: 'Less than $10,000' },
                            { value: '10k-25k', label: '$10,000 - $25,000' },
                            { value: '25k-50k', label: '$25,000 - $50,000' },
                            { value: '50k+', label: 'More than $50,000' },
                          ].map((option) => (
                            <div key={option.value}>
                              <RadioGroupItem
                                value={option.value}
                                id={`budget-${option.value}`}
                                className="peer sr-only"
                              />
                              <FormLabel
                                htmlFor={`budget-${option.value}`}
                                className="flex flex-col items-center justify-between border border-border/50 rounded-md p-4 hover:bg-accent transition-all peer-data-[state=checked]:border-aeron-purple peer-data-[state=checked]:bg-aeron-purple/5 cursor-pointer"
                              >
                                <span>{option.label}</span>
                              </FormLabel>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your timeline?</FormLabel>
                      <div className="grid gap-4 pt-2">
                        <RadioGroup 
                          defaultValue={field.value} 
                          onValueChange={field.onChange} 
                          className="grid grid-cols-2 gap-4"
                        >
                          {[
                            { value: 'asap', label: 'As soon as possible' },
                            { value: '1-3months', label: '1-3 months' },
                            { value: '3-6months', label: '3-6 months' },
                            { value: '6months+', label: '6+ months' },
                          ].map((option) => (
                            <div key={option.value}>
                              <RadioGroupItem
                                value={option.value}
                                id={`timeline-${option.value}`}
                                className="peer sr-only"
                              />
                              <FormLabel
                                htmlFor={`timeline-${option.value}`}
                                className="flex flex-col items-center justify-between border border-border/50 rounded-md p-4 hover:bg-accent transition-all peer-data-[state=checked]:border-aeron-purple peer-data-[state=checked]:bg-aeron-purple/5 cursor-pointer"
                              >
                                <span>{option.label}</span>
                              </FormLabel>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-bold mb-6 text-center">Project Description</h2>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your project</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please share more details about your project, goals, and any specific requirements..." 
                        {...field} 
                        rows={6}
                        className="transition-all duration-300 border-border/50 focus:border-aeron-purple resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <div className={`flex ${step > 1 ? 'justify-between' : 'justify-end'} pt-6`}>
            {step > 1 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                disabled={isSubmitting}
              >
                Back
              </Button>
            )}

            {step < totalSteps ? (
              <Button 
                type="button" 
                onClick={nextStep} 
                className="gradient-bg"
              >
                Next Step
                <ChevronRight size={16} className="ml-2" />
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="gradient-bg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
