const Disclaimer = () => {
  return (
    <footer className="py-8 pb-24 md:pb-8 border-t border-border">
      <div className="container">
        <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          We are an independent travel assistance service and are not affiliated with any airline or official booking platform. 
          All trademarks and brand names belong to their respective owners. Flight information is provided for reference only 
          and may not reflect real-time status. Please verify all details with your airline directly.
        </p>
        <p className="text-xs text-muted-foreground/60 text-center mt-3">
          © {new Date().getFullYear()} FlyAssist. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Disclaimer;
