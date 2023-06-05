import { refsPromise } from './refsPromise';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let currentDelay;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res({ position, delay });
      } else {
        // Reject
        rej({ position, delay });
      }
    }, delay);
  });
}

const onSubmitForm = e => {
  e.preventDefault();
  const amount = e.target.elements.amount.value;
  let delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(` Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
  e.target.reset();
};

refsPromise.formPromise.addEventListener('submit', onSubmitForm);
