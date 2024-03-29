export const setLocalStorage = (size: number, value: number) => {
    const type = size === 3 ? 'ClassicRPSValue' : size === 5 && 'BonusRPSValue';
    localStorage.setItem(type, `${value}`);
}

export const getLocalStorage = (size: number) => {
    const type = size === 3 ? 'ClassicRPSValue' : size === 5 && 'BonusRPSValue';
    let value;
    try {
        value = Number(localStorage.getItem(type));
    } catch (e) {
        console.log(e);
        localStorage.setItem(type, '0');
        value = 0;
    }
    return value;
}