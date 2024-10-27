import s from './Card.module.scss';

const CardButtons = ({ status }) => {
  const renderButtons = () => {
    switch (status) {
      case 'New':
        return (
          <div className={s.card_btns}>
            <button className={`${s.btn} ${s.btn_close}`}>
              <img src='/close-icon.svg' alt='close' />
              Отменить
            </button>

            <button className={`${s.btn} ${s.btn_sec}`}>
              <img src='/done-icon.svg' alt='done' />
              Принять
            </button>
          </div>
        );
      case 'In-Progress':
        return (
          <div className={s.card_btns}>
            <button className={`${s.btn} ${s.btn_ready}`}>
              <img src='/done-icon-blue.svg' alt='done' />
              Готово
            </button>
          </div>
        );
      case 'Completed':
        return (
          <div className={s.card_btns}>
            <button className={`${s.btn} ${s.btn_complete}`}>Завершить</button>
          </div>
        );
      default:
        return null;
    }
  };

  return renderButtons();
};

export default CardButtons;
