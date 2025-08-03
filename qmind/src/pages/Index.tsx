import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  AlertTriangle,
  UserX,
  DollarSign,
  Target,
  BarChart3,
  CheckCircle2,
  Monitor,
  Pencil,
  Lightbulb,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-24 py-16 bg-white neural-pattern">
        {/* Левая часть: Текст и кнопка */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 max-w-2xl">
          <p className="text-sm uppercase text-neutral-500 tracking-widest">
            psychological profile
          </p>
          <h1 className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 bg-clip-text text-transparent text-4xl md:text-4xl font-bold leading-tight">
            Человеческий Фактор —
            <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent gradient-text block">
              под Вашим Контролем
            </span>
          </h1>

          <p className=" text-xl md:text-xl text-neural-600 leading-relaxed">
            Перестаньте терять деньги на ошибках найма, выгорании и скрытых
            рисках. Внедрите систему объективной психодиагностики и принимайте
            кадровые решения, основанные на реальных данных, а не на догадках.
          </p>
          <p></p>
          <Link to="/express-audit">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600  hover:shadow-lg transition-all duration-300 text-xl px-12 py-6 rounded-full"
            >
              Пройти бесплатный Экспресс-Аудит Рисков
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>

        {/* Правая часть: Картинка и лейблы */}
        <div className="md:w-2/5 mt-10 md:mt-0 relative flex justify-center items-center">
          <img
            src="src/images/main2.png"
            alt="Therapy visual"
            className="w-full max-w-md rounded-xl"
          />

          {/* Лейблы */}
          {/* <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 text-sm rounded-full shadow text-gray-700">
            Convenient
          </span>
          <span className="absolute top-1/2 left-4 bg-white px-3 py-1 text-sm rounded-full shadow text-gray-700">
            Caring
          </span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 text-sm rounded-full shadow text-gray-700">
            Confidential
          </span> */}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neural-800">
              Скрытые риски вашей организации
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 items-stretch">
            {/* Изображение слева */}
            <div className="md:col-span-1 h-full">
              <img
                src="src/images/4872300.jpg" // Замените на свой путь
                alt="Service image"
                className="rounded-xl shadow-md w-full h-full object-cover"
              />
            </div>

            {/* Карточки */}
            <div className="md:col-span-3 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              {/* Карточка 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center border border-gray-100 flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Pencil className="text-gray-600 w-6 h-6" />
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  То, что скрыто.
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  Сократите потери из-за ошибок найма и выгорания.
                </p>
                <ul className="text-sm text-gray-700 divide-y divide-gray-200 text-left mt-auto">
                  <li className="py-2">
                    Неудачный найм — следствие несоответствия личности к
                    должности.
                  </li>
                  <li className="py-2">
                    Традиционные собеседования - субъективны.
                  </li>
                  <li className="py-2">Скрытые личностные конфликты.</li>
                </ul>
              </div>

              {/* Карточка 2 — синий фон */}
              <div className="bg-blue-100 rounded-lg p-6 shadow-md text-center border border-blue-200 flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <MonitorSmartphone className="text-blue-600 w-6 h-6" />
                  </div>
                </div>
                <div className="text-lg font-semibold text-blue-800 mb-2">
                  То, что влияет.
                </div>
                <p className="text-blue-700 text-sm mb-4">
                  Внедрите систему объективной психодиагностики.
                </p>
                <ul className="text-sm text-blue-800 divide-y divide-blue-300 text-left mt-auto">
                  <li className="py-2">Выявление стрессовых факторов.</li>
                  <li className="py-2">Анализ выгорания сотрудников.</li>
                  <li className="py-2">Оценка командной согласованности.</li>
                </ul>
              </div>

              {/* Карточка 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center border border-gray-100 flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="text-gray-600 w-6 h-6" />
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  То, что можно изменить.
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  Принимайте кадровые решения, основанные на реальных данных.
                </p>
                <ul className="text-sm text-gray-700 divide-y divide-gray-200 text-left mt-auto">
                  <li className="py-2">Объективная оценка рисков.</li>
                  <li className="py-2">Повышение продуктивности команды.</li>
                  <li className="py-2">Индивидуальные рекомендации.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-700">
              Факты, которые нельзя игнорировать
            </h2>
            <p className="mt-4 text-lg text-red-600">
              Данные, подтвержденные исследованиями в HR и нейрофизиологии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <UserX className="w-8 h-8 text-red-600" />,
                stat: ">70%",
                desc: "провалов при найме вызваны несоответствием личности и должности.",
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
                stat: "до 40%",
                desc: "текучести вызвано стрессом и выгоранием, которое не видно в тестах.",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-red-600" />,
                stat: "x2",
                desc: "годовых оклада — цена замены неэффективного управленца.",
              },
            ].map(({ icon, stat, desc }, i) => (
              <Card
                key={i}
                className="text-center bg-white border border-red-200 p-8 rounded-xl shadow-sm"
              >
                <CardContent>
                  <div className="mb-6 w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                    {icon}
                  </div>
                  <div className="text-5xl font-extrabold text-red-700 mb-4">
                    {stat}
                  </div>
                  <p className="text-red-800 leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}

      <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* Левая часть — текст */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Объективность. Научность. Практическая польза.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Мы не просим ваших сотрудников рассказывать о себе. Мы измеряем
                их
                <strong className="text-blue-700 font-semibold">
                  {" "}
                  объективные психофизиологические реакции
                </strong>{" "}
                с помощью технологии ГРВ-биоэлектрографии. Наш уникальный подход
                к анализу этих данных позволяет с точностью от 85% увидеть то,
                что скрыто: <br />
                <span className="text-blue-900 font-medium">
                  истинный потенциал, уровень стресса, скрытые риски и зоны
                  роста.
                </span>
              </p>

              <Link to="/about">
                <button className="inline-flex items-center px-8 py-4 text-lg font-medium border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                  Узнать больше о методе
                  <ArrowRight className="ml-3 w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* Правая часть — изображение/эффект */}
            <div className="relative">
              <div className="absolute -top-16 -right-16 w-96 h-96 bg-gradient-to-tr from-blue-100 via-pink-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src="src/images/mian.png" // 💡 вставь сюда свой научный/технологичный арт
                alt="GRV Technology Illustration"
                className="w-full "
                // rounded-3xl shadow-xl z-10 relative
              />
            </div>
          </div>
        </div>

        {/* Декоративные блёры */}
        <div className="absolute left-[-100px] top-[200px] w-96 h-96 bg-pink-100 opacity-20 rounded-full blur-3xl" />
        <div className="absolute right-[-80px] bottom-[-50px] w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-2xl" />
      </section>

      {/* Process Section */}

      <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Левая часть — этапы */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-12 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  От диагностики к результату
                </span>
              </h2>

              <div className="space-y-12 relative">
                {/* Линия-подсказка */}
                <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-full" />

                {/* Шаг 1 */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Диагностика (5 минут)
                  </h3>
                  <p className="text-gray-600">
                    Быстрое и неинвазивное сканирование с помощью нашей
                    технологии.
                  </p>
                </div>

                {/* Шаг 2 */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Обработка данных
                  </h3>
                  <p className="text-gray-600">
                    Система анализирует психофизиологические параметры и строит
                    профиль.
                  </p>
                </div>

                {/* Шаг 3 */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Психологический портрет
                  </h3>
                  <p className="text-gray-600">
                    Вы получаете детализированный, развернутый психологический
                    портрет с рекомендациями.
                  </p>
                </div>
              </div>
            </div>

            {/* Правая часть — иллюстрация */}
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-96 h-96 bg-gradient-to-tr from-blue-200 via-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src="src/images/main3.png" // ✅ Вставь сюда иллюстрацию этапов или диагностики
                alt="Диагностика"
                className="w-full rounded-3xl shadow-xl z-10 relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* import { ArrowRight, ShieldCheck } from "lucide-react"; */}

      <section className="relative py-24 bg-gradient-to-b from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Решения на основе фактов
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Узнайте, какие риски скрыты в ваших сотрудниках. Пройдите наш
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

export default Index;
