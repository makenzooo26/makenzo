import React, { useState } from 'react';
import { 
  Car, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  Navigation,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-zinc-900 p-2 rounded-lg">
              <Car className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">Трезвый Водитель</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Преимущества</a>
            <a  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Как это работает</a>
            <a  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Цены</a>
            <a href="tel:+77088363103" className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Вызвать сейчас
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#features" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-900">Преимущества</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-900">Как это работает</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-900">Цены</a>
              <a href="tel:+79991234567" className="w-full bg-zinc-900 text-white px-5 py-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Вызвать водителя
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-zinc-900" />
    </div>
    <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
    <p className="text-zinc-500 leading-relaxed">{description}</p>
  </motion.div>
);

const PriceCard = ({ title, price, features, recommended = false }: { title: string, price: string, features: string[], recommended?: boolean }) => (
  <div className={`p-8 rounded-3xl border ${recommended ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xl scale-105' : 'border-zinc-100 bg-white text-zinc-900'} relative overflow-hidden`}>
    {recommended && (
      <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        Популярно
      </div>
    )}
    <h3 className="text-lg font-bold mb-2 opacity-80">{title}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-sm opacity-60">/ выезд</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-sm">
          <CheckCircle2 className={`w-5 h-5 ${recommended ? 'text-white' : 'text-zinc-900'}`} />
          <span className="opacity-80">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-6">
              <Navigation className="w-3 h-3" />
              Работаем по всему городу 24/7
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Ваш автомобиль — <br />
              <span className="text-emerald-500">наша забота.</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-10 max-w-lg leading-relaxed">
              Профессиональные водители доставят вас и ваш автомобиль домой в любое время суток. Безопасно, быстро и с комфортом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+77088363103" className="flex items-center justify-center gap-3 bg-zinc-900 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
                <Phone className="w-5 h-5" />
                +7 708 836 3103
              </a>
              <a href="https://wa.me/77088363103" className="flex items-center justify-center gap-3 bg-white border-2 border-zinc-100 text-zinc-900 px-8 py-5 rounded-2xl text-lg font-bold hover:border-zinc-200 transition-all">
                <MessageCircle className="w-5 h-5 text-emerald-500" />
                WhatsApp
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-zinc-500 font-medium">Более 10,000 довольных клиентов</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Driver" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 bg-white p-[26px] rounded-3xl shadow-xl border border-zinc-100 w-[225px] h-[100px] max-w-[240px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-900 font-bold uppercase tracking-wider">Быстрая подача</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Почему выбирают нас?</h2>
            <p className="text-lg text-zinc-500 leading-relaxed">Мы гарантируем высочайший уровень сервиса и безопасности для вас и вашего автомобиля.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={ShieldCheck}
              title="Полная страховка"
              description="Все поездки застрахованы. Мы несем полную материальную ответственность за ваш автомобиль."
            />
            <FeatureCard 
              icon={Clock}
              title="Круглосуточно"
              description="Работаем 24/7 без выходных и праздников. Приедем в любую точку города в течение 20 минут."
            />
            <FeatureCard 
              icon={Star}
              title="Опытные водители"
              description="Стаж вождения каждого сотрудника — более 10 лет. Знание всех типов КПП и премиальных авто."
            />
            <FeatureCard 
              icon={MapPin}
              title="Любые расстояния"
              description="Поездки по городу, области и межгород. Доставим вас куда угодно с комфортом."
            />
            <FeatureCard 
              icon={CreditCard}
              title="Удобная оплата"
              description="Принимаем наличные, карты и переводы. Прозрачное ценообразование без скрытых доплат."
            />
            <FeatureCard 
              icon={Car}
              title="Бережное отношение"
              description="Относимся к вашему авто как к своему. Аккуратное вождение и соблюдение всех правил ПДД."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-12 tracking-tight">Как заказать услугу?</h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Оставьте заявку', desc: 'Позвоните нам или напишите в WhatsApp. Сообщите ваше местоположение и марку авто.' },
                  { step: '02', title: 'Ожидайте водителя', desc: 'Ближайший свободный водитель приедет к вам в течение 15-20 минут.' },
                  { step: '03', title: 'Поездка домой', desc: 'Передайте ключи водителю и наслаждайтесь комфортной поездкой на заднем сиденье.' },
                  { step: '04', title: 'Оплата и завершение', desc: 'По прибытии оплатите услугу удобным способом. Ваш авто припаркован у дома!' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-black text-zinc-100 leading-none">{item.step}</span>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                      <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h3 className="text-3xl font-bold mb-8">Нужен водитель прямо сейчас?</h3>
              <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
                Наши операторы на связи и готовы отправить к вам водителя в течение минуты.
              </p>
              <div className="space-y-4">
                <a href="tel:+77088363103" className="block w-full bg-white text-zinc-900 py-5 rounded-2xl text-center font-bold text-xl hover:bg-zinc-100 transition-all">
                  Позвонить: +7 708 836 3103
                </a>
                <a href="https://wa.me/77088363103" className="block w-full bg-emerald-500 text-white py-5 rounded-2xl text-center font-bold text-xl hover:bg-emerald-600 transition-all">
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Прозрачные тарифы</h2>
            <p className="text-lg text-zinc-500 leading-relaxed">Никаких скрытых платежей. Вы платите только за время и расстояние.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard 
              title="Стандарт"
              price="3 000 ₸"
              features={['Подача в черте города', 'Поездка до 10 км', 'Страховка включена', 'Ожидание до 10 мин']}
            />
            <PriceCard 
              title="Бизнес"
              price="5 000 ₸"
              features={['Приоритетная подача', 'Поездка до 20 км', 'Водитель в костюме', 'Ожидание до 20 мин', 'Любой класс авто']}
              recommended={true}
            />
            <PriceCard 
              title="За город"
              price="10 000 ₸"
              features={['Выезд за МКАД/КАД', 'Поездка до 40 км', 'Фиксированная цена', 'Обратный путь водителя']}
            />
          </div>
          <p className="text-center mt-12 text-zinc-400 text-sm">
            * Цены могут меняться в зависимости от времени суток и праздничных дней. Уточняйте у оператора.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-zinc-900 p-2 rounded-lg">
                  <Car className="text-white w-5 h-5" />
                </div>
                <span className="text-lg font-bold tracking-tight text-zinc-900">Трезвый Водитель</span>
              </div>
              <p className="text-zinc-500 max-w-sm leading-relaxed">
                Профессиональный сервис для тех, кто ценит безопасность и комфорт. Мы работаем, чтобы вы могли отдыхать без забот.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-6">Навигация</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a  className="hover:text-zinc-900 transition-colors">Преимущества</a></li>
                <li><a  className="hover:text-zinc-900 transition-colors">Как это работает</a></li>
                <li><a  className="hover:text-zinc-900 transition-colors">Цены</a></li>
                <li><a  className="hover:text-zinc-900 transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-6">Контакты</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +7 708 836 3103
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Алматы, Актау 
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-100 flex flex-col md:row justify-between items-center gap-4 text-zinc-400 text-xs font-medium uppercase tracking-widest">
            <p>© 2026 СЕРВИС ТРЕЗВЫЙ ВОДИТЕЛЬ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-900 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
