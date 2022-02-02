import StepItem from './StepItem';

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br />
          {' '}
          Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem title="1. Start" icon="transactionstep-1.svg" desc1="Pilih salah satu game" desc2="yang ingin kamu top up" />
          <StepItem
            title="2. Fill Up"
            icon="transactionstep-2.svg"
            desc1="Top up sesuai dengan"
            desc2="nominal yang sudah tersedia"
          />
          <StepItem
            title="3. Be a Winner"
            icon="transactionstep-3.svg"
            desc1="Siap digunakan untuk"
            desc2="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
