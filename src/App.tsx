import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookPage from "./pages/BookPage";
import FlightStatusPage from "./pages/FlightStatusPage";
import MyTripsPage from "./pages/MyTripsPage";
import LoyaltyPage from "./pages/LoyaltyPage";
import TravelInfoPage from "./pages/TravelInfoPage";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/flight-status" element={<FlightStatusPage />} />
          <Route path="/my-trips" element={<MyTripsPage />} />
          <Route path="/loyalty" element={<LoyaltyPage />} />
          <Route path="/travel-info" element={<TravelInfoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
