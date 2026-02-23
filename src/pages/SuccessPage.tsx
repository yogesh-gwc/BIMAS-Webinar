import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300/40 via-purple-400/50 to-purple-400/30 px-4">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-10 max-w-md w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-20 h-20 text-green-500" />
        </motion.div>
  
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Registration Successful!
        </h1>
  
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Thank you for registering. We’re excited to have you join the webinar.
        </p>
  
        <Button
          onClick={() => navigate("/")}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        >
          Go to Home Page
        </Button>
      </motion.div>
  
    </div>
  );
};

export default SuccessPage;