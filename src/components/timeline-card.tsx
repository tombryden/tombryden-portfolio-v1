import { LucideIcon } from "lucide-react";
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
  title,
  company,
  time,
  Icon,
}: {
  right?: boolean;
  bulletpoints: string[];
  title: string;
  company: string;
  time: string;
  Icon: LucideIcon;
}) => {
  const rightFlexReverse = right ? " flex-row-reverse" : "";

  const rightAlignEnd = right ? " items-end" : "";

  return (
    <div className={`flex${rightFlexReverse}`}>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>
            {title}
            <span className="text-primary"> @ {company}</span>
          </CardTitle>
          <CardDescription>{time}</CardDescription>
        </CardHeader>
        <CardContent className="ml-6 space-y-4">
          {bulletpoints.map((bullet, index) => (
            <BulletPoint key={index} text={bullet} />
          ))}
        </CardContent>
      </Card>

      <div className={`w-20 flex flex-col${rightAlignEnd} items-center`}>
        <div>
          <Icon className={`text-muted-foreground size-10 my-4`} />
        </div>
        <Separator orientation="vertical" />
      </div>

      {/* blank div to allow for fixed width seperator for nice spacing */}
      <div className={"flex-1"} />
    </div>
  );
};

export default TimelineCard;
