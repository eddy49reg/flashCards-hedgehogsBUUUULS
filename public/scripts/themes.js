// document.querySelectorAll('.buttonDiv').forEach((btn) => {
//   btn.addEventListener('click', async (e) => {
//   console.log(e.target.className.includes('buttonTheme'));
// if (e.target.className.includes('buttonTheme')) {
//   const card = e.target.closest('.buttonDiv');
//   const cardId = card.dataset.id;
//   window.location.href = `http://localhost:3000/${cardId}`;

//   const res = await fetch(`${cardId}`, {
//     // method,
//     headers: {
//       'Content-Type': 'Application/json',
//     },
//   });
//     }
//   });
// });
const formAnswer = document.querySelectorAll('.js-card');
formAnswer.forEach((btn) => {
  btn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { answer } = e.target;
    const { id } = e.target.dataset;
    const cardId = await fetch(`/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        answer: answer.value,
      }),
    });
    const data = await cardId.json();
    const rightAnswer = e.target.querySelector('.right-answer');
    console.log(rightAnswer);
    if (data.status === true) {
      rightAnswer.innerHTML = data.message;
    } else {
      rightAnswer.innerHTML = data.message;
    }
  });
});
// if (formAnswer) {
//   formAnswer.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const { answer, id } = event.target;
//     const cardId = await fetch(`/cards/${id}`, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         answer: answer.value,
//       }),
//     });
//     const data = await cardId.json();
//     const rightAnswer = event.target.querySelector('.right-answer');
//     console.log(rightAnswer);
//     if (data.status === true) {
//       rightAnswer.innerHTML = data.message;
//     } else {
//       rightAnswer.innerHTML = data.message;
//     }
//   });
// }
