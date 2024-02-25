const BulletPoint = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 size-2 border border-primary rounded-full relative top-[6px]" />
      <p className="text-muted-foreground text-sm">{text}</p>
    </div>
  );
};

export default BulletPoint;
