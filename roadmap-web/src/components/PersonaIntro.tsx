import './PersonaIntro.css';

interface PersonaIntroProps {
  avatarImage: string;
}

export const PersonaIntro: React.FC<PersonaIntroProps> = ({ avatarImage }) => {
  return (
    <section className="persona-intro-section">
      <div className="persona-intro-avatar">
        <figure>
          <img src={avatarImage} alt="AI理财伙伴" />
        </figure>
      </div>

      <div className="persona-intro-content">
        <div className="intro-badge">专属理财伙伴</div>
        <h2>您的专属理财伙伴</h2>
        <p className="intro-subtitle">
          不只是业务办理，更是有温度的陪伴。从第一声问候开始，让客户感受到"被重视"的温暖。
        </p>

        <ul className="intro-points">
          <li>🎯 记住您的每一次到访 - 识别老客户并主动问候"王先生，欢迎回来！"，新客户则给予耐心引导，消除陌生感。</li>
          <li>💬 会读懂您的情绪 - 察觉客户犹豫时主动关心"需要我详细讲解吗？"，让每次交流都恰到好处。</li>
          <li>⏰ 24小时守候，从不疲倦 - 无论早晚，始终保持微笑和耐心，成为客户最可靠的金融助手。</li>
        </ul>

        <p className="intro-value">
          让冰冷的银行网点变成"有人情味"的服务空间，客户愿意多停留、多交流。
        </p>
      </div>
    </section>
  );
};

