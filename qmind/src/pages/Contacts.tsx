import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки формы
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в течение 24 часов.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (701) 717-06-33",
      description: "Пн-Пт с 9:00 до 18:00",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@humanfactor-hub.kz",
      description: "Ответим в течение 24 часов",
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "г. Алматы, ул. Абая 150/230",
      description: 'Офис 301, БЦ "Технопарк"',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-tech-50 to-white">
        {/* Контент поверх картинки */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neural-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent gradient-text">
                Свяжитесь
              </span>{" "}
              с нами
            </h1>
            <p className="text-xl text-neural-600 leading-relaxed">
              Если у вас есть вопросы о наших услугах, вы хотите обсудить
              индивидуальные кейсы или заказать диагностику, свяжитесь с нами
              любым удобным способом.
            </p>
          </div>
        </div>

        {/* Картинка позади */}
        <div className="absolute bottom-0 right-0 w-96 max-w-full opacity-60 z-0 pointer-events-none">
          <img
            src="src/images/contact.png"
            alt="Успешные кейсы"
            className="w-full object-contain"
          />
        </div>

        {/* Блюры (тоже позади) */}
        <div className="absolute top-[10%] left-[-80px] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 z-0" />
        <div className="absolute bottom-0 right-[-60px] w-72 h-72 bg-cyan-200 rounded-full blur-2xl opacity-20 z-0" />
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="tech-card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16  bg-gradient-to-r from-blue-600  to-purple-600 rounded-lg flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-neural-800">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-tech-600 mb-2">
                    {info.value}
                  </p>
                  <p className="text-sm text-neural-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="tech-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-neural-800 mb-2">
                  Форма обратной связи
                </CardTitle>
                <p className="text-neural-600">
                  Напишите нам, и мы обязательно ответим
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-neural-700">
                        Ваше Имя *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Абылай Хаб"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-neural-700">
                        Ваш Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ivan@company.ru"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-neural-700">
                      Тема сообщения *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Консультация по услугам"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-neural-700">
                      Текст сообщения *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите подробнее о ваших задачах и вопросах..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-tech hover:shadow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Отправка..."
                    ) : (
                      <>
                        Отправить сообщение
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-neural-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="tech-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-neural-800 mb-2">
                  Q-Mind Insights Hub
                </CardTitle>
                <p className="text-neural-600">
                  Инновационная платформа для научного анализа человеческого
                  фактора
                </p>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-neural-800 mb-2">
                      Вид деятельности:
                    </h4>
                    <p className="text-neural-600 text-sm">
                      Исследования и экспериментальные разработки в области
                      общественных и гуманитарных наук
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neural-800 mb-2">
                      Специализация:
                    </h4>
                    <p className="text-neural-600 text-sm">
                      ГРВ-диагностика, психофизиологический анализ, управление
                      человеческими ресурсами
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neural-200">
                  <p className="text-xs text-neural-500">
                    <a
                      href="#"
                      className="hover:text-tech-600 transition-colors"
                    >
                      Политика Конфиденциальности
                    </a>
                    {" • "}
                    <a
                      href="#"
                      className="hover:text-tech-600 transition-colors"
                    >
                      Пользовательское Соглашение
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
