const NumberSubtitle = ({
  number,
  title,
}: {
  number: string;
  title: string;
}) => {
  return (
    <h2 className="font-semibold text-2xl text-foreground mb-6 mt-24">
      <span className="text-primary text-2xl">{number}</span> {title}
    </h2>
  );
};

export default NumberSubtitle;
