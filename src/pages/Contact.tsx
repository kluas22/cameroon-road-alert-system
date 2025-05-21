
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-off-white dark:bg-deep-blue/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-deep-blue dark:text-white">Contact Us</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-deep-blue/30 rounded-lg shadow-md p-6 space-y-6">
                <h3 className="text-xl font-bold text-deep-blue dark:text-white">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Have questions about SafeRoadsCM? Want to partner with us or provide feedback? Reach out and we'll respond as soon as possible.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-emergency" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-deep-blue dark:text-white">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Main Street, Yaoundé<br />
                        Cameroon
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-emergency" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-deep-blue dark:text-white">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        +237 123 456 789<br />
                        +237 987 654 321
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-emergency" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-deep-blue dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        info@saferoadscan.org<br />
                        support@saferoadscan.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-deep-blue/30 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-deep-blue dark:text-white mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" type="text" placeholder="Message subject" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." className="h-32" required />
                  </div>
                  
                  <Button type="submit" className="bg-deep-blue hover:bg-deep-blue/90 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
