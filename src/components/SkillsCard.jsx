const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="h-full rounded-2xl border border-emerald-50 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 text-2xl">
        {icon}
      </span>
      <h4 className="mt-6 text-lg font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-slate-600 ">{text}</p>
    </article>
  );
};
export default SkillsCard;
