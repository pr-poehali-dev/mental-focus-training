import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/eaf7ec4f-084f-4238-a27b-9c04263f59d3/bucket/fa433413-1ba3-4103-95a0-fb202339344f.png";

const problems = [
  { icon: "Zap", text: "На тренировках всё получается — на соревнованиях руки-ноги не слушаются" },
  { icon: "Brain", text: "После одной ошибки уже не можешь переключиться и разваливаешься" },
  { icon: "TrendingDown", text: "Физически готов на 100%, а психологически выходишь на 40%" },
  { icon: "Clock", text: "Год за годом вкладываешь всё, а результат ниже своих возможностей" },
];

const methods = [
  {
    num: "01",
    title: "Идеомоторные тренировки",
    desc: "Мысленно прокручиваешь движения — мозг записывает их как реальные. Мышечные микронапряжения идентичны физическим. Тело «знает» паттерн уже на старте.",
  },
  {
    num: "02",
    title: "Нейропрограммирование",
    desc: "Переписываем сценарии-саботажники: «всегда проигрываю финалы», «в начале ошибся — всё пропало». Меняем программу — ты действуешь из уверенности, не из страха.",
  },
  {
    num: "03",
    title: "Самогипноз для ОБС",
    desc: "Учишься переводить себя в оптимальное боевое состояние за минуты. Без психолога рядом — только ты и навык управлять собой прямо перед выходом.",
  },
];

const reviews = [
  {
    name: "Алексей М.",
    sport: "Лёгкая атлетика",
    text: "Три года подряд проваливал финалы. После трёх сессий впервые вошёл в зону на соревнованиях. Стал призёром регионального чемпионата.",
  },
  {
    name: "Екатерина Р.",
    sport: "Фехтование",
    text: "Не могла переключиться после ошибки — матч уже был мысленно проигран. Теперь умею «обнулиться» за 30 секунд. Результат вырос на 2 разряда.",
  },
  {
    name: "Дмитрий С.",
    sport: "Плавание",
    text: "Психолог дал конкретные инструменты, а не просто «соберись». Первый раз в жизни показал личник именно на главных соревнованиях сезона.",
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", sport: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0a0f] text-white font-rubik min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-oswald text-xl font-bold tracking-widest text-orange-400 uppercase">
            МентальныйСтарт
          </span>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:block bg-orange-500 hover:bg-orange-400 text-white font-oswald font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            Написать
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundPosition: "75% top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/40" />

        <div className="absolute top-1/3 left-0 w-1 h-32 bg-orange-500" />
        <div className="absolute bottom-1/4 right-0 w-1 h-48 bg-blue-500" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-300 text-sm font-rubik tracking-wide">Спортивный психолог</span>
            </div>

            <h1
              className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <span className="text-white">Ты готов</span>
              <br />
              <span className="text-orange-400">физически.</span>
              <br />
              <span className="text-white">Пора быть готовым</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                ментально.
              </span>
            </h1>

            <p
              className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              Помогаю спортсменам входить в оптимальное боевое состояние
              и показывать максимум именно тогда, когда это важнее всего.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <button
                onClick={() => scrollTo("contact")}
                className="group bg-orange-500 hover:bg-orange-400 text-white font-oswald font-semibold text-lg uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 animate-pulse-glow flex items-center gap-3 justify-center"
              >
                Получить гайд СОСТОЯНИЕ
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("methods")}
                className="border border-white/20 hover:border-orange-400/60 text-white/80 hover:text-white font-rubik px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Как это работает
              </button>
            </div>

            <div className="flex gap-8 mt-14 animate-fade-up" style={{ animationDelay: "0.7s", opacity: 0 }}>
              {[["200+", "спортсменов"], ["5 лет", "практики"], ["87%", "улучшают результат"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-oswald text-3xl font-bold text-orange-400">{num}</div>
                  <div className="text-white/50 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/30" />
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-orange-500" />
            <span className="text-orange-400 font-oswald uppercase tracking-widest text-sm">Проблема</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-4">
            Узнаёшь себя?
          </h2>
          <p className="text-white/50 text-lg mb-14 max-w-xl">
            Спортсмены приходят ко мне с одним и тем же. Вот что происходит на самом деле:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {problems.map(({ icon, text }, i) => (
              <div
                key={i}
                className="group flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center group-hover:bg-orange-500/25 transition-colors">
                  <Icon name={icon} size={22} className="text-orange-400" />
                </div>
                <p className="text-white/75 text-base leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20">
            <p className="text-white/80 text-lg font-rubik leading-relaxed">
              <span className="text-orange-400 font-semibold">Это не про талант.</span> И не про «надо больше тренироваться».
              Это про то, что твоя голова работает против тебя в самый важный момент.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-blue-400" />
            <span className="text-blue-400 font-oswald uppercase tracking-widest text-sm">Решение</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-4">
            Оптимальное<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Боевое Состояние
            </span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            ОБС — это когда ты собран, сфокусирован, мобилизован, но не перегорел.
            Та самая «зона», в которой всё получается само. И в неё можно входить{" "}
            <span className="text-white font-medium">осознанно</span>, а не ждать,
            что случайно налетит.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: "Target", label: "Собран", color: "orange" },
              { icon: "Flame", label: "Мобилизован", color: "blue" },
              { icon: "Zap", label: "В потоке", color: "yellow" },
            ].map(({ icon, label, color }) => (
              <div key={label} className="text-center p-8 rounded-2xl border border-white/8 bg-white/[0.03]">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  color === "orange" ? "bg-orange-500/20" : color === "blue" ? "bg-blue-500/20" : "bg-yellow-500/20"
                }`}>
                  <Icon name={icon} size={28} className={
                    color === "orange" ? "text-orange-400" : color === "blue" ? "text-blue-400" : "text-yellow-400"
                  } />
                </div>
                <div className="font-oswald text-2xl font-bold text-white uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section id="methods" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-orange-500" />
            <span className="text-orange-400 font-oswald uppercase tracking-widest text-sm">Инструменты</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-14">
            Как мы это делаем
          </h2>

          <div className="space-y-6">
            {methods.map(({ num, title, desc }) => (
              <div
                key={num}
                className="group flex gap-6 md:gap-10 p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/25 transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0">
                  <span className="font-oswald text-5xl md:text-6xl font-bold text-white/10 group-hover:text-orange-500/30 transition-colors leading-none">
                    {num}
                  </span>
                </div>
                <div>
                  <h3 className="font-oswald text-2xl font-bold text-white uppercase mb-3 group-hover:text-orange-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-gradient-to-b from-transparent via-orange-950/8 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-orange-500" />
            <span className="text-orange-400 font-oswald uppercase tracking-widest text-sm">Отзывы</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-14">
            Результаты спортсменов
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(({ name, sport, text }) => (
              <div
                key={name}
                className="p-7 rounded-2xl border border-white/8 bg-white/[0.03] flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-white/75 leading-relaxed text-base flex-1">«{text}»</p>
                <div>
                  <div className="font-oswald font-semibold text-white text-lg">{name}</div>
                  <div className="text-orange-400/70 text-sm">{sport}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-10 md:p-16 rounded-3xl overflow-hidden border border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-transparent">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-4">
                Перестань терять результат
                <br />
                <span className="text-orange-400">там, где должен его брать</span>
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Напиши слово <span className="text-orange-400 font-semibold">СОСТОЯНИЕ</span> — получи бесплатный гайд
                по настройке ОБС перед стартом
              </p>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-oswald font-semibold text-lg uppercase tracking-wider px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Хочу гайд бесплатно
                <Icon name="Send" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-orange-500" />
            <span className="text-orange-400 font-oswald uppercase tracking-widest text-sm">Контакты</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-3">
            Оставь заявку
          </h2>
          <p className="text-white/50 mb-10">Отвечу в течение дня, договоримся на удобное время</p>

          {sent ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Icon name="CheckCircle" size={40} className="text-orange-400" />
              </div>
              <h3 className="font-oswald text-3xl font-bold uppercase text-white mb-3">Заявка принята!</h3>
              <p className="text-white/60">Свяжусь с тобой в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/60 text-sm font-rubik mb-2 uppercase tracking-wider">Имя</label>
                <input
                  type="text"
                  required
                  placeholder="Твоё имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-orange-500/60 text-white placeholder-white/25 px-5 py-4 rounded-xl outline-none transition-colors font-rubik"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm font-rubik mb-2 uppercase tracking-wider">Телефон или Telegram</label>
                <input
                  type="text"
                  required
                  placeholder="+7 900 000 00 00 или @username"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-orange-500/60 text-white placeholder-white/25 px-5 py-4 rounded-xl outline-none transition-colors font-rubik"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm font-rubik mb-2 uppercase tracking-wider">Вид спорта</label>
                <input
                  type="text"
                  placeholder="Например: лёгкая атлетика, плавание..."
                  value={form.sport}
                  onChange={(e) => setForm({ ...form, sport: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-orange-500/60 text-white placeholder-white/25 px-5 py-4 rounded-xl outline-none transition-colors font-rubik"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-oswald font-semibold text-lg uppercase tracking-wider py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 mt-2"
              >
                Отправить заявку
                <Icon name="ArrowRight" size={20} />
              </button>
              <p className="text-white/30 text-sm text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-oswald text-lg font-bold tracking-widest text-orange-400 uppercase">МентальныйСтарт</span>
          <span className="text-white/25 text-sm">© 2024 Спортивный психолог</span>
        </div>
      </footer>
    </div>
  );
}