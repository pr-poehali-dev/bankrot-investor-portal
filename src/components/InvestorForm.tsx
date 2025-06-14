import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  budget: z.string().min(1, "Выберite бюджет"),
  propertyTypes: z
    .array(z.string())
    .min(1, "Выберите хотя бы один тип недвижимости"),
  goals: z.string().min(10, "Опишите ваши инвестиционные цели"),
  experience: z.string().min(1, "Укажите ваш опыт"),
  consent: z
    .boolean()
    .refine((val) => val === true, "Необходимо согласие на обработку данных"),
});

type FormData = z.infer<typeof formSchema>;

const InvestorForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handlePropertyTypeChange = (type: string, checked: boolean) => {
    let newTypes;
    if (checked) {
      newTypes = [...propertyTypes, type];
    } else {
      newTypes = propertyTypes.filter((t) => t !== type);
    }
    setPropertyTypes(newTypes);
    setValue("propertyTypes", newTypes);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <Icon
            name="CheckCircle"
            className="text-green-500 mx-auto mb-4"
            size={48}
          />
          <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
          <p className="text-slate-600">
            Мы свяжемся с вами в течение 24 часов для обсуждения инвестиционных
            возможностей.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Регистрация инвестора
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Имя и фамилия *</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Иван Иванов"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+7 (999) 123-45-67"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="ivan@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="budget">Инвестиционный бюджет *</Label>
            <Select onValueChange={(value) => setValue("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите диапазон" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1-3 млн ₽</SelectItem>
                <SelectItem value="3-5">3-5 млн ₽</SelectItem>
                <SelectItem value="5-10">5-10 млн ₽</SelectItem>
                <SelectItem value="10-20">10-20 млн ₽</SelectItem>
                <SelectItem value="20+">20+ млн ₽</SelectItem>
              </SelectContent>
            </Select>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>

          <div>
            <Label>Типы недвижимости *</Label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {["Квартиры", "Дома", "Коммерция", "Земля"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <Checkbox
                    checked={propertyTypes.includes(type)}
                    onCheckedChange={(checked) =>
                      handlePropertyTypeChange(type, checked as boolean)
                    }
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
            {errors.propertyTypes && (
              <p className="text-red-500 text-sm mt-1">
                {errors.propertyTypes.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="experience">Опыт инвестирования *</Label>
            <Select onValueChange={(value) => setValue("experience", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите ваш опыт" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Новичок</SelectItem>
                <SelectItem value="some">Есть опыт (1-5 сделок)</SelectItem>
                <SelectItem value="experienced">Опытный (5+ сделок)</SelectItem>
                <SelectItem value="professional">
                  Профессиональный инвестор
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1">
                {errors.experience.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="goals">Инвестиционные цели *</Label>
            <Textarea
              id="goals"
              {...register("goals")}
              placeholder="Расскажите о ваших целях и предпочтениях..."
              rows={3}
            />
            {errors.goals && (
              <p className="text-red-500 text-sm mt-1">
                {errors.goals.message}
              </p>
            )}
          </div>

          <div className="border-t pt-4">
            <label className="flex items-start space-x-2">
              <Checkbox
                onCheckedChange={(checked) =>
                  setValue("consent", checked as boolean)
                }
              />
              <span className="text-sm text-slate-600">
                Я согласен на обработку персональных данных и получение
                информации о новых объектах *
              </span>
            </label>
            {errors.consent && (
              <p className="text-red-500 text-sm mt-1">
                {errors.consent.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600"
          >
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InvestorForm;
