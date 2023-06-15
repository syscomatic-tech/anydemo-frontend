'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPlans, subscribeToPlan } from '@/src/axios/axios';
import Loading from '@/src/components/shared/Loading';

import s from '../../styles/pages/subscription.module.css';

const SubscriptionPlan = () => {
  const dispatch = useDispatch();

  const { plans, loading, planLoading } = useSelector((state) => state.plan);

  const [active, setActive] = useState('month');

  const handleSubscribe = (priceId) => {
    dispatch(subscribeToPlan(priceId));
  };
  const Check = () => (
    <Image src='/check.svg' width={24} height={24} alt='check' />
  );
  const Cross = () => (
    <Image src='/crossO.svg' width={24} height={24} alt='cross' />
  );
  useEffect(() => {
    dispatch(getAllPlans());
  }, []);
  return (
    <div>
      <div className={s.subscriptionPlan}>
        <div className='pageTitle'>
          <h1>Subscription Plan</h1>
        </div>
        <div className={s.package}>
          <div className={s.box}>
            <div
              onClick={() => setActive('month')}
              className={s.monthly + ' ' + (active === 'month' && s.active)}
            >
              <span>Monthly</span>
            </div>
            <div
              onClick={() => setActive('year')}
              className={s.yearly + ' ' + (active === 'year' && s.active)}
            >
              <span>Yearly</span>
            </div>
          </div>
        </div>
        {loading && <Loading width={'100px'} height={'100px'} />}
        <div className={s.s_cards}>
          {plans?.map((item, i) => (
            // conditional bg
            <div
              className={s.s_card + ' ' + (i === 1 ? s.coloredBG : '')}
              key={item._id}
            >
              <div className={s.s_card__header}>
                <h3>{item?.title}</h3>
              </div>
              <div className={s.s_card__body}>
                <div className={s.s_card__price}>
                  <h1>
                    $
                    {active === 'month'
                      ? item?.monthlyPricing
                      : item?.annualPricing}
                  </h1>
                  <span>/per {active}</span>
                </div>
                <div className={s.s_card__features}>
                  <ul>
                    {item?.features?.map((feature) => (
                      <li key={feature._id}>
                        {feature?.isAvailable ? <Check /> : <Cross />}
                        <span>{feature?.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={s.s_card__button + ' ' + (i === 1 ? s.active : '')}
                >
                  <button
                    disabled={planLoading}
                    onClick={() =>
                      handleSubscribe(
                        active === 'month'
                          ? item?.monthlyPricingId
                          : item?.annualPricingId
                      )
                    }
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              {/* conditional tsg */}
              {i === 1 && (
                <div className={s.s_popular}>
                  <span>Popular</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={s.c_subscriptionPlan}>
        <div className='pageTitle'>
          <h1>Compare Subscription Plan</h1>
        </div>
        <div className={s.s_cards + ' ' + s.s_cards_c}>
          <div className={s.s_card_cf}>
            <div className={s.c_card_feature}>
              <div className={s.s_card__header_c}>
                <h3>Key features</h3>
              </div>
              <div className={s.s_card__features_c}>
                <ul>
                  <li>Create and send invoices</li>
                  <li>Track expenses</li>
                  <li>Unlimited contact</li>
                  <li>Multi - currency</li>
                </ul>
              </div>
            </div>
            <div className={s.c_card_feature}>
              <div className={s.s_card__header_c}>
                <h3>Advanced features</h3>
              </div>
              <div className={s.s_card__features_c}>
                <ul>
                  <li>Create and send invoices</li>
                  <li>Track expenses</li>
                  <li>Unlimited contact</li>
                  <li>Multi - currency</li>
                </ul>
              </div>
            </div>
          </div>
          {['1', '2', '3'].map((item, i) => (
            <div
              className={
                s.s_card + ' ' + s.s_card_c + ' ' + (i === 1 ? s.coloredBG : '')
              }
            >
              <div className={s.s_card__header}>
                <h3>Personal</h3>
              </div>
              <div className={s.s_card__body}>
                <div className={s.s_card__price}>
                  <h1>$50</h1>
                  <span>/per month</span>
                </div>
                <div
                  className={s.s_card__button + ' ' + (i === 1 ? s.active : '')}
                >
                  <button>Choose Plan</button>
                </div>
                <div className={s.s_card__features}>
                  <div className={s.s_card__header_c}>
                    <h3>Key features</h3>
                  </div>
                  <ul>
                    <li>
                      <span>Create and send invoices</span>
                      <Check />
                    </li>
                    <li>
                      <span>Track expenses</span>
                      <Cross />
                    </li>
                    <li>
                      <span>Unlimited contact</span>
                      <Check />
                    </li>
                    <li>
                      <span>Multi - currency</span>
                      <Check />
                    </li>
                  </ul>
                </div>
                <div className={s.s_card__features}>
                  <div className={s.s_card__header_c}>
                    <h3>Advanced features</h3>
                  </div>
                  <ul>
                    <li>
                      <span>Create and send invoices</span>
                      <Check />
                    </li>
                    <li>
                      <span>Track expenses</span>
                      <Cross />
                    </li>
                    <li>
                      <span>Unlimited contact</span>
                      <Check />
                    </li>
                    <li>
                      <span>Multi - currency</span>
                      <Check />
                    </li>
                  </ul>
                </div>
              </div>
              {/* conditional tsg */}
              {/* {i === 1 && <div className={s.s_popular}><span>Popular</span></div>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
