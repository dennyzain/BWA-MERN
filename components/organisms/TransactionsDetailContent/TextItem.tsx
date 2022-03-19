interface TextItemProps{
    title:string;
    value:string|number|number[];

}

export default function TextItem({ title, value }:TextItemProps) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {title}
      <span
        className="purchase-details"
      >
        {value}
      </span>
    </p>
  );
}
