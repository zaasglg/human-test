import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Microscope,
  Brain,
  Activity,
  Target,
  CheckCircle2,
  ArrowRight,
  Shield,
  Award,
  Users,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Это научно?",
      answer:
        "Да. Сама технология ГРВ апробирована и используется в науке и медицине. Мы лично поставляли оборудование и обучали специалистов для МО и НГ РК. Наш метод интерпретации основан на моделях современной научной психологии.",
    },
    {
      question: "Насколько это точно?",
      answer:
        "Наша подтвержденная точность выводов составляет от 85%. Это значительно выше, чем у используемых тестов, где результаты легко исказить.",
    },
    {
      question: "Это безопасно для сотрудников?",
      answer:
        "Абсолютно. Метод неинвазивный (без вмешательства в организм) и полностью безвредный. Все данные обрабатываются конфиденциально, а сотрудники проходят диагностику после взаимного согласия.",
    },
    {
      question: "Как это помогает бизнесу?",
      answer:
        "Наш метод позволяет выявить скрытые риски и конфликты в компании, что снижает вероятность ошибок при найме и повышает общую продуктивность. Мы помогаем руководителям принимать более обоснованные решения.",
    },
    // {
    //   question: "Сколько времени занимает диагностика?",
    //   answer:
    //     "Обычно диагностика занимает около 10 минут на человека. Результаты предоставляются в виде подробного отчета с рекомендациями.",
    // },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}

      <section className="relative pt-32 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Наука вместо догадок:
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Как мы видим то, что скрыто
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Наш метод основан на трех китах: объективная технология, глубокая
              психологическая экспертиза и современные IT-решения.
            </p>
          </div>
        </div>

        {/* Иллюстрация или 3D */}
        <div className="absolute bottom-40 right-0 w-[350px] max-w-full opacity-80 z-0">
          <img
            src="src/images/about_main.png" // 🔁 Замени или добавь нужную нейросетевую иллюстрацию
            alt="Технология визуализации"
            className="w-full object-contain"
          />
        </div>

        {/* Декоративные блёры */}
        <div className="absolute top-[20%] left-[-80px] w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-[60%] right-[-60px] w-80 h-80 bg-purple-200 rounded-full blur-2xl opacity-25" />
      </section>

      {/* What is GRV Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neural-800 mb-6">
                Что такое ГРВ-биоэлектрография?
              </h2>
              <p className="text-neural-600 leading-relaxed mb-6">
                ГРВ (Газоразрядная Визуализация) — это научный метод,
                позволяющий регистрировать и анализировать сверхслабые свечения,
                возникающие вокруг объектов в электромагнитном поле высокой
                напряженности.
              </p>
              <p className="text-neural-600 leading-relaxed mb-6">
                Эти параметры напрямую коррелируют с активностью вегетативной
                нервной системы, уровнем стресса и энергетическим состоянием
                организма.
              </p>
              <div className="bg-tech-50 p-6 rounded-lg">
                <p className="text-tech-800 font-semibold">
                  Важно: Мы измеряем объективные физиологические параметры,
                  которые служат для нас «сырыми данными».
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-tech rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Activity className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">от 85%</div>
                    <div className="text-sm opacity-90">Точность</div>
                  </div>
                  <div className="text-center">
                    <Brain className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">5 мин</div>
                    <div className="text-sm opacity-90">Диагностика</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Безопасно</div>
                  </div>
                  <div className="text-center">
                    <Target className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">20 лет</div>
                    <div className="text-sm opacity-90">Опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('src/images/ai_mind.jpg')" }}
      >
        {/* Основной контент */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white mb-12">
              Почему наш подход{" "}
              <span className="text-blue-600">действительно работает?</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 max-w-4xl mx-auto relative z-10 border border-blue-100">
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-700">ГРВ-технология</strong> — это
                лишь инструмент. Главная сила — в уникальной системе научной
                интерпретации данных, разработанной нашей командой для точной
                оценки психологических и бизнес-рисков.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Основываясь на{" "}
                <strong className="text-blue-700">20-летнем опыте</strong> в
                психодиагностике, мы создали метод, который переводит биоданные
                в понятные и точные рекомендации для HR и управленцев.
              </p>

              <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <p className="text-blue-800 font-medium text-base">
                  🚀 Наша научная разработка помогает снизить риски, повысить
                  продуктивность и сделать психологический климат комфортным.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Декоративные круги */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20 z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100 rounded-full blur-2xl opacity-20 z-0" />
      </section>

      {/* FAQ Section Updated */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="src/images/faq.png"
                alt="FAQ Illustration"
                className="w-full max-w-md mx-auto rounded-xl shadow-md"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-neural-800 mb-6">
                Ответы на частые вопросы
              </h2>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-blue-100 transition-all duration-300"
                  >
                    <button
                      className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-800"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <div className="flex items-center">
                        <HelpCircle className="w-5 h-5 text-blue-500 mr-3" />
                        {faq.question}
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      )}
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-40 opacity-100 pb-5"
                          : "max-h-0 opacity-0"
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <p className="text-gray-600 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
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

export default About;
