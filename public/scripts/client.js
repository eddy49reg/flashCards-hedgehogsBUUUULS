document
  .querySelector('.registration_user')
  .addEventListener('click', async (e) => {
    e.preventDefault();
    const { name, password, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });

    console.log(res);
    // const data = await res.json();
    // document.querySelector('.message').innerHTML = data.message;
  });
