import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate sending (you can integrate with an actual email service later)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent! 🎮",
        description: "We'll get back to you soon. Keep playing!",
      });
      
      setFormData({ name: "", email: "", message: "" });
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] pixel-border bg-background">
        <DialogHeader>
          <DialogTitle className="font-pixel text-3xl text-primary flex items-center gap-2">
            <Mail size={32} strokeWidth={3} />
            <span>Contact Clulo</span>
          </DialogTitle>
          <DialogDescription className="font-body text-xl text-foreground/80">
            Got questions? Want to share feedback? Drop us a message!
          </DialogDescription>
        </DialogHeader>
        
        <div className="mb-4 p-4 bg-card pixel-border-sm">
          <p className="font-body text-lg text-foreground flex items-center gap-2">
            <Mail size={20} />
            <a href="mailto:contact@clulo.com" className="text-primary hover:text-accent transition-colors">
              contact@clulo.com
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-pixel text-lg">
              Your Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="font-body text-lg pixel-border-sm"
              placeholder="Enter your name"
              maxLength={100}
            />
            {errors.name && (
              <p className="text-destructive font-body text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-pixel text-lg">
              Your Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="font-body text-lg pixel-border-sm"
              placeholder="your@email.com"
              maxLength={255}
            />
            {errors.email && (
              <p className="text-destructive font-body text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-pixel text-lg">
              Your Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="font-body text-lg pixel-border-sm min-h-[120px]"
              placeholder="Tell us what's on your mind..."
              maxLength={1000}
            />
            <p className="text-sm font-body text-muted-foreground">
              {formData.message.length}/1000 characters
            </p>
            {errors.message && (
              <p className="text-destructive font-body text-sm">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-pixel text-xl pixel-border pixel-box-sm bounce-hover"
          >
            <Send size={20} strokeWidth={3} />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
