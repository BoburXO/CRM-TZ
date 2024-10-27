import React, { useState } from 'react';
import s from './sidebar.module.scss';
import { routes } from '../../db/routes.js';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const closeListToggle = () => {
    setActiveIndex((prev) => !prev);
  };

  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        <img src='/logo-arrow.svg' alt='arrow' />
        <img src='/logoU.svg' alt='logo' />
      </div>

      <div className={s.menu}>
        {routes.map((el, index) => (
          <div className={s.item} key={index}>
            <div
              className={`${s.btn} ${activeIndex === index ? s.active : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <img src={el.icon} alt='' />
            </div>

            <div
              className={`${s.list} ${activeIndex === index ? s.active : ''}`}
            >
              <div className={s.top}>
                <h4>Рекрутинг</h4>
                <button onClick={closeListToggle}>
                  <img src='/logo-arrow.svg' alt='arrow' />
                </button>
              </div>
              <div className={s.routes}>
                {el?.links?.map((link, i) => (
                  <Link key={i} to={`${link?.route}`}>
                    {link?.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={s.inner}>
        <div className={s.box}>
          <button>
            <img src='/settings.svg' alt='' />
          </button>
          <button>
            <img src='/notificate.svg' alt='' />
          </button>
        </div>
        <Link to={'/'} className={s.user}>
          <img src='/avatar.svg' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
