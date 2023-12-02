import getData from "./getData";
import renderGoods from "./renderGoods";
import { goodsFilter } from "./filter";
import { debounce } from "./helpers";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const checkInp = document.getElementById('discount-checkbox');
    const checkMark = document.querySelector('.filter-check_checkmark');

    const debounceFunc = debounce((min = '', max = '', checkValue = false, searchValue = '') => {
        getData().then((data) => {
            renderGoods(goodsFilter(data, min, max, checkValue, searchValue));
        });
    });

    searchInput.addEventListener('input', () => {
        debounceFunc(minInput.value, maxInput.value, checkInp.checked, searchInput.value);
    });

    minInput.addEventListener('input', () => {
        debounceFunc(minInput.value, maxInput.value, checkInp.checked, searchInput.value);
    });

    maxInput.addEventListener('input', () => {
        debounceFunc(minInput.value, maxInput.value, checkInp.checked, searchInput.value);
    });

    checkInp.addEventListener('input', () => {
        if (checkInp.checked) {
            checkMark.classList.add('checked');
        } else {
            checkMark.classList.remove('checked');
        }
        debounceFunc(minInput.value, maxInput.value, checkInp.checked, searchInput.value);
    });
};

export default search;