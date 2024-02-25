import BulletPoint from "./bullet-point";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const SimpleBulletCard = ({
  bulletPoints,
  title,
}: {
  bulletPoints: string[];
  title: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bulletPoints.map((bullet, index) => (
            <BulletPoint key={index} text={bullet} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleBulletCard;
