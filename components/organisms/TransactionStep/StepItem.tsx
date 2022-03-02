interface StepItemProps{
    title:string;
    icon:string;
    desc1:string;
    desc2:string;
}
export default function StepItem({
  title, desc1, desc2, icon,
}:StepItemProps) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={`/icon/${icon}`} width={80} height={80} alt={icon} className="mb-30" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
