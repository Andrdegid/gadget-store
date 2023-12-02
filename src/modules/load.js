import getData from "./getData";
import renderGoods from "./renderGoods";
// import postData from "./postData";

const load = () => {
    //const cartBtn = document.getElementById('cart');

    // Получение данных из базы 
    getData().then((data) => {
        renderGoods(data);
    });

    // Загрзка данных в базу
    // cartBtn.addEventListener('click', () => {
    //     postData().then((data) => {
    //         console.log(data);

    //         getData().then((data) => {
    //             console.log(data)
    //         });
    //     });
    // });
};

export default load;