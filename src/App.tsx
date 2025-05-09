
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BeginnerCoursePage from "./pages/courses/BeginnerCoursePage";
import BlockchainCoursePage from "./pages/courses/BlockchainCoursePage";
import BitcoinCoursePage from "./pages/courses/BitcoinCoursePage";
import PremiumCoursePage from "./pages/courses/PremiumCoursePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses/crypto-for-beginners" element={<BeginnerCoursePage />} />
          <Route path="/courses/blockchain-and-crypto" element={<BlockchainCoursePage />} />
          <Route path="/courses/bitcoin-and-altcoins" element={<BitcoinCoursePage />} />
          <Route path="/courses/premium-crypto-school" element={<PremiumCoursePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
