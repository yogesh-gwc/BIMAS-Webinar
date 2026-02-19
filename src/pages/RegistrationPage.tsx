// src/pages/RegistrationPage.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, Clock } from "lucide-react";
import backgroundImg from "../../src/assets/bg-PawXG2Dj.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  organization: string;
  jobTitle: string;
  industry: string;
  purpose: string;
}

const RegistrationPage = () => {
  const navigate = useNavigate();

  const initialFormState: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    organization: "",
    jobTitle: "",
    industry: "",
    purpose: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormState);

  const handleCancel = () => {
    setFormData(initialFormState); // Reset all inputs
    setErrors({});                 // Clear validation errors
  };

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
      

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.industry.trim()) newErrors.industry = "Industry is required";
    if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
      // You can add API call here
      // Then navigate to success page or show success message
      alert("Registration successful!");
      navigate("/");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div>
      <div className="relative">
        <img
          src={backgroundImg}
          alt="Background"
          className="w-full h-60 md:h-60 object-cover object-top"
        />
      </div>
      {/* Dark overlay for better readability */}
      <div className="fixed inset-0 " />

      {/* Decorative elements */}
      {/* <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div> */}

      <div className="max-w-2xl mx-auto relative -mt-24 md:-mt-24 px-4">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 dark:border-slate-800/50"
        >
          {/* Header with gradient - UNCHANGED */}
          <div className="bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 p-6 border-b border-white/20 dark:border-slate-800/50">
            <h1 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
              GWC's Webinar On BI Migration Accelerator as a Service
            </h1>

            {/* Date and Time */}
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-2 text-muted-foreground bg-white/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-full">
                <CalendarDays className="w-4 h-4" />
                <span className="text-sm font-medium">March 4, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground bg-white/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">3:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Form - UNCHANGED */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 ${
                    errors.firstName ? "border-destructive" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 ${
                    errors.lastName ? "border-destructive" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 ${
                  errors.email ? "border-destructive" : ""
                }`}
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <Label htmlFor="mobileNumber" className="text-sm font-medium">
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 ${
                  errors.mobileNumber ? "border-destructive" : ""
                }`}
              />
              {errors.mobileNumber && (
                <p className="text-xs text-destructive mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-sm font-medium">
                Organization <span className="text-destructive">*</span>
              </Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter organization"
                className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 ${
                  errors.organization ? "border-destructive" : ""
                }`}
              />
              {errors.organization && (
                <p className="text-xs text-destructive mt-1">
                  {errors.organization}
                </p>
              )}
            </div>

            {/* Job Title */}
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-sm font-medium">
                Job Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Enter job title"
                className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 ${
                  errors.jobTitle ? "border-destructive" : ""
                }`}
              />
              {errors.jobTitle && (
                <p className="text-xs text-destructive mt-1">
                  {errors.jobTitle}
                </p>
              )}
            </div>

            {/* Industry - Now as normal input box */}
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-sm font-medium">
                Industry <span className="text-destructive">*</span>
              </Label>
              <Input
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="Enter your industry"
                className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 ${
                  errors.industry ? "border-destructive" : ""
                }`}
              />
              {errors.industry && (
                <p className="text-xs text-destructive mt-1">
                  {errors.industry}
                </p>
              )}
            </div>

            {/* Purpose for Joining - as Textarea */}
            <div className="space-y-2">
              <Label htmlFor="purpose" className="text-sm font-medium">
                Purpose for Joining <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                placeholder="Please share your purpose for joining this webinar..."
                className={`min-h-[120px] resize-y bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 ${
                  errors.purpose ? "border-destructive" : ""
                }`}
              />
              {errors.purpose && (
                <p className="text-xs text-destructive mt-1">
                  {errors.purpose}
                </p>
              )}
              
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg shadow-primary/20"
              >
                Register
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="flex-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/80"
              >
                Cancel
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationPage;
