import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Building2,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const Cases = () => {
  // Placeholder data for future case studies
  const futureCases = [
    {
      industry: "IT-компания",
      challenge: "Высокая текучесть разработчиков",
      solution: "Комплексная диагностика команды из 25 человек",
      results: [
        "Снижение текучести на 60%",
        "Повышение продуктивности на 35%",
        "Улучшение командного климата",
      ],
      timeframe: "6 месяцев",
      // savings: "12 млн ₸",
    },
    {
      industry: "Производственная компания",
      challenge: "Конфликты в управленческой команде",
      solution: "Углубленная диагностика топ-менеджмента",
      results: [
        "Разрешение ключевых конфликтов",
        "Оптимизация распределения ролей",
        "Рост операционной эффективности на 25%",
      ],
      timeframe: "3 месяца",
      // savings: "8 млн ₸",
    },
    {
      industry: "Финансовая организация",
      challenge: "Профессиональное выгорание",
      solution: "Мониторинг стресса и превентивные меры",
      results: [
        "Снижение уровня выгорания на 45%",
        "Уменьшение больничных на 30%",
        "Повышение клиентского сервиса",
      ],
      timeframe: "12 месяцев",
      // savings: "15 млн ₸",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent gradient-text">
                Кейсы
              </span>{" "}
              и Результаты
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Реальные истории успеха наших клиентов и подтверждённые
              бизнес-результаты от внедрения диагностики ГРВ.
            </p>
          </div>
        </div>

        {/* Иконка или иллюстрация */}
        <div className="absolute bottom-0 right-0 w-96 max-w-full opacity-60">
          <img
            src="src/images/case_png.png" // 🔁 Добавь подходящую иллюстрацию, например: успех, рост, кейсы
            alt="Успешные кейсы"
            className="w-full object-contain"
          />
        </div>

        {/* Блюр-декор */}
        <div className="absolute top-[10%] left-[-80px] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-[-60px] w-72 h-72 bg-cyan-200 rounded-full blur-2xl opacity-20" />
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="grid md:grid-cols-12 items-center gap-8">
              {/* Иконка с градиентным кругом */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="w-20 h-20  bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Текст */}
              <div className="md:col-span-11">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Кейсы наших возможностей
                  </h2>
                  <p className="text-lg text-gray-600">
                    Мы сотрудничаем с компаниями из разных отраслей и подбираем
                    решения, которые действительно работают. Наша команда
                    готовит индивидуальные кейсы под задачи клиента,
                    демонстрируя ROI и практические результаты.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Cases */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {futureCases.map((caseItem, index) => (
              <Card key={index} className="tech-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-neural-600">
                      {caseItem.industry}
                    </Badge>
                    <Badge className="bg-gradient-tech text-white">
                      В разработке
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-neural-800">
                    {caseItem.challenge}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neural-800 mb-2">
                      Решение:
                    </h4>
                    <p className="text-sm text-neural-600">
                      {caseItem.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neural-800 mb-2">
                      Ожидаемые результаты:
                    </h4>
                    <ul className="space-y-1">
                      {caseItem.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-tech-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-neural-600">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neural-200">
                    <div className="flex items-center text-sm text-neural-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {caseItem.timeframe}
                    </div>
                    <div className="flex items-center text-sm font-semibold text-tech-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {/* {caseItem.savings} */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why No Cases Yet */}
      <section className="py-16 bg-[url('src/images/vvvv.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="tech-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-neural-800 mb-4">
                  Возможности индивидуального заказа
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-tech-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-tech-600 font-bold text-sm">
                          1
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neural-800 mb-1">
                          Инновация
                        </h4>
                        <p className="text-sm text-neural-600">
                          Наша методика интерпретации ГРВ-данных для
                          бизнес-задач является инновационной разработкой.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-tech-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-tech-600 font-bold text-sm">
                          2
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neural-800 mb-1">
                          Качество данных
                        </h4>
                        <p className="text-sm text-neural-600">
                          Мы предоставляем полностью завершенные и
                          верифицированные кейсы с измеримыми результатами.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-tech-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-tech-600 font-bold text-sm">
                          3
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neural-800 mb-1">
                          Конфиденциальность
                        </h4>
                        <p className="text-sm text-neural-600">
                          Все кейсы тщательно обезличены при сохранении ценности
                          для потенциальных клиентов.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-tech-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-tech-600 font-bold text-sm">
                          4
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neural-800 mb-1">
                          Время для результатов
                        </h4>
                        <p className="text-sm text-neural-600">
                          Значимые изменения в командах требуют времени - мы
                          нацелены на долгосрочные эффекты.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-tech-50 p-6 rounded-lg text-center">
                  <p className="text-tech-800 font-semibold mb-2">
                    Станьте одним из первых!
                  </p>
                  <p className="text-tech-700 text-sm">
                    Рассмотрите варианты индивидуального подхода и получите
                    дополнительные бонусы, а также возможность стать героем
                    наших будущих кейсов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* Иллюстрация или абстрактный блок */}
            <div className="relative">
              <div className="w-full h-[600px] bg-gradient-to-br from-blue-200 via-cyan-100 to-white rounded-3xl shadow-xl flex items-center justify-center">
                {/* Можно заменить на SVG, иконку или фото */}
                <img
                  src="src/images/case_main2.png" // 👉 Замени на нейросетевую или 3D иллюстрацию
                  alt="Индивидуальный подход"
                  className="w-3/4 h-auto object-contain"
                />
              </div>
            </div>

            {/* Контент */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Индивидуальный подход,{" "}
                <span className="text-blue-600">реальные результаты</span>
              </h2>

              <div className="space-y-6">
                {/* Пункт 1 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-xl flex items-center justify-center mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Инновация
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Методика интерпретации ГРВ-данных — наша оригинальная
                      разработка на основе 20-летнего опыта.
                    </p>
                  </div>
                </div>

                {/* Пункт 2 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-xl flex items-center justify-center mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Качество данных
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Все кейсы сопровождаются верифицированными результатами и
                      ключевыми метриками.
                    </p>
                  </div>
                </div>

                {/* Пункт 3 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-xl flex items-center justify-center mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Конфиденциальность
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Мы сохраняем анонимность кейсов, но демонстрируем ключевые
                      инсайты и результаты.
                    </p>
                  </div>
                </div>

                {/* Пункт 4 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-xl flex items-center justify-center mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Фокус на ROI
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Мы нацелены на реальные изменения и ценим долгосрочные
                      эффекты, а не только быстрые результаты.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call-to-Action */}
              <div className="mt-10 bg-blue-50 p-6 rounded-xl text-center shadow-md">
                <p className="text-blue-800 font-semibold text-lg mb-1">
                  Станьте частью будущих историй успеха
                </p>
                <p className="text-blue-600 text-sm">
                  Закажите индивидуальный кейс и получите приоритетный анализ от
                  нашей научной команды.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-b from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Решения на основе фактов
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Узнайте, какие риски скрыты в вашей команде. Пройдите наш
            <strong className="text-purple-600 font-semibold">
              {" "}
              бесплатный и конфиденциальный Экспресс-Аудит
            </strong>{" "}
            — это займет всего <strong>2 минуты</strong>.
          </p>

          <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-10">
            <ShieldCheck className="text-green-500 w-5 h-5" />
            Конфиденциально • Без регистрации
          </div>

          <Link to="/express-audit">
            <button className="inline-flex items-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-indigo-700 via-blue-800 to-indigo-900 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Пройти Экспресс-Аудит Рисков
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Украшения */}
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-pink-100 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 opacity-30 rounded-full blur-2xl" />
      </section>

      <Footer />
    </div>
  );
};

export default Cases;
