// база данных находится в firebase
import Notify from 'simple-notify';

const getData = () => {
    console.log("привет");
  return fetch("https://test-f8d59-default-rtdb.firebaseio.com/goods.json")
    .then((response) => {
      if (response.ok) {
        new Notify({
          status: 'success',
          title: 'Успешно!',
          text: 'Запрос прошел успешно',
          effect: 'slide',
          type: 3,
          autoclose: true,
        });
        return response.json();
      } else {
        throw new Error('Ошибка запроса!');
      }
		}).catch(error => {
      new Notify({
        status: 'error',
        title: 'Ошибка!',
        text: error.message,
        effect: 'slide',
        type: 3,
        autoclose: true,
      });
    });
};

export default getData;
