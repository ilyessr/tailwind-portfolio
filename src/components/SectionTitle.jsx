const SectionTitle = ({ text }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-10 rounded-full bg-emerald-500" />
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 capitalize">
          {text}
        </h2>
      </div>
    </div>
  );
};
export default SectionTitle;
