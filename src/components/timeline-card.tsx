import { Globe } from "lucide-react";
import BulletPoint from "./bullet-point";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Separator } from "./ui/separator";

const TimelineCard = ({
  right,
  bulletpoints,
}: {
  right?: boolean;
  bulletpoints: string[];
}) => {
  const rightFlexReverse = right ? " flex-row-reverse" : "";

  const rightAlignEnd = right ? " items-end" : "";

  return (
    <div className={`flex${rightFlexReverse}`}>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>
            IT Consultant - UKI Quality Engineering Practice
            <span className="text-primary"> @ IBM</span>
          </CardTitle>
          <CardDescription>2018 - Present</CardDescription>
        </CardHeader>
        <CardContent className="ml-6 space-y-4">
          {bulletpoints.map((bullet, index) => (
            <BulletPoint key={index} text={bullet} />
          ))}
        </CardContent>
      </Card>

      <div className={`w-20 flex flex-col${rightAlignEnd} items-center`}>
        <div>
          <Globe className={`text-muted-foreground size-10 my-4`} />
        </div>
        <Separator orientation="vertical" />
      </div>

      {/* blank div to allow for fixed width seperator for nice spacing */}
      <div className={"flex-1"} />
    </div>
  );
};

export default TimelineCard;
