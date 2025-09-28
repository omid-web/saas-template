import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});
type NewsletterFormValues = z.infer<typeof newsletterSchema>;
export function Footer() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });
  const onSubmit = (data: NewsletterFormValues) => {
    console.log('Newsletter submission:', data);
    toast.success("You've subscribed to our newsletter!", {
      description: "Thanks for joining. Look out for updates from the Zenith team.",
    });
    reset();
  };
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-display text-foreground">Zenith</span>
            </a>
            <p className="text-muted-foreground">The ultimate platform to scale your business.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" {...register("email")} className="bg-background" />
                <Button type="submit">Subscribe</Button>
              </div>
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Zenith, Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">Built with ❤️ at Cloudflare</p>
      </div>
    </footer>
  );
}