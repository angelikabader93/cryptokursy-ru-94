
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BeginnerCoursePage from "./pages/courses/BeginnerCoursePage";
import BlockchainCoursePage from "./pages/courses/BlockchainCoursePage";
import BitcoinCoursePage from "./pages/courses/BitcoinCoursePage";
import PremiumCoursePage from "./pages/courses/PremiumCoursePage";
import CryptoForBeginnersLandingPage from "./pages/courses/CryptoForBeginnersLandingPage";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RobotsTxt from "./pages/RobotsTxt";
import SitemapXml from "./pages/SitemapXml";
import LowercaseRedirect from "./components/LowercaseRedirect";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <LowercaseRedirect>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/robots.txt" element={<RobotsTxt />} />
              <Route path="/sitemap.xml" element={<SitemapXml />} />
              <Route path="/courses/crypto-for-beginners" element={<CryptoForBeginnersLandingPage />} />
              <Route path="/courses/blockchain-and-crypto" element={<BlockchainCoursePage />} />
              <Route path="/courses/bitcoin-and-altcoins" element={<BitcoinCoursePage />} />
              <Route path="/courses/premium-crypto-school" element={<PremiumCoursePage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTopButton />
          </LowercaseRedirect>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
