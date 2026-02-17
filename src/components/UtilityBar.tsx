export default function UtilityBar() {
  return (
    <div className="bg-delta-blue-light border-b border-delta-border text-xs text-delta-blue">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-8">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">English</a>
          <a href="#" className="hover:underline">USD</a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline font-semibold">SkyMiles Login</a>
          <a href="#" className="hover:underline">My Trips</a>
          <a href="#" className="hover:underline">Help Center</a>
        </div>
      </div>
    </div>
  );
}
