import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  startingBid: string;
  marketValue: string;
  auctionDate: string;
  propertyType: string;
  image: string;
  discount: string;
}

const PropertyCard = ({
  title,
  location,
  startingBid,
  marketValue,
  auctionDate,
  propertyType,
  image,
  discount,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-3 py-1">
            Скидка {discount}
          </Badge>
          <Badge className="absolute top-3 right-3 bg-slate-800/90 text-white">
            {propertyType}
          </Badge>
          <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Потенциал +150%
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center text-slate-600 mb-3">
          <Icon name="MapPin" size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Стартовая цена:</span>
            <span className="font-bold text-2xl text-green-600">
              {startingBid}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Рыночная стоимость:</span>
            <span className="text-lg line-through text-slate-400">
              {marketValue}
            </span>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <div className="text-sm font-semibold text-green-700">
              Экономия:{" "}
              {parseInt(marketValue.replace(/\D/g, "")) -
                parseInt(startingBid.replace(/\D/g, ""))}{" "}
              ₽
            </div>
          </div>
        </div>

        <div className="flex items-center text-sm text-slate-600 mb-4">
          <Icon name="Calendar" size={16} className="mr-2" />
          <span>Торги: {auctionDate}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          <Icon name="Eye" className="mr-2" size={16} />
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
